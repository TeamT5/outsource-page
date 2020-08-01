
import React from 'react'
import styles from './BannerContent.module.scss'
import useTranslation from 'src/scripts/translations/useTranslation'

const BannerContent = () => {
  const { t, locale } = useTranslation()
  const renderClassName = (locale) => {
    if (locale === 'tw') {
      return styles['title']
    } else {
      return `${styles['title']} ${styles['title-en']}`
    }
  }
  return (
    <div className={styles['container']}>
      <div className={styles['title-wrap']}>
        <h1 className={renderClassName(locale)} dangerouslySetInnerHTML={{ __html: t('about-us.title') }} />
        <div className={styles['title-lightheight']}></div>
      </div>
      <div className={styles['img-wrap']}>
        <div className={styles['mask']}></div>
        <img className={styles['img']} src="/images/about_us/about_cover.jpg" />
      </div>
    </div>
  )
}


export default BannerContent
