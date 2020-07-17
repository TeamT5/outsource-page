import React from 'react'
import PropTypes from 'prop-types'
import styles from './Button.module.scss'

const BaseButton = (props) => {
  const onClick = props.onClick || (() => {})
  const classes = {
    root: styles['default'],
    ...props.classes,
  }
  return (
    <button
      className={`
        ${styles['base-button-root']}
        ${classes.root}
      `}
      onClick={onClick}
    >
      {props.children}
    </button>
  )
}

BaseButton.propTypes = {
  classes: PropTypes.shape({
    root: PropTypes.string,
  }),
  onClick: PropTypes.func,
}

const Button = (props) => {
  const classes = {
    root: styles['default'],
    ...props.classes,
  }
  return (
    <button
      {...props}
      className={`
        ${styles['button-root']}
        ${classes.root}
      `}
    >
      <span className={styles['text']}>
        {props.children}
      </span>
      <div className={styles['bg']}></div>
      <div className={styles['read-more-stroke']}></div>
    </button>
  )
}

Button.propTypes = {
  classes: PropTypes.shape({
    root: PropTypes.string,
  }),
}

export {
  Button,
  BaseButton,
}
export default BaseButton
