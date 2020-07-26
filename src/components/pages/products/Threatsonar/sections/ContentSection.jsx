import React from 'react'
import styles from './ContentSection.module.scss'
import useTranslation from 'src/scripts/translations/useTranslation'

 const functions = ['solution.sonar.intro.context',
    'solution.sonar.function.ca-title',
    'solution.sonar.function.ca-context',
    'solution.sonar.funtion.ir-title',
    'solution.sonar.funtion.ir-context',
    'solution.sonar.funtion.mdr-title',
    'solution.sonar.funtion.mdr-context']

 const ContentSection = () => {
  const { t } = useTranslation()
  
  return (
    <div className={styles['container']}>
      <div className={styles['article-wrap']}>
        <div className={styles['card']}>
          <img src='/images/ThreatSonar/what_is_sonar.svg'/>
        </div>
      </div>
      <div className={styles['article-wrap-second']}>
        <div className={styles['card']}>
          <img src='/images/ThreatSonar/CompromiseAssessment.svg'/>
        </div>
      </div>
      <div className={styles['article-wrap-third']}>
        <div className={styles['card']}>
          <img src='/images/ThreatSonar/IncidentResponse.svg'/>
        </div>
      </div>
      <div className={styles['article-wrap-fourth']}>
        <div className={styles['card']}>
          <img src='/images/ThreatSonar/MDRplatform.svg'/>
        </div>
      </div>
    </div>
  )
}


export default ContentSection
