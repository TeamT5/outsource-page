import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import styles from './BaseArticle.module.scss'
import { TopicFlag } from '../../common/ui-components'
import { LocaleContext } from 'src/scripts/translations/LocaleContext'
import { toDateString, getPostContent, getTopicContent } from 'scripts/utils'
import Link from '../../common/Link'
const BaseArticle = (props) => {
  const post = props.post
  const className = props.className || styles['default']
  const localContext = useContext(LocaleContext)
  const content = getPostContent(post, localContext.locale)
  const topicContent = getTopicContent(post.topic, localContext.locale)
  const date = toDateString(new Date(post['publish_date'] || post.createdAt))
  const urlsSplit = post['banner_img_url'].split('/')
  urlsSplit.splice(urlsSplit.indexOf('upload') + 1, 0, 'f_auto')

  return (
    <article
      className={`
        ${styles['article']}
        ${className}
      `}
    >
      <div className={styles['container']}>
        <Link
          as={`/posts/${post['post_url']}`}
          href="/posts/[uid]"
        >
          <div
            className={styles['img-block']}
          >
            <div className={styles['topic-flag']}>
              <TopicFlag
                color={post.topic.color}
                text={topicContent.text}
              />
            </div>
            <div className={styles['date']}>
              <span>{date}</span>
              <hr/>
            </div>
            <div
              className={styles['bg']}
              style={{
                backgroundImage: `url(${urlsSplit.join('/')})`,
              }}
            ></div>
          </div>
        </Link>
        <div className={styles['content-container']}>
          <h2 className="under-line-title">
            <Link
              as={`/posts/${post['post_url']}`}
              href="/posts/[uid]"
            >
              <span>
                {content.title}
              </span>
            </Link>
            <div className={`underline-hover-color ${styles['under-line']}`}>
              <span className="underline-hover-color">
                {content.title}
              </span>
            </div>
            <style jsx>{`
              @media (hover: hover) {
                .under-line-title > span:hover + .underline-hover-color > span {
                  border-bottom: 8px solid ${post.topic.color};
                }
              }
            `}</style>
          </h2>
          <hr/>
          <div className={styles['tags']}>
            {post.tags.map((tag, index) => {
              return (
                <React.Fragment key={index}>
                  {`${tag.name}${
                    ((index + 1) !== post.tags.length) ? ', ' : ''
                  }`}
                </React.Fragment>
              )
            })}
          </div>
        </div>
      </div>
    </article>
  )
}

BaseArticle.propTypes = {
  className: PropTypes.string,
  blog: PropTypes.object,
  post: PropTypes.object,
  topic: PropTypes.object,
}

export default BaseArticle
