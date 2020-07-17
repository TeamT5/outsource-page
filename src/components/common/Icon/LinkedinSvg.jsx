import React from 'react'
import PropTypes from 'prop-types'
import styles from './svg-styles.module.scss'

const LinkedinSvg = React.memo((props) => {
  const mode = props.mode || 'light'
  return (
    <div
      className={styles['icon']}
    >
      <svg width="24px" height="24px" viewBox="0 0 24 24">
        <g id="Symbols" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
          <g id="sns/linkedin/nor">
            <path
              className={styles[mode]}
              d="M21,0 C22.6568542,-3.04359188e-16 24,1.34314575 24,3 L24,21 C24,22.6568542 22.6568542,24 21,24 L3,24 C1.34314575,24 2.02906125e-16,22.6568542 0,21 L0,3 C-2.02906125e-16,1.34314575 1.34314575,3.04359188e-16 3,0 L21,0 Z M19.0257087,9.0309163 C16.1146435,7.90189457 14.1125239,9.13845978 13.5311978,10.2828185 L13.5311978,10.2828185 L13.4415783,10.4056989 L13.3876217,10.4056989 L13.3876217,8.83634022 L10.0184804,8.83634022 L10.0184804,20.1829163 L13.5311978,20.1829163 L13.5316179,14.0152782 C13.5352018,13.9482549 13.5643166,13.4915116 13.7156109,12.9431337 C13.879513,12.3490576 14.4018935,11.8678837 15.0368065,11.7243076 C15.6717196,11.5811011 16.2554478,11.7243076 16.5934152,11.8678837 C16.9313826,12.0110902 17.1054478,12.3643946 17.1745565,12.471938 C17.2436652,12.5794815 17.458937,13.2476554 17.458937,13.6240576 L17.458937,13.6240576 L17.458937,20.1829163 L20.9921652,20.1829163 L20.9927319,13.1625978 C21.0044427,12.9799919 21.1719641,9.86344891 19.0257087,9.0309163 Z M7.82684783,8.83641413 L4.2731087,8.83641413 L4.2731087,20.1828054 L7.82684783,20.1828054 L7.82684783,8.83641413 Z M6.05809022,3.18481957 C4.92149239,3.18481957 3.99998152,4.10614565 3.99998152,5.24292826 C3.99998152,6.37952609 4.92149239,7.30085217 6.05809022,7.30085217 C7.19468804,7.30085217 8.11619891,6.37952609 8.11619891,5.24292826 C8.11619891,4.10614565 7.19468804,3.18481957 6.05809022,3.18481957 Z" id="Combined-Shape"
            ></path>
          </g>
        </g>
      </svg>
    </div >
  )
})

LinkedinSvg.displayName = 'LinkedinSvg'
LinkedinSvg.propTypes = {
  mode: PropTypes.string,
}

export default LinkedinSvg
