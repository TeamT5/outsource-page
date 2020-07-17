import getConfig from 'next/config'
const { serverRuntimeConfig, publicRuntimeConfig } = getConfig()
const config = (process.browser) ? publicRuntimeConfig : serverRuntimeConfig

const baseUrl = config.baseUrl

export const getBaseUrl = (locale) => {
  return `${baseUrl}${(locale) ? `${locale}/` : ''}`
}
