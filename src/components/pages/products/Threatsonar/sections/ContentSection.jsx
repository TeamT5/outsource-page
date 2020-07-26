import React from 'react'
import styles from './ContentSection.module.scss'
import useTranslation from 'src/scripts/translations/useTranslation'

 const functions = [
    { articleWrap: {
        context: 'solution.sonar.intro.context',
        img: '/images/ThreatSonar/what_is_sonar.svg',
        reverse: true },
    },
    { articleWrapSecond: {
        title: 'solution.sonar.function.ca-title',
        context: 'solution.sonar.function.ca-context',
        img: '/images/ThreatSonar/CompromiseAssessment.svg',
        reverse: false,
    }},
    {
      articleWrapThird: {
        title: 'solution.sonar.function.ir-title',
        context: 'solution.sonar.function.ir-context',
        img: '/images/ThreatSonar/IncidentResponse.svg',
        reverse: true,
    }},
    {
      articleWrapFourth: {
          title: 'solution.sonar.function.mdr-title',
          context: 'solution.sonar.function.mdr-context',
          img: '/images/ThreatSonar/MDRplatform.svg',
          reverse: false,
        },
    },
    ]

 const ContentSection = () => {
  const { t } = useTranslation()
  return (
    <div className={styles['container']}>
       {functions && functions.map((functionItem, index)=> {
             const getItem = Object.values(functionItem)[0] ? Object.values(functionItem)[0] : null
             
             return (<div key={index} className={getItem.reverse ? styles['card-reverse'] : styles['card']}>
              <img src={getItem && getItem.img ? (Object.values(functionItem)[0]).img : '' }/>
              <div className={styles['content']}>
                    {getItem && getItem.title
                    && <h4 className={styles['title']}>
                      {t(Object.values(functionItem)[0].title)}
                    </h4>}
                    {getItem && getItem.context
                    && <p className={styles['text']}>
                    {t(getItem.context)}
                    </p>}

              </div>
            </div>)
          },
       )}
    </div>
  )
}


export default ContentSection
