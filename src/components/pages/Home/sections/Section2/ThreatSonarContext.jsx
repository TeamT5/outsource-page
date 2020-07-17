import React from 'react'
import PropTypes from 'prop-types'
import styles from './ThreatSonarContext.module.scss'
import SonarTriangle from './SonarTriangle'
import { XGrid } from '../../../../common/ui-components'
import useTranslation from 'src/scripts/translations/useTranslation'

const ThreatSonarContext = (props) => {
  const { t } = useTranslation()
  const title = t('index.sonar-context.title')
  const sonarContext = t('index.sonar-context.context')
  const sonarTriAnimated = props.sonarTriAnimated

  return (
    <div className={styles['container']}>
      <div className={styles['threat-sonar-context-container']}>
        <div className={styles['context']}>
          <img src="/images/threat_sonar_logo.svg"/>
          <h3>
            {title}
          </h3>
          <p>
            {sonarContext}
          </p>
        </div>
      </div>
      <div className={styles['top']}>
        <div className={`${sonarTriAnimated ? styles['show'] : ''} ${styles['threat-sonar-product-img']}`}>
          <div className={styles['img-wrap']}>
            <div className={styles['img-wrap-container']}>
              <div className={styles['mask']}></div>
              <img src="https://res.cloudinary.com/dvgomg5gh/image/upload/f_auto/v1594029159/sonar_demo_102067175f.png"/>
            </div>
          </div>
        </div>
        <div className={styles['rect2']}>
          <XGrid type="sonar-red"/>
        </div>
        <div className={styles['rect3']}>
          <XGrid angle="right"/>
        </div>
        <SonarTriangle
          isAnimated={sonarTriAnimated}
        />
      </div>
    </div>
  )
}
ThreatSonarContext.propTypes = {
  sonarTriAnimated: PropTypes.bool,
}

export default ThreatSonarContext
