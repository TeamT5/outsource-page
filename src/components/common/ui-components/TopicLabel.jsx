import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styles from './TopicLabel.module.scss'

const TopicLabel = (props) => {
  const [isTouch, setIsTouch] = useState(false)
  const text = props.text
  const color = props.color
  const active = (props.active === undefined) ? true : props.active
  const classes = {
    size: styles['default-size'],
    ...props.classes,
  }
  const onClick = props.onClick || (() => {})
  return (
    <div
      className={`
        ${styles['top-container']}
        ${classes.size}
        ${active ? styles['is-active'] : ''}
      `}
      onClick={(e) => {
        onClick(e)
      }}
      onTouchStart={() => {
        setIsTouch(true)
      }}
      onTouchEnd={() => {
        if(!active) {
          setTimeout(() => {
            setIsTouch(false)
          }, 35)
        } else {
          setIsTouch(false)
        }
      }}
    >
      <div
        className={`
          ${styles['hover-mix']}
          ${isTouch ? styles['touch'] : ''}
        `}
      >
      </div>
      <div
        className={styles['mix-block']}
        style={{
          backgroundColor: (active) ? color : 'rgba(0, 0, 0, 0)',
        }}
      ></div>
      <div
        className={`
          ${styles['topic-label']}
          ${isTouch ? styles['touch'] : ''}
          ${(active) ? styles['active'] : ''}
        `}
      >
        {text}
      </div>
    </div>
  )
}
TopicLabel.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string,
  color: PropTypes.string,
  active: PropTypes.bool,
  classes: PropTypes.object,
  onClick: PropTypes.func,
}

export default TopicLabel
