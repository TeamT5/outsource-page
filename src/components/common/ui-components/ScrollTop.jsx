import React from 'react'
import PropTypes from 'prop-types'
import styles from './ScrollTop.module.scss'

const ScrollTop = React.memo((props) => {
  const classes = {
    scrollContainer: styles['default'],
    ...props.classes,
  }
  const onClick = props.onClick
  return (
    <div
      className={`${styles['scroll-container']} ${classes.scrollContainer}`}
      onClick={onClick}
    >
      <svg width="84px" height="84px" viewBox="0 0 84 84">
        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
          <g id="footer-tmp/nor" transform="translate(-1166.000000, 0.000000)">
            <g id="footer/nor">
              <g id="Top" transform="translate(1166.000000, 0.000000)">
                <g id="scroll">
                  <polygon id="Rectangle" fill="#D93751" points="42 0 84 42 42 84 0 42"></polygon>
                  <path d="M57,56.7989281 L42,70.9217351 L27,56.7989281 M42,70.9217351 L42.5,39.9444444" id="Combined-Shape" stroke="#FFFFFF" strokeLinecap="round" strokeLinejoin="round" transform="translate(42.000000, 55.222222) scale(1, -1) translate(-42.000000, -55.222222) "></path>
                  <text id="TOP" fontFamily="NotoSansCJKtc-Light, Noto Sans CJK TC" fontSize="12" fontWeight="300" fill="#FFFFFF">
                    <tspan x="30.612" y="32">TOP</tspan>
                  </text>
                </g>
              </g>
            </g>
          </g>
        </g>
      </svg>
    </div >
  )
})
ScrollTop.displayName = 'ScrollTop'
ScrollTop.propTypes = {
  classes: PropTypes.object,
  text: PropTypes.string,
  onClick: PropTypes.func,
}

export default ScrollTop
