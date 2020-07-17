import React from 'react'
import PropTypes from 'prop-types'
import styles from './RSSButton.module.scss'

const RSSButton = React.memo((props) => {
  const hide = props.hide
  const onClick = props.onClick || (() => {})
  return(
    <a
      className={`
        ${styles['rss']}
        ${(hide) ? styles['hide'] : ''}
      `}
      onClick={(e) => {
        e.preventDefault()
        onClick(e)
      }}
    >
      RSS
    </a>
  )
})

RSSButton.displayName = 'RSSButton'

RSSButton.propTypes = {
  hide: PropTypes.string,
  onClick: PropTypes.func,
}

export default RSSButton
