const webpack = require('webpack')
const fs = require('fs')
const stylesConfig = require('./static-packs/styles.webpack.config')
const webComponentsConfig = require('./static-packs/web-components.webpack.config')

const buildWc = async () => {
  return await new Promise((resolve, reject) => {
    webpack(webComponentsConfig, (err, stats) => {
      if (err) {
        return reject(err)
      }
      if (stats.hasErrors()) {
        return reject(new Error(stats.compilation.errors.join('\n')))
      }
      resolve()
    })
  })
}

const buildStyles = async () => {
  return await new Promise((resolve, reject) => {
    webpack(stylesConfig, (err, stats) => {
      if (err) {
        return reject(err)
      }
      if (stats.hasErrors()) {
        return reject(new Error(stats.compilation.errors.join('\n')))
      }
      resolve()
    })
  })
}

const buildStaticPacks = async () => {
  await buildWc()
  await buildStyles()
}

const generateRss = async () => {
  const runtimeConfig = require('./runtimeConfig.json')
  const { getRssXml } = require('./src/scripts/rss')
  const locales = ['en', 'tw', 'jp']
  const isExport = process.env.NODE_ENV === 'export'
  const baseUrl = (isExport) ? runtimeConfig.publicRuntimeConfig.exportWebUrl : runtimeConfig.publicRuntimeConfig.webUrl

  const rssBlogPosts = []

  fs.writeFileSync('out/blog/rss.xml', getRssXml(rssBlogPosts, 'en', baseUrl))
  locales.forEach((locale) => {
    if(!fs.existsSync(`out/${locale}/blog/`)) {
      fs.mkdirSync(`out/${locale}/blog`)
    }
    fs.writeFileSync(`out/${locale}/blog/rss.xml`, getRssXml(rssBlogPosts, locale, baseUrl))
  })
  fs.writeFileSync('out/news-and-events/rss.xml', getRssXml(rssBlogPosts, 'en', baseUrl))
  locales.forEach((locale) => {
    if(!fs.existsSync(`out/${locale}/news-and-events/`)) {
      fs.mkdirSync(`out/${locale}/news-and-events`)
    }
    fs.writeFileSync(`out/${locale}/news-and-events/rss.xml`, getRssXml(rssBlogPosts, locale, baseUrl))
  })
}

exports.buildWc = buildWc
exports.buildStyles = buildStyles
exports.buildStaticPacks = buildStaticPacks

exports.generateRss = generateRss
