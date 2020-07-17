import React from 'react'
import PropTypes from 'prop-types'
import styles from './Arrow.module.scss'

const Arrow = React.memo((props) => {
  const angle = props.angle || 'left'
  return (
    <div
      className={`
        ${styles['arrow-container']}
      `}
    >
      <svg width="40px" height="40px" viewBox="0 0 40 40">
        <g
          className={`
            ${styles['rotation-group']}
            ${styles[`angle-${angle}`]}
          `}
        >
          <g transform="translate(5.000000, 5.000000)">
            <path d="M30,15 C30,15.4807835 29.627203,15.8770378 29.1469257,15.9311926 L29.0343052,15.9374971 L3.20017573,15.9367054 L15.3022515,28.4199682 C15.6677828,28.797006 15.6492627,29.3903257 15.2608856,29.7451848 C14.9023837,30.0727471 14.3540519,30.0826245 13.9843141,29.7856554 L13.8958136,29.7050268 L0.262475843,15.6425293 C-0.058327965,15.311627 -0.0850616157,14.8108998 0.182274891,14.4516934 L0.262475843,14.3574707 L13.8958136,0.294973235 C14.261345,-0.0820645885 14.8725086,-0.100043974 15.2608856,0.254815155 C15.6193876,0.582377427 15.6627451,1.11312505 15.3797938,1.48939075 L15.3022515,1.58003182 L3.20210712,14.0617057 L29.0343052,14.0624975 C29.5676437,14.0624975 30,14.4822331 30,15 Z"></path>
          </g>
        </g>
      </svg >
    </div >
  )
})
Arrow.displayName = 'Arrow'
Arrow.propTypes = {
  className: PropTypes.string,
  angle: PropTypes.string,
  text: PropTypes.string,
}

export default Arrow
