
import React from 'react'
import PropTypes from 'prop-types'
import styles from './ThreatVisionContext.module.scss'
import VisionTriangle from './VisionTriangle'
import { XGrid } from '../../../../common/ui-components'
import useTranslation from 'src/scripts/translations/useTranslation'

const ThreatVisionContext = (props) => {
  const { t } = useTranslation()
  const title = t('index.vision-context.title')
  const visionContext = t('index.vision-context.context')

  const visionTriAnimated = props.visionTriAnimated

  return (
    <div className={styles['container']}>
      <div className={styles['threat-vision-context-container']}>
        {/* <div className={styles['context']}>
          <img src="/images/threat_vision_logo.svg"/>
          <h3>
            {title}
          </h3>
          <p>
            {visionContext}
          </p>
        </div> */}
      </div>
      <div className={styles['top']}>
        <div className={`${(visionTriAnimated) ? styles['show'] : ''} ${styles['threat-vision-product-img']}`}>
          <div className={styles['img-wrap']}>
            <div className={styles['img-wrap-container']}>
              <div className={styles['mask']}></div>
              <img src="https://res.cloudinary.com/dvgomg5gh/image/upload/f_auto/v1594029159/vision_demo_3991e9ec2a.png"/>
            </div>
          </div>
        </div>
        <div className={styles['rect2']}>
          <XGrid type="vision-yello"/>
        </div>
        <div className={styles['rect3']}>
          <XGrid angle="right"/>
        </div>
        <VisionTriangle
          isAnimated={visionTriAnimated}
        />
      </div>
    </div>
  )
}
ThreatVisionContext.propTypes = {
  visionTriAnimated: PropTypes.bool,
}

export default ThreatVisionContext
