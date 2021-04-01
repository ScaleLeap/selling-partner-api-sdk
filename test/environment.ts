import env from 'env-var'

/**
 * Reads environment variables.
 *
 * Set either via CLI or in the `.env` file.
 *
 * @example
 *
 * `CLIENT_ID=xyz npm start`
 */

export const AWS_ACCESS_KEY_ID = env.get('AWS_ACCESS_KEY_ID').required().asString()

export const AWS_SECRET_ACCESS_KEY = env.get('AWS_SECRET_ACCESS_KEY').required().asString()

export const CLIENT_ID = env.get('CLIENT_ID').required().asString()

export const CLIENT_SECRET = env.get('CLIENT_SECRET').required().asString()

export const REFRESH_TOKEN = env.get('REFRESH_TOKEN').required().asString()

export const ROLE_ARN = env.get('ROLE_ARN').required().asString()
