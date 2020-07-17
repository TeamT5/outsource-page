import React from 'react'
import PropTypes from 'prop-types'
import styles from './Burger.module.scss'
const Burger = React.memo((props) => {
  const color = props.color || 'light'
  const activeBurger = props.activeBurger
  const onClick = props.onClick || (() => {})
  return (
    <div
      className={`
        ${styles['navbar-burger']}
        ${activeBurger ? styles['active'] : ''}
      `}
      onClick={onClick}
    >
      <div
        className={`
          ${styles['svg-container']}
          ${styles[color]}
        `}
      >
        <svg height="24" width="24" viewBox="0 0 24 24">
          <rect x="2" y="6" width="20" height="2" rx="1"></rect>
          <rect x="2" y="11" width="20" height="2" rx="1"></rect>
          <rect x="2" y="16" width="20" height="2" rx="1"></rect>
        </svg>
      </div>
    </div>
  )
})
Burger.displayName = 'Burger'
Burger.propTypes = {
  color: PropTypes.string,
  activeBurger: PropTypes.bool,
  onClick: PropTypes.func,
}
export default Burger
