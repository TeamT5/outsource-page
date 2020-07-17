import React from 'react'
import Head from 'next/head'
import Router from 'next/router'
import { isLocale } from 'src/scripts/translations/LocaleContext'

const LocaleRedirecter = () => {
  React.useEffect(() => {
    const { asPath } = Router
    if(isLocale(navigator.language)) {
      window.location.href = `/${navigator.language}${asPath}`
    } else if(navigator.language === 'zh-TW') {
      window.location.href = `/tw${asPath}`
    } else {
      window.location.href = `/en${asPath}`
    }
  })
  return (
    <Head>
      <meta name="robots" content="noindex, nofollow" />
    </Head>
  )
}

export default LocaleRedirecter
