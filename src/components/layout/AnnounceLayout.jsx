import React from 'react'
import BaseLayout from './BaseLayout'
import PropTypes from 'prop-types'
import styles from './AnnounceLayout.module.scss'
import Markdown from '../common/Markdown'
import Container from '../common/Container/BaseContainer'
const AnnounceLayout = (props) => {
  const title = props.title
  const context = props.context

  return (
    <BaseLayout>
      <Container
        classes={{
          root: styles['post-container'],
          bgContainer: styles['bg-container'],
          bgPaddingBlock: styles['bg-padding-block'],
        }}
      >
        <header className={styles['header']}>
          <h1>{title}</h1>
        </header>
        <div className={styles['markdown-container']}>
          <Markdown context={context}/>
        </div>
      </Container>
    </BaseLayout>
  )
}
AnnounceLayout.propTypes = {
  title: PropTypes.string,
  context: PropTypes.string,
}
export default AnnounceLayout
