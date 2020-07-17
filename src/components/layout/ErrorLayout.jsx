import React, { useState, useEffect, useContext } from 'react'
import PropTypes from 'prop-types'
import styles from './ErrorLayout.module.scss'
import Router from 'next/router'
import { AppContext } from 'scripts/generalStores'

const ErrorLayout = (props) => {
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

    setTimeout(() => {
      if(!loadFinished || !routeComplete) {
        appContext.loadingMaskRef.current.expand()
      }
    }, 4000)

    Router.events.on('routeChangeStart', routeChangeStart)
    Router.events.on('routeChangeComplete', routeChangeComplete)

    return () => {
      Router.events.off('routeChangeStart', routeChangeStart)
      Router.events.off('routeChangeComplete', routeChangeComplete)
    }
  }, [])

  useEffect(() => {
    if(loadFinished && routeComplete) {
      appContext.loadingMaskRef.current.expand()
    } else {
      appContext.loadingMaskRef.current.collapse()
    }
  }, [loadFinished, routeComplete])

  return (
    <div
      className={`
        ${styles['error-layout']}
      `}
    >
      <main className={styles['main']}>
        {props.children}
      </main>
    </div>
  )
}

ErrorLayout.propTypes = {
  classes: PropTypes.object,
  iconMode: PropTypes.object,
  loadFinished: PropTypes.bool,
}

export default ErrorLayout
