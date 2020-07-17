import React from 'react'
import Head from 'next/head'
import LocaleRedirecter from 'src/components/common/LocaleRedirecter'

const ThreatSonarPage = () => {
  return (
    <LocaleRedirecter>
      <Head>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
    </LocaleRedirecter>
  )
}

export default ThreatSonarPage
