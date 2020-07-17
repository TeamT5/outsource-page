import React from 'react'
import PropTypes from 'prop-types'
import styles from './ScrollDown.module.scss'

const ScrollDown = React.memo((props) => {
  const classes = {
    arrowContainer: styles['default'],
    scrollContainer: styles['default'],
    ...props.classes,
  }
  const onClick = props.onClick || (() => {})
  const text = props.text || 'SCROLL'
  return (
    <div className={`${styles['arrow-container']} ${classes.arrowContainer}`}>
      <svg className={styles['line-svg']} viewBox="0 0 88 5000">
        <line x1="50%" y1="100%" x2="50%" y2="0%" vectorEffect="non-scaling-stroke" id="Path-2" stroke="#FFFFFF" strokeLinecap="round" strokeLinejoin="round"></line>
      </svg>
      <div
        className={`${styles['scroll-container']} ${classes.scrollContainer}`}
        onClick={onClick}
      >
        <div className={styles['scroll-wrap']}>
          <svg className={styles['scroll-svg']} width="88px" height="89px" viewBox="0 0 88 89">
            <g id="1.5" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
              <g id="1440up_simple_index" transform="translate(-25.000000, -626.000000)">
                <g id="scroll" transform="translate(26.000000, 228.000000)">
                  <g id="Group-2" transform="translate(0.000000, 399.933431)">
                    <polygon vectorEffect="non-scaling-stroke" id="Rectangle" stroke="#FFFFFF" fill="#C71532" transform="translate(43.000000, 43.000000) rotate(45.000000) translate(-43.000000, -43.000000) " points="14.754386 14.754386 73 13 71.245614 71.245614 13 73"></polygon>
                    <polyline vectorEffect="non-scaling-stroke" id="Rectangle-Copy" stroke="#FFFFFF" strokeLinecap="round" strokeLinejoin="round" points="58 32.6432749 43 46.7660819 28 32.6432749"></polyline>
                    <text id="SCROLL" fontFamily="NotoSansCJKtc-Light, Noto Sans CJK TC" fontSize="12" fontWeight="300" fill="#FFFFFF">
                      <tspan x="21" y="59.2982456">{text}</tspan>
                    </text>
                  </g>
                </g>
              </g>
            </g>
          </svg>
        </div>
      </div>
    </div>
  )
})
ScrollDown.displayName = 'ScrollDown'
ScrollDown.propTypes = {
  classes: PropTypes.object,
  text: PropTypes.string,
  onClick: PropTypes.func,
}

export default ScrollDown
