import React, { useState, useEffect, useContext } from 'react'
import PropTypes from 'prop-types'
import styles from './BaseLayout.module.scss'
import Footer from './Footer'
import Header from './Header'
import Router from 'next/router'
import { AppContext } from 'scripts/generalStores'

const BaseLayout = (props) => {
  const classes = props.classes
  const iconMode = props.iconMode
  const loadFinished = (props.loadFinished !== undefined)
    ? props.loadFinished : true
  const appContext = useContext(AppContext)
  const [routeComplete, setRouteComplete] = useState(true)

  useEffect(() => {
    const routeChangeStart = async () => {
      setRouteComplete(false)
      window.document.documentElement.scrollTop = 0
    }

    const routeChangeComplete = () => {
      setRouteComplete(true)
    }

    Router.events.on('routeChangeStart', routeChangeStart)
    Router.events.on('routeChangeComplete', routeChangeComplete)

    return () => {
      Router.events.off('routeChangeStart', routeChangeStart)
      Router.events.off('routeChangeComplete', routeChangeComplete)
    }
  }, [])

  useEffect(() => {
    if(loadFinished && routeComplete) {
      appContext.loadingMaskRef.current.expand && appContext.loadingMaskRef.current.expand()
    } else {
      appContext.loadingMaskRef.current.collapse && appContext.loadingMaskRef.current.collapse()
    }
  }, [loadFinished, routeComplete])

  return (
    <div
      className={`
        ${styles['base-layout']}
      `}
    >
      <Header
        classes={classes}
        iconMode={iconMode}
      />
      <main className={styles['main']}>
        {props.children}
      </main>
      <Footer
        mail="mk@teamt5.org"
        phone="+886. 7706. 1299"
        adress="15F., No. 46, Ln. 11, Guangfu N. Rd., Songshan Dist., 105 Taipei City, Taiwan"
      />
    </div>
  )
}

BaseLayout.propTypes = {
  classes: PropTypes.object,
  iconMode: PropTypes.object,
  loadFinished: PropTypes.bool,
}

export default BaseLayout
