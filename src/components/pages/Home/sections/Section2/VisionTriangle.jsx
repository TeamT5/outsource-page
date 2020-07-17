import React from 'react'
import PropTypes from 'prop-types'
import styles from './VisionTriangle.module.scss'

const VisionTriangle = (props) => {
  const isAnimated = props.isAnimated
  return (
    <div className={styles['vision-triangle-container']}>
      <div className={styles['triangle-wrap']}>
        <svg viewBox="0 0 1350 784">
          <g className={`${!isAnimated ? styles['origin'] : styles['finished']}`}>
            <polygon points="0,784 675,0 1350,784" className={styles['triangle']} />
          </g>
        </svg>
      </div>
    </div>

  )
}
VisionTriangle.propTypes = {
  isAnimated: PropTypes.bool,
}

export default VisionTriangle
