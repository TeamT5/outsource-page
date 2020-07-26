import React, {useContext} from 'react'
import BaseLayout from '../../../layout/BaseLayout'
import Head from 'next/head'
import {BannerContent, ContentSection} from './sections'
import styles from './index.module.scss'
import useTranslation from 'src/scripts/translations/useTranslation'
import { LocaleContext } from 'src/scripts/translations/LocaleContext'


const Threatsonar = () => {
  const { t } = useTranslation()
  const localContext = useContext(LocaleContext)
  return (
    <BaseLayout>
      <Head>
        <title>{'TeamT5 - Persistent Cyber Threat Hunters'}</title>
        <meta
        property="og:title"
        content="TeamT5 - Persistent Cyber Threat Hunters"
        />
        <meta
        name="description"
        content="TeamT5 is a group of hackers dedicated on cyber threat research. The team started with their outstanding research and has been delivering their cyber threat intelligence (CTI) for more than 5 years."
        />
        <meta
        property="og:description"
        content="TeamT5 is a group of hackers dedicated on cyber threat research. The team started with their outstanding research and has been delivering their cyber threat intelligence (CTI) for more than 5 years."
        />
        <meta
        property="og:url"
        content={`https://teamt5.org${t(localContext.locale) ? `/${localContext.locale}` : ''}/products/threatsonar`}
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/images/og-image.jpg" />
      </Head>
      <div className={styles['context']}>
        <BannerContent
          className={styles['hero-img']}
        />
        <ContentSection/>
      </div>
    </BaseLayout>
  )
}

export default Threatsonar
