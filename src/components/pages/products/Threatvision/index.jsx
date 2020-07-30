import React, { useContext, useEffect, useState, useRef } from 'react'
import BaseLayout from '../../../layout/BaseLayout'
import Head from 'next/head'
import styles from './index.module.scss'
import useTranslation from 'src/scripts/translations/useTranslation'
import { LocaleContext } from 'src/scripts/translations/LocaleContext'
import { BannerContent, InfoSection } from './sections'

const Threatvision = () => {
  const { t } = useTranslation()
  const localContext = useContext(LocaleContext)
  const [isOpen, setIsOpen] = useState(false)
  const windowWidthRef = useRef({ current: null })
  useEffect(() => {
    if (window.innerWidth) {
      windowWidthRef.current = window.innerWidth
    }
  }, [])
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
          content={`https://teamt5.org${t(localContext.locale) ? `/${localContext.locale}` : ''}/products/threatvision`}
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/images/og-image.jpg" />
      </Head>
      <div className={styles['context']}>
        <BannerContent />
        <InfoSection />
        <div className={styles['bubble']}>
          <p onClick={() => { setIsOpen(true) }}>Contact Us</p>
        </div>
        {isOpen && (<div className={windowWidthRef.current !== null && windowWidthRef.current > 375 ? styles['demo-mask'] : `${styles['demo-mask']} ${styles['demo-mask-mobile']}`} >
          <img src={windowWidthRef.current !== null && windowWidthRef.current > 375 ? '/images/form_demo.png' : '/images/form_demo_mobile.png'} onClick={() => { setIsOpen(false) }} />
        </div>)
        }
      </div>
    </BaseLayout>
  )
}

export default Threatvision
