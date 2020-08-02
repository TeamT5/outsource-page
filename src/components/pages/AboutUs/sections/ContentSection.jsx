import React, { useRef, useEffect, useState, useCallback, createRef } from 'react'
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
  const cardRef = useRef(null)
  const leadershipRef = useRef(null)
  const leadershipContentRef = useRef(null)
  const leadershipRef2 = useRef(null)
  const contentRef = useRef(content.map(() => createRef()))
  const [currentScrollTop, setCurrentScrollTop] = useState({ offsetHeight: 0, clientHeight: 0, scrollTop: 0 })

  const getScrollTop = (e) => {
    const { offsetHeight, clientHeight, scrollTop } = e.target.scrollingElement
    if (currentScrollTop.scrollTop === scrollTop) { return }
    setCurrentScrollTop({ offsetHeight, clientHeight, scrollTop })
  }

  useEffect(() => {
    document.addEventListener('scroll', getScrollTop)
    return () => {
      document.removeEventListener('scroll', getScrollTop)
    }
  }, [])

  const isShowClass = useCallback((currentRef) => {
    if (!currentRef.current) { return '' }
    if (currentRef.current.className.indexOf('show') > -1) { return styles['show'] }
    return (currentScrollTop.clientHeight + currentScrollTop.scrollTop) >= currentRef.current.getBoundingClientRect().top ? styles['show'] : ''
  }, [currentScrollTop])

  return (
    <div className={styles['container']}>
      <div
        className={`${styles['card-with-photo-container']}`}
      >
        <div className={styles['left-side']}>
          <h5 ref={leadershipRef} className={`${styles['leadership-text']} ${isShowClass(leadershipRef)}`} dangerouslySetInnerHTML={{ __html: t('about-us.our-leadership.title') }} />
        </div>
        <div className={styles['right-side']}>
          <div ref={cardRef} className={`${styles['mask']} ${isShowClass(cardRef)}`} />
          <img src="/images/about_us/CEO_TT.jpg" />
          <div ref={leadershipContentRef} className={`${styles['leadership-content']} ${isShowClass(leadershipContentRef)}`}>
            <p className={styles['leadership-head']} dangerouslySetInnerHTML={{ __html: t('about-us.our-leadership.content.title') }} />
            <div className={styles['article-context']} dangerouslySetInnerHTML={{ __html: t('about-us.our-leadership.content.context') }} />
          </div>
        </div>
      </div>
      <div className={styles['card-container']}>
        <div className={styles['left-side']}>
          <h5 ref={leadershipRef2} className={`${styles['leadership-text']} ${isShowClass(leadershipRef2)}`} dangerouslySetInnerHTML={{ __html: t('about-us.our-cyber-threat-experts.title') }} />
        </div>
        <div className={styles['right-side']}>
          {content.map((card, index) => (
            <div className={`${styles['leadership-content']} ${isShowClass(contentRef.current[index])}`} ref={contentRef.current[index]} key={index}>
              <p className={styles['leadership-head']} dangerouslySetInnerHTML={{ __html: t(card.title) }} />
              <div className={styles['article-context']} dangerouslySetInnerHTML={{ __html: t(card.context) }} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}


export default ContentSection
