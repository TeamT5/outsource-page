
import React from 'react'
import PropTypes from 'prop-types'
import styles from './BannerContent.module.scss'
import useTranslation from 'src/scripts/translations/useTranslation'

const BannerContent = (props) => {
  const { t } = useTranslation()

  return (
    <div className={styles['container']}>
          <div className={styles['title-wrap']}>
              <h1 className={styles['title']}>About Us</h1>
              <div className={styles['title-lightheight']}></div>
          </div>
          <div className={styles['img-wrap']}>
              <div className={styles['mask']}></div>
              <img className={styles['img']} src="/images/about_us/about_cover.jpg"/>
          </div>
    </div>
  )
}


export default BannerContent
