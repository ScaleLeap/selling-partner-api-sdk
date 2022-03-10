import axios from 'axios'

// eslint-disable-next-line import/no-cycle
import { ReportsApiClientV20210630 } from '../api-clients/reports-api-client-v20210630'
import { AMAZON_US_MARKETPLACE_ID } from './constants'
import { sleep, tabDelimitedToArray } from './utils'

interface ReportParameters {
  startDate: string
  endDate: string
  marketplaceIds?: string[]
}

/**
 * Allow other people to use the parsing function
 */
export { tabDelimitedToArray as parseAmazonReport }

/**
 * Fetch the latest parsed data of a report
 */
export async function getLatestReportHelper(
  reportsClient: ReportsApiClientV20210630,
  reportType: string,
  parse = true,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
): Promise<string | any> {
  // Get a list of the latest report
  const getReportResponse = await reportsClient.getReports({
    reportTypes: [reportType],
    processingStatuses: ['DONE'],
    pageSize: 1,
  })

  // ensure we have a document ID
  const reportDocumentId = getReportResponse.data.reports?.[0]?.reportDocumentId || ''
  if (!reportDocumentId) {
    throw new Error(`No report for ${reportType}`)
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

/**
 * Request, wait and parse results of an Amazon Report
 */
export async function getReportHelper(
  reportsClient: ReportsApiClientV20210630,
  reportType: string,
  reportParameters: ReportParameters,
  sleepTime = 10,
  maxAttempts = 15,
  parse = true,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
): Promise<string | any> {
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
  let reportDocumentId
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
    reportDocumentId = getReportResponse.data?.reportDocumentId || ''

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

  // fetch the report document
  const documentResponse = await reportsClient.getReportDocument({
    reportDocumentId,
  })
  // fetch the actual content
  const contentResponse = await axios.get(documentResponse.data.url)
  const rawData = contentResponse.data

  // optionally parse the results
  if (parse) {
    return tabDelimitedToArray(rawData)
  }
  return rawData
}
