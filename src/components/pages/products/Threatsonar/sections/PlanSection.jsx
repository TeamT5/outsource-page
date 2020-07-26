import React, {useMemo} from 'react'
import styles from './PlanSection.module.scss'
import useTranslation from 'src/scripts/translations/useTranslation'
import { XGrid } from '../../../../common/ui-components'

const whys = [
    {intelCorrelation: {title: 'solution.sonar.why.intel-correlation.title',
                        traits: ['solution.sonar.why.intel-correlation.trait-1',
                          'solution.sonar.why.intel-correlation.trait-2'],
                        img: '/images/ThreatSonar/why_IntelligenceCorelation.svg',
                        }},
    {crossPlatform: {title: 'solution.sonar.why.cross-platform.title',
                     traits: [ 'solution.sonar.why.cross-platform.trait-1'],
                     img: '/images/ThreatSonar/why_Cross-platformOperation.svg'}},
    {multiScenarios: { title: 'solution.sonar.why.multi-scenarios.title',
                       traits: ['solution.sonar.why.multi-scenarios.trait-1',
                                'solution.sonar.why.multi-scenarios.trait-2',
                                'solution.sonar.why.multi-scenarios.trait-3',
                                'solution.sonar.why.multi-scenarios.trait-4'],
                        img: '/images/ThreatSonar/why_Multi-Scenarios.svg'}},
    {forensicAnalysis: {title: 'solution.sonar.why.forensic-analysis.title'},
                        traits: [ 'solution.sonar.why.forensic-analysis.trait-1',
                            'solution.sonar.why.forensic-analysis.trait-2'],
                        img: '/images/ThreatSonar/why_ForensicAnalysis.svg',
                        }]


    const PlanSection = () => {
        const { t } = useTranslation()

        const Card = useMemo(() => {
            if(typeof whys !== 'object' && !whys.length > 0) { return null }
            return whys.reduce((array, current, index)=>{
                    const whyValues = Object.values(current).length > 0 ? Object.values(current)[0] : null
                    return[...array,
                        <div key={index} className={styles['card']}>
                            <div className={styles['img-wrap']}>
                                <img src={whyValues.img}/>
                            </div>
                            <div className={styles['context']}>
                                <h4 className={styles['title']}>
                                    {t(whyValues.title)}
                                </h4>
                                <ul className={styles['lists']}>
                                   {whyValues.traits && whyValues.traits.map((item, idx)=>{
                                      return(<li key={idx}>
                                        {t(item)}
                                      </li>)
                                   })}
                                </ul>
                            </div>
                        </div>,
                        ]
            }, [])
 }, [whys, t])
    return (
        <div className={styles['container']}>
            <div className={styles['rect1']}>
              <XGrid type='white'/>
            </div>
            <div className={styles['rect2']}>
              <XGrid type='white'/>
            </div>
            <div className={styles['top']}>
              <h2 className={styles['title']}>
                {t('solution.sonar.why.title')}
              </h2>
              <div className={styles['slogan-title-wrap']}>
                <h3 className={styles['slogan-title']}>
                    {t('solution.sonar.why.slogan.title')}
                </h3>
                <div className={styles['slogan-title-highlight']}>
                </div>
              </div>
              <p className={styles['slogan-context']}>
                 {t('solution.sonar.why.slogan.context')}
              </p>
            </div>
            <div className={styles['bottom']}>
               {Card}
            </div>
        </div>
    )
}

export default PlanSection
