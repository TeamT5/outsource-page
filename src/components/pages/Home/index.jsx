import React, { useState, useContext } from 'react'
import BaseLayout from '../../layout/BaseLayout'
import PropTypes from 'prop-types'
import styles from './index.module.scss'
import { Section1, Section2, Section3 } from './sections'
import Head from 'next/head'
import { LocaleContext } from 'src/scripts/translations/LocaleContext'

const Home = (props) => {
  const blogs = props.blogs
  const newsAndEvents = props.newsAndEvents
  const [section1Loaded, setSection1Loaded] = useState(false)
  const localContext = useContext(LocaleContext)

  return (
    <BaseLayout
      loadFinished={section1Loaded}
      classes={{
        header: styles['layout-header'],
        scrollActiveHeader: styles['layout-header-scroll-active'],
        background: styles['layout-background'],
        scrollActivebackground: styles['layout-background-scroll-active-background'],
      }}
      iconMode={{
        origin: 'light',
        scrollActive: 'dark',
      }}
    >
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
          content={`https://teamt5.org${(localContext.locale) ? `/${localContext.locale}` : ''}/blog`}
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/images/og-image.jpg" />
      </Head>
      <div className={styles['home-container']}>
        <Section1
          onLoaded={() => {
            setSection1Loaded(true)
          }}
        />
        <Section2/>

        <Section3
          blogs={blogs}
          newsAndEvents={newsAndEvents}
        />
      </div>
    </BaseLayout>
  )
}

Home.propTypes = {
  blogs: PropTypes.array,
  newsAndEvents: PropTypes.array,
}

export default Home
