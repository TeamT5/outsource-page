import React from 'src/pages/privacy-and-cookies-policy/react'
import Head from 'src/pages/privacy-and-cookies-policy/next/head'
import LocaleRedirecter from 'src/pages/privacy-and-cookies-policy/src/components/common/LocaleRedirecter'

const PrivacyAndCookiesPolicyPage = () => {
  return (
    <LocaleRedirecter>
      <Head>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
    </LocaleRedirecter>
  )
}

export default PrivacyAndCookiesPolicyPage
