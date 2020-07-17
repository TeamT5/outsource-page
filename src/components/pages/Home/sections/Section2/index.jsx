import React, { useState, useEffect } from 'react'
import styles from './index.module.scss'
import ThreatSonarContext from './ThreatSonarContext'
import ThreatVisionContext from './ThreatVisionContext'
import useTranslation from 'src/scripts/translations/useTranslation'
import { Element as ScrollElement } from 'react-scroll'

const Section2 = React.memo(() => {
  const [sonarTriAnimated, setSonarTriAnimated] = useState(false)
  const [visionTriAnimated, setVisionTriAnimated] = useState(false)
  const { t } = useTranslation()
  useEffect(() => {
    const onScrolled = () => {
      if(!sonarTriAnimated) {
        if(document.documentElement.scrollTop > 500) {
          setSonarTriAnimated(true)
        }
      }
      if(!visionTriAnimated) {
        if(document.documentElement.scrollTop > 1000) {
          setVisionTriAnimated(true)
        }
      }
    }
    document.addEventListener('scroll', onScrolled)
    return () => {
      document.removeEventListener('scroll', onScrolled)
    }
  }, [])

  return (
    <section className={styles['section2']}>
      <ScrollElement name="section2"></ScrollElement>
      <article>
        <header>
          <h2>
            {t('common.solution')}
          </h2>
          <div className={styles['line']}></div>
        </header>
        <div className={styles['content']}>
          <ThreatSonarContext
            sonarTriAnimated={sonarTriAnimated}
          />
          <ThreatVisionContext
            visionTriAnimated={visionTriAnimated}
          />
        </div>
      </article>
    </section>
  )
})
Section2.displayName = 'Section2'
export default Section2
