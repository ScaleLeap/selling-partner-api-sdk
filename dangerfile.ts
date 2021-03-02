import { danger, warn } from 'danger'

const packageChanged = danger.git.modified_files.includes('package.json')
const lockfileChanged = danger.git.modified_files.includes('package-lock.json')

if (packageChanged && !lockfileChanged) {
  const message = 'Changes were made to `package.json`, but not to `package-lock.json`.'
  warn(message)
}
