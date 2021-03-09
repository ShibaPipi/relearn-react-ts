const devBaseUrl = ''
const prodBaseUrl = ''
export const BASE_URL = 'development' === process.env.NODE_ENV ? devBaseUrl : prodBaseUrl

export const TIMEOUT = 5000
