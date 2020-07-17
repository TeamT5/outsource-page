import React, { useRef, useState, useEffect } from 'react'
import Router, { useRouter } from 'next/router'
import PropTypes from 'prop-types'
import NextApp from 'next/app'
import Head from 'next/head'
import { AppContext } from '../scripts/generalStores'
import { LocaleProvider, isLocale } from 'src/scripts/translations/LocaleContext'
import getConfig from 'next/config'
import Custom404 from '../components/pages/404'

const { serverRuntimeConfig, publicRuntimeConfig } = getConfig()
const config = (process.browser) ? publicRuntimeConfig : serverRuntimeConfig

const App = ({Component, pageProps}) => {
  const { query } = useRouter()
  const locale = query.lang
  const loadingMaskRef = useRef()
  const [maskLoaded, setMaskLoaded] = useState(false)

  const changeLocale = async (locale) => {
    const { pathname, asPath } = Router
    const s1 = pathname.split('/')
    const s2 = asPath.split('/')
    const langIndex = s1.indexOf('[lang]')

    loadingMaskRef.current.collapse()

    await new Promise((resolve) => {
      setTimeout(() => {
        resolve()
      }, 1700)
    })

    if(langIndex !== -1) {
      s2[langIndex] = locale
      if(config.isExport) {
        window.location.href = s2.join('/')
      } else {
        Router.push(pathname, s2.join('/'))
      }
    } else {
      s1[0] = '[lang]'
      s1.unshift('')
      s2[0] = locale
      s2.unshift('')
      if(config.isExport) {
        window.location.href = s2.join('/')
      } else {
        Router.push(s1.join('/'), s2.join('/'))
      }
    }
  }

  const routerPush = async (url, as, options) => {
    const { pathname, asPath } = Router
    const s1 = pathname.split('/')
    const s2 = asPath.split('/')
    const langIndex = s1.indexOf('[lang]')
    let routeUrl = url
    let routeAs = as

    loadingMaskRef.current.collapse()

    await new Promise((resolve) => {
      setTimeout(() => {
        resolve()
      }, 1700)
    })

    let locale = s2[langIndex]
    if(!isLocale(locale)) {
      locale = 'en'
    }
    routeUrl = `/[lang]${url}`
    routeAs = `/${locale}${as}`

    if(config.isExport) {
      window.location.href = routeAs
    } else {
      Router.push(routeUrl, routeAs, options)
    }
  }

  const windowOpen = (url) => {
    const { pathname, asPath } = Router
    const s1 = pathname.split('/')
    const s2 = asPath.split('/')
    const langIndex = s1.indexOf('[lang]')

    let locale = s2[langIndex]
    if(!isLocale(locale)) {
      locale = 'en'
    }
    window.open(`/${locale}${url}`)
  }

  useEffect(() => {
    if(!loadingMaskRef.current.loaded) {
      const onMaskLoaded = () => {
        setMaskLoaded(true)
      }
      loadingMaskRef.current.addEventListener('DOMNodeInserted', onMaskLoaded, false)
      return () => {
        loadingMaskRef.current.removeEventListener('DOMNodeInserted', onMaskLoaded)
      }
    } else {
      setMaskLoaded(true)
    }
  }, [])

  useEffect(() => {
    if(maskLoaded) {
      document.body.classList.add('loaded')
    }
  }, [maskLoaded])

  return (
    <AppContext.Provider value={{
      loadingMaskRef,
      routerPush,
      changeLocale,
      windowOpen,
    }}>
      <LocaleProvider lang={locale}>
        <Head>
          <link rel="shortcut icon" href="/favicon.ico" type="image/vnd.microsoft.icon" />
          <link rel="icon" href="/favicon.ico" type="image/vnd.microsoft.icon" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <loading-mask ref={loadingMaskRef}/>
        <div
          className={maskLoaded ? '' : 'invisible'}
        >
          {(locale && !isLocale(locale))
            ? (
              <Custom404/>
            ) : (
              <Component {...pageProps} />
            )
          }
        </div>
      </LocaleProvider>
    </AppContext.Provider>
  )
}

App.propTypes = {
  Component: PropTypes.func,
  pageProps: PropTypes.object,
}

App.getInitialProps = async (appContext) => {
  const appProps = await NextApp.getInitialProps(appContext)
  return { ...appProps }
}

export default App
