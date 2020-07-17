import React from 'react'
import PropTypes from 'prop-types'
import styles from './ArticleContainer.module.scss'
import { XGrid } from '../ui-components'

const ArticleContainer = (props) => {
  const classes = {
    root: styles['default'],
    content: styles['default'],
    bgContainer: styles['default'],
    bgPaddingBlock: styles['default'],
    bg: styles['default'],
    ...props.classes,
  }
  return (
    <div className={`
      ${styles['root']}
      ${classes.root}
    `}>
      <div
        className={`
          ${styles['content']}
          ${classes.content}
        `}
      >
        {props.children}
      </div>
      <div className={styles['xgrid-container']}>
        <XGrid type="dark"/>
      </div>
      <div
        className={`
          ${styles['bg-container']}
          ${classes.bgContainer}
        `}
      >
        <div
          className={`
            ${styles['bg-padding-block']}
            ${classes.bgPaddingBlock}
          `}
        >
        </div>
        <div
          className={`
            ${styles['bg']}
            ${classes.bg}
          `}
        >
        </div>
      </div>
    </div>
  )
}
ArticleContainer.propTypes = {
  classes: PropTypes.shape({
    root: PropTypes.string,
    content: PropTypes.string,
    bgContainer: PropTypes.string,
    bg: PropTypes.string,
  }),
}

export default ArticleContainer
