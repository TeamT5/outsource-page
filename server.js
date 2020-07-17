const express = require('express')
const next = require('next')
const fs = require('fs')
const morgan = require('morgan')
const path = require('path')
const urlMap = require('./src/assets/url-map.json')

const port = process.env.PORT || 3000
const app = next({ dev: process.env.NODE_ENV !== 'production' })
const handle = app.getRequestHandler()
const runtimeConfig = require('./runtimeConfig.json')
const {getRssXml} = require('./src/scripts/rss')
const isExport = process.env.NODE_ENV === 'export'
const baseUrl = (isExport) ? runtimeConfig.publicRuntimeConfig.exportWebUrl : runtimeConfig.publicRuntimeConfig.webUrl
const locales = ['en', 'tw', 'jp']

;(async () => {
  // setup the logger
  await app.prepare()
  const server = express()

  // create a write stream (in append mode)
  if(!fs.existsSync(path.join(__dirname, 'log'))) {
    fs.mkdirSync(path.join(__dirname, 'log'))
  }
  const accessLogStream = fs.createWriteStream(path.join(__dirname, 'log/access.log'), {flags: 'a'})
  server.use(morgan('combined', {stream: accessLogStream}))

  urlMap.forEach((map) => {
    server.get(map.legacyUrl, (req, res) => {
      console.log(`/${map.lang}/posts/${map.uid}`)
      res.redirect(301, `/${map.lang}/posts/${map.uid}`)
    })
  })
  server.get('/blog/rss.xml', async (req, res) => {
    const rssPosts = []

    res.setHeader('Content-Type', 'text/xml')
    res.write(getRssXml(rssPosts, 'en', baseUrl))
    res.end()
  })

  server.get('/news-and-events/rss.xml', async (req, res) => {
    const rssPosts = []
    res.setHeader('Content-Type', 'text/xml')
    res.write(getRssXml(rssPosts, 'en', baseUrl))
    res.end()
  })

  locales.forEach((locale) => {
    server.get(`/${locale}/blog/rss.xml`, async (req, res) => {
      const rssPosts = []
      res.setHeader('Content-Type', 'text/xml')
      res.write(getRssXml(rssPosts, locale, baseUrl))
      res.end()
    })
    server.get(`/${locale}/news-and-events/rss.xml`, async (req, res) => {
      const rssPosts = []
      res.setHeader('Content-Type', 'text/xml')
      res.write(getRssXml(rssPosts, locale, baseUrl))
      res.end()
    })
  })

  server.get('*', (req, res) => handle(req, res))

  await server.listen(port)
  console.log(`> Ready on http://localhost:${port}`) // eslint-disable-line no-console
})()
