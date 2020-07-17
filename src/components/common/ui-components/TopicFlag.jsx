import React from 'react'
import PropTypes from 'prop-types'
import styles from './TopicFlag.module.scss'

const TopicFlag = (props) => {
  const text = props.text
  const color = props.color
  return (
    <div
      style={{
        backgroundColor: color,
      }}
      className={styles['topic-flag']}
    >
      {text}
    </div>
  )
}
TopicFlag.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
}
export default TopicFlag
