const devBaseUrl = 'https://httpbin.org/'
const prodBaseUrl = 'https://httpbin.org/'

export const BASE_URL = 'development' === process.env.NODE_ENV ? devBaseUrl : prodBaseUrl

export const TIMEOUT = 5000
