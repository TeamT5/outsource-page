import React from 'react'
import PropTypes from 'prop-types'
import styles from './XGrid.module.scss'

const XGrid = React.memo((props) => {
  const type = props.type || 'white'
  const angle = props.angle || 'left'
  return (
    <div className={`${styles['x-grid']} ${styles[angle]}`}>
      <svg width="100%" height="100%">
        <defs>
          <pattern
            id="x-sign-sonar-red"
            x="0"
            y="0"
            width="18"
            height="18"
            patternUnits="userSpaceOnUse"
          >
            <g>
              <line x1="0" y1="0" x2="10" y2="10" style={{
                stroke: '#c71532',
                strokeWidth: '1px',
              }}/>
              <line x1="10" y1="0" x2="0" y2="10" style={{
                stroke: '#c71532',
                strokeWidth: '1px',
              }}/>
            </g>
          </pattern>
          <pattern
            id="x-sign-vision-yello"
            x="0"
            y="0"
            width="18"
            height="18"
            patternUnits="userSpaceOnUse"
          >
            <g>
              <line x1="0" y1="0" x2="10" y2="10" style={{
                stroke: '#f5ab1a',
                strokeWidth: '1px',
              }}/>
              <line x1="10" y1="0" x2="0" y2="10" style={{
                stroke: '#f5ab1a',
                strokeWidth: '1px',
              }}/>
            </g>
          </pattern>
          <pattern
            id="x-sign-white"
            x="0"
            y="0"
            width="18"
            height="18"
            patternUnits="userSpaceOnUse"
          >
            <g>
              <line x1="0" y1="0" x2="10" y2="10" style={{
                stroke: '#fff',
                strokeWidth: '1px',
              }}/>
              <line x1="10" y1="0" x2="0" y2="10" style={{
                stroke: '#fff',
                strokeWidth: '1px',
              }}/>
            </g>
          </pattern>
          <pattern
            id="x-sign-dark"
            x="0"
            y="0"
            width="18"
            height="18"
            patternUnits="userSpaceOnUse"
          >
            <g>
              <line x1="0" y1="0" x2="10" y2="10" style={{
                stroke: '#4c433f',
                strokeWidth: '1px',
              }}/>
              <line x1="10" y1="0" x2="0" y2="10" style={{
                stroke: '#4c433f',
                strokeWidth: '1px',
              }}/>
            </g>
          </pattern>
          <pattern
            id="x-sign-t5-red"
            x="0"
            y="0"
            width="18"
            height="18"
            patternUnits="userSpaceOnUse"
          >
            <g>
              <line x1="0" y1="0" x2="10" y2="10" style={{
                stroke: '#d93751',
                strokeWidth: '1px',
              }}/>
              <line x1="10" y1="0" x2="0" y2="10" style={{
                stroke: '#d93751',
                strokeWidth: '1px',
              }}/>
            </g>
          </pattern>
        </defs>
        <rect x="0" y="0" width="100%" height="100%" fill={`url(#x-sign-${type})`} />
      </svg>
    </div>
  )
})
XGrid.displayName = 'XGrid'
XGrid.propTypes = {
  type: PropTypes.string,
  angle: PropTypes.string,
}

export default XGrid
