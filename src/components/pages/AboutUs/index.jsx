import React,{useState} from 'react'
import BaseLayout from '../../layout/BaseLayout'
import { Section1} from './sections'
import useTranslation from 'src/scripts/translations/useTranslation'
import styles from './index.module.scss'
import Head from 'next/head'

const AboutUs = () => {
    const { t } = useTranslation()
    const [section1Loaded, setSection1Loaded] = useState(false)

    return (
      <BaseLayout loadFinished={true}>
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
        {/* <meta
          property="og:url"
          content={`https://teamt5.org${(localContext.locale) ? `/${localContext.locale}` : ''}/blog`}
        /> */}
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/images/og-image.jpg" />
      </Head>
      <div className={styles['context']}>
                {/* <div
                    dangerouslySetInnerHTML={{
                        __html: t('about-us.our-leadership.content.context'),
                    }}
                /> */}
         <Section1
          className={styles['hero-img']}
          onLoaded={() => {
            setSection1Loaded(true)
          }}
        />
      </div>
        </BaseLayout>
    )
}

export default AboutUs
