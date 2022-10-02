import axios from 'axios'

// eslint-disable-next-line import/no-cycle
import { ReportsApiClientV20210630 } from '../api-clients/reports-api-client-v20210630'
import { AMAZON_US_MARKETPLACE_ID } from './constants'
import { sleep, tabDelimitedToArray } from './utils'

export interface ReportParameters {
  startDate: string
  endDate: string
  marketplaceIds?: string[]
}

export interface ReportOptions {
  parse: boolean
}

export interface LatestReportOptions {
  parse?: boolean
  scheduledOnly?: boolean
}

export interface GetReportOptions {
  sleepTime: number
  maxAttempts: number
  parse: boolean
}

export class ReportHelpers {
  /**
   * Given a reportId will download the report, handle gzip, optionally parse tsv to json
   */
  public static async DownloadReport(
    reportsClient: ReportsApiClientV20210630,
    reportId: string,
    reportOptions?: ReportOptions,
  ): Promise<string | Record<string, unknown>[]> {
    const { parse = true } = reportOptions || {}

    // Get a list of the latest report
    const getReportResponse = await reportsClient.getReport({
      reportId,
    })

    // ensure we have a document ID
    const reportDocumentId = getReportResponse.data?.reportDocumentId || ''
    if (!reportDocumentId) {
      // amazon couples the concepts "empty report" and "cancelled report"
      // we want to default to returning an empty report
      return []
    }

    // fetch the report document
    const documentResponse = await reportsClient.getReportDocument({
      reportDocumentId,
    })

    // fetch the raw content
    const contentResponse = await axios.get(documentResponse.data.url)
    const rawData = contentResponse.data

    // optionally parse the results
    if (parse) {
      return tabDelimitedToArray(rawData)
    }
    return rawData
  }

  public static async GetLatestReport(
    reportsClient: ReportsApiClientV20210630,
    reportType: string,
    latestReportOptions?: LatestReportOptions,
  ): Promise<string | Record<string, unknown>[]> {
    const { parse = true, scheduledOnly = false } = latestReportOptions || {}

    // Get a list of the latest 10 reports
    const getReportResponse = await reportsClient.getReports({
      reportTypes: [reportType],
      processingStatuses: ['DONE'],
      pageSize: 10,
    })

    // if we only want scheduled, find the latest scheduled one
    const latestReport = scheduledOnly
      ? getReportResponse.data?.reports?.find((report) => report.reportScheduleId)
      : getReportResponse.data?.reports?.[0]

    if (!latestReport) {
      return parse ? [] : ''
    }

    const { reportId } = latestReport

    // if we failed to get any report, return empty
    if (!reportId) {
      return parse ? [] : ''
    }

    return ReportHelpers.DownloadReport(reportsClient, reportId, { parse })
  }

  public static async GetReport(
    reportsClient: ReportsApiClientV20210630,
    reportParameters: ReportParameters,
    reportType: string,
    getReportOptions?: GetReportOptions,
  ): Promise<string | Record<string, unknown>[]> {
    const { sleepTime = 10, maxAttempts = 15, parse = true } = getReportOptions || {}

    // request a new report
    const createReportResponse = await reportsClient.createReport({
      body: {
        dataStartTime: reportParameters.startDate,
        dataEndTime: reportParameters.endDate,
        marketplaceIds: reportParameters.marketplaceIds || [AMAZON_US_MARKETPLACE_ID],
        reportType,
      },
    })

    // loop on interval waiting until we're done
    const { reportId } = createReportResponse.data
    let reportStatus
    let attempts = 0
    while (!['DONE', 'CANCELLED'].includes(reportStatus)) {
      // eslint-disable-next-line no-await-in-loop
      await sleep(sleepTime)
      // eslint-disable-next-line no-await-in-loop
      const getReportResponse = await reportsClient.getReport({
        reportId,
      })

      reportStatus = getReportResponse.data.processingStatus
      // eslint-disable-next-line no-console
      console.debug(`Report status for reportId ${reportId}: ${reportStatus}`)

      // prevent infinite while loop
      attempts += 1
      if (attempts > maxAttempts) {
        throw new Error(`Too many attempts to fetch a DONE response for report ${reportId}`)
      }
    }

    // If the report failed
    if (reportStatus === 'CANCELLED') {
      throw new Error(`Report ${reportId} is Cancelled`)
    }
    return ReportHelpers.DownloadReport(reportsClient, reportId, { parse })
  }
}
