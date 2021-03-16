/**
 * Syncs package.json version with constants file for release.
 *
 * Triggered inside `postversion` hook in package.json.
 *
 * See: https://semantic-release.gitbook.io/semantic-release/support/faq#how-can-i-use-a-npm-build-script-that-requires-the-package-jsons-version
 */

import { readFileSync, writeFileSync } from 'fs'
import path from 'path'

import { name, version } from '../package.json'
import { USER_AGENT } from '../src/constants'

const CONSTANTS_FILE = path.join(__dirname, '../lib/constants.js')

const constants = readFileSync(CONSTANTS_FILE, { encoding: 'utf8' })
const replaced = constants.replace(USER_AGENT, `${name}/${version}`)

writeFileSync(CONSTANTS_FILE, replaced, { encoding: 'utf8' })
