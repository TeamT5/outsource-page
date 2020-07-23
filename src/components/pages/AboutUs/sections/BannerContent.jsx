
import React from 'react'
import PropTypes from 'prop-types'
import styles from './BannerContent.module.scss'
import useTranslation from 'src/scripts/translations/useTranslation'

const BannerContent = (props) => {
  const { t } = useTranslation()

  const visionTriAnimated = true

  return (
    <div className={styles['container']}>
      <div className={styles['top']}>
        <div className={`${(visionTriAnimated) ? styles['show'] : ''} ${styles['banner-img']}`}>
          <div className={styles['img-wrap']}>
            <div className={styles['img-wrap-container']}>
              <div className={styles['mask']}></div>
              <img className={styles['image-source']} src="/images/about_us/about_cover.jpg"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
BannerContent.propTypes = {
  visionTriAnimated: PropTypes.bool,
}

export default BannerContent
