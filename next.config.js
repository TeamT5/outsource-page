
const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const runtimeConfig = require('./runtimeConfig.json')

const isExport = process.env.NODE_ENV === 'export'

const locales = ['en', 'tw', 'jp']

const baseConfig = {
  env: process.env.NODE_ENV
}

let publicRuntimeConfig, serverRuntimeConfig
publicRuntimeConfig = {
  ...baseConfig,
  baseUrl: (isExport) ? runtimeConfig.publicRuntimeConfig.exportWebUrl : runtimeConfig.publicRuntimeConfig.webUrl,
  cmsUrl: runtimeConfig.publicRuntimeConfig.cmsUrl,
  isExport: isExport,
}

serverRuntimeConfig = {
  ...baseConfig,
  baseUrl: (isExport) ? runtimeConfig.serverRuntimeConfig.exportWebUrl : runtimeConfig.serverRuntimeConfig.webUrl,
  cmsUrl: runtimeConfig.serverRuntimeConfig.cmsUrl,
  isExport: isExport,
}

module.exports = {
  exportTrailingSlash: true,
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: '[local]___[hash:base64:5]',
  },
  exportPathMap: async function () {
    const paths = {}

    paths['/404'] = { page: '/404' }
    paths[`/`] = { page: '/' }
    paths[`/blog`] = { page: '/blog' }
    paths[`/news-and-events`] = { page: '/news-and-events' }
    paths[`/terms-of-service`] = { page: '/terms-of-service' }
    paths[`/privacy-and-cookies-policy`] = { page: '/privacy-and-cookies-policy' }
    paths[`/products/threatsonar`] = { page: '/products/threatsonar' }
    paths[`/products/threatvision`] = { page: '/products/threatvision' }
    paths[`/contact-us`] = { page: '/contact-us' }

    locales.forEach((locale) => {
      paths[`/${locale}`] = { page: '/[lang]', query: { lang: locale }}
      paths[`/${locale}/blog`] = { page: '/[lang]/blog', query: { lang: locale }}
      paths[`/${locale}/news-and-events`] = { page: '/[lang]/news-and-events', query: { lang: locale }}
      paths[`/${locale}/terms-of-service`] = { page: '/[lang]/terms-of-service', query: { lang: locale }}
      paths[`/${locale}/privacy-and-cookies-policy`] = { page: '/[lang]/privacy-and-cookies-policy', query: { lang: locale }}
      paths[`/${locale}/products/threatsonar`] = { page: '/[lang]/products/threatsonar', query: { lang: locale } }
      paths[`/${locale}/products/threatvision`] = { page: '/[lang]/products/threatvision', query: { lang: locale } }
      paths[`/${locale}/contact-us`] = { page: '/[lang]/contact-us', query: { lang: locale } }
    })

    return paths;
  },
  webpack: (config) => {
    config.resolve.alias = {
      '@': path.resolve(__dirname),
      src: path.resolve(__dirname, 'src/'),
      components: path.resolve(__dirname, 'src/components/'),
      routePages: path.resolve(__dirname, 'src/pages/'),
      scripts: path.resolve(__dirname, 'src/scripts/'),
      styles: path.resolve(__dirname, 'src/styles/'),
      assets: path.resolve(__dirname, 'src/assets/'),
      ...config.resolve.alias,
    }
    config.module.rules.push({
      test: /\.(png|jp(e*)g|gif)$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: 'images/[hash]-[name].[ext]',
          },
        },
      ],
    })
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: '@svgr/webpack',
        },
      ],
    })
    config.module.rules.push({
      test: /\.md$/,
      use: [
        {
          loader: 'raw-loader',
        }
      ]
    })
    config.plugins = config.plugins || []
    config.plugins.push(
      new CopyWebpackPlugin({
        patterns: [
          { from: 'static-packs/dist', to: path.resolve(__dirname, 'public/static/packs') }
        ],
      })
    )
    return config
  },
  publicRuntimeConfig: publicRuntimeConfig,
  serverRuntimeConfig: serverRuntimeConfig
}
