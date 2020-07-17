import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import styles from './Article.module.scss'
import { LocaleContext } from 'src/scripts/translations/LocaleContext'
import { toDateString, getPostContent, getTopicContent } from 'scripts/utils'
import Link from '../../common/Link'

const Article = (props) => {
  const post = props.post
  const localContext = useContext(LocaleContext)
  const content = getPostContent(post, localContext.locale)
  const topicContent = getTopicContent(post.topic, localContext.locale)
  const date = toDateString(new Date(post['publish_date'] || post.createdAt))
  const classes = {
    root: styles['defalut'],
    container: styles['defalut'],
    category: styles['defalut'],
    imgBlock: styles['defalut'],
    content: styles['defalut'],
    ...props.classes,
  }
  const urlsSplit = post['banner_img_url'].split('/')
  urlsSplit.splice(urlsSplit.indexOf('upload') + 1, 0, 'f_auto')

  return (
    <Link
      as={`/posts/${post['post_url']}`}
      href="/posts/[uid]"
    >
      <article
        className={`
          ${styles['article']}
          ${classes.root}
        `}
      >
        <div
          className={`
            ${styles['container']}
            ${classes.container}
          `}
        >
          <div
            className={`
              ${styles['category']}
              ${classes.category}
            `}
          >
            {topicContent.text}
          </div>
          <div
            className={`
              ${styles['img-block']}
              ${classes.imgBlock}
            `}
          >
            <div
              className={styles['img-block-bg']}
              style={{
                backgroundImage: `url(${urlsSplit.join('/')})`,
              }}
            >
            </div>
          </div>

          <div
            className={`
            ${styles['content']}
            ${classes.content}
          `}
          >
            <span>{date}</span>
              <h2>{content.title}</h2>
            <div className={styles['bg']}></div>
          </div>
        </div>
      </article>
    </Link>
  )
}

Article.propTypes = {
  post: PropTypes.object,
  classes: PropTypes.object,
}
export default Article
