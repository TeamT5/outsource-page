import React, { Fragment } from 'react'
import styles from './ContentSection.module.scss'
import useTranslation from 'src/scripts/translations/useTranslation'

const content = [
  {
    title: 'about-us.our-cyber-threat-experts.analyst-title',
    context: 'about-us.our-cyber-threat-experts.analyst-context',
  },
  {
    title: 'about-us.our-cyber-threat-experts.engine-lab-title',
    context: 'about-us.our-cyber-threat-experts.engine-lab-context',
  },
  {
    title: 'about-us.our-cyber-threat-experts.d39-title',
    context: 'about-us.our-cyber-threat-experts.d39-context',
  },
  {
    title: 'about-us.our-cyber-threat-experts.ir-team-title',
    context: 'about-us.our-cyber-threat-experts.ir-team-context',
  },
]
const ContentSection = () => {
  const { t } = useTranslation()
  return (
    <div className={styles['container']}>
      <div
        className={`${styles['card-with-photo-container']} ${styles['card-container']}`}
      >
        <div className={styles['left-side']}>
          <h5 className={styles['leadership-text']} dangerouslySetInnerHTML={{ __html: t('about-us.our-leadership.title') }} />
        </div>
        <div className={styles['right-side']}>
          <img src="/images/about_us/CEO_TT.jpg" />
          <p className={styles['leadership-head']} dangerouslySetInnerHTML={{ __html: t('about-us.our-leadership.content.title') }} />
          <div className={styles['article-context']} dangerouslySetInnerHTML={{ __html: t('about-us.our-leadership.content.context') }} />
        </div>
      </div>
      <div className={styles['card-container']}>
        <div className={styles['left-side']}>
          <h5 className={styles['leadership-text']} dangerouslySetInnerHTML={{ __html: t('about-us.our-cyber-threat-experts.title') }} />
        </div>
        <div className={styles['right-side']}>
          {content.map((card, index) => (
            <Fragment key={index}>
              <p className={styles['leadership-head']} dangerouslySetInnerHTML={{ __html: t(card.title) }} />
              <div className={styles['article-context']} dangerouslySetInnerHTML={{ __html: t(card.context) }} />
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ContentSection
