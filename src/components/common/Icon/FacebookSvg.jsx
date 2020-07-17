import React from 'react'
import PropTypes from 'prop-types'
import styles from './svg-styles.module.scss'

const TwitterSvg = React.memo((props) => {
  const mode = props.mode || 'light'
  return (
    <div
      className={styles['icon']}
    >
      <svg
        width="24px"
        height="24px"
        viewBox="0 0 24 24"
        version="1.1"
      >
        <title>Mask</title>
        <g id="Symbols" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
          <path
            className={styles[mode]}
            d="M22,0 C23.1045695,-2.02906125e-16 24,0.8954305 24,2 L24,22 C24,23.0543618 23.1841222,23.9181651 22.1492623,23.9945143 L22,24 L22,24 L14,24 L14,23.978 L13.875,24 L13.875,15.5633307 L16.6710937,15.5633307 L17.203125,12.0733717 L13.875,12.0733717 L13.875,9.80860051 C13.875,8.85381375 14.3398828,7.92315016 15.8305781,7.92315016 L15.8305781,7.92315016 L17.34375,7.92315016 L17.34375,4.95196885 C17.34375,4.95196885 15.9704766,4.71616081 14.6575781,4.71616081 C11.9165156,4.71616081 10.125,6.3875682 10.125,9.41345698 L10.125,9.41345698 L10.125,12.0733717 L7.078125,12.0733717 L7.078125,15.5633307 L10.125,15.5633307 L10.125,24 C10.0832306,23.9934058 10.0415327,23.9865949 9.99990751,23.9795684 L10,24 L2,24 C0.8954305,24 1.3527075e-16,23.1045695 0,22 L0,2 C-1.3527075e-16,0.8954305 0.8954305,2.02906125e-16 2,0 L22,0 Z" id="path-1"></path>
        </g>
      </svg>
    </div >
  )
})
TwitterSvg.displayName = 'TwitterSvg'
TwitterSvg.propTypes = {
  mode: PropTypes.string,
}

export default TwitterSvg
