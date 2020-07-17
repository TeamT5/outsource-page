import React from 'react'
import PropTypes from 'prop-types'
import styles from './SonarTriangle.module.scss'
const SonarTriangle = (props) => {
  const isAnimated = props.isAnimated
  return (
    <div className={styles['sonar-triangle-container']}>
      <div className={styles['triangle-wrap']}>
        <svg viewBox="0 0 1481 698">
          <g className={`${!isAnimated ? styles['origin'] : styles['finished']}`}>
            <polygon points="0,698 740.5,0 1481,698" className={styles['triangle']} />
          </g>
        </svg>
      </div>
    </div>
  )
}
SonarTriangle.propTypes = {
  isAnimated: PropTypes.bool,
}

export default SonarTriangle
