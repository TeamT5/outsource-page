import React, { useContext } from 'react'
import Head from 'next/head'
import PropTypes from 'prop-types'
import BaseLayout from '../../layout/BaseLayout'
import Container from '../../common/Container/BaseContainer'
import styles from './index.module.scss'
import PostForm from '../../common/Form/PostForm'
import Markdown from '../../common/Markdown'
import { LocaleContext } from 'src/scripts/translations/LocaleContext'
import { toDateString, getPostContent, getTopicContent } from 'scripts/utils'
import { LinkedinSvg, TwitterSvg, FacebookSvg } from '../../common/Icon'
import { TopicFlag, RSSButton } from '../../common/ui-components'
import { getBaseUrl } from 'src/scripts/getBaseUrl'
import BaseArticle from '../Blog/BaseArticle'
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
} from 'react-share'
import getConfig from 'next/config'

const { serverRuntimeConfig, publicRuntimeConfig } = getConfig()
const config = (process.browser) ? publicRuntimeConfig : serverRuntimeConfig

const Post = (props) => {
  const post = props.post
  const localContext = useContext(LocaleContext)
  const content = getPostContent(post, localContext.locale)
  const date = toDateString(new Date(post['publish_date'] || post.createdAt))
  let relatedPosts = post['relative_posts']
  if(config.isExport) {
    relatedPosts = relatedPosts.filter((post) => {
      return post.publish
    })
  }
  const topicContent = getTopicContent(post.topic, localContext.locale)
  const urlsSplit = post['banner_img_url'].split('/')
  urlsSplit.splice(urlsSplit.indexOf('upload') + 1, 0, 'f_auto')

  return (
    <BaseLayout
      classes={{
        header: styles['layout-header'],
        scrollActiveHeader: styles['layout-header-scroll-active'],
        background: styles['layout-background'],
        scrollActivebackground: styles['layout-background-scroll-active-background'],
      }}
      iconMode={{
        origin: 'light',
        scrollActive: 'dark',
      }}
    >
      <Head>
        <title>{content.title}</title>
        <meta
          property="og:title"
          content={content.title}
        />
        <meta
          name="description"
          content={content.context}
        />
        <meta
          property="og:description"
          content={content.context}
        />
        <meta
          property="og:url"
          content={`${getBaseUrl(localContext.locale)}posts/${post['post_url']}`}
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={post['banner_img_url']} />
      </Head>
      <div
        className={styles['banner']}
      >
        <div
          className={styles['banner-bg']}
          style={{
            backgroundImage: `url(${urlsSplit.join('/')})`,
          }}
        ></div>
        <div className={styles['title']}>
          <div className={styles['topic-and-rss']}>
            <TopicFlag
              color={post.topic.color}
              text={topicContent.text}
            />
            <RSSButton
              onClick={() => {
                if(process.browser) {
                  window.open(`${(localContext.locale) ? `/${localContext.locale}` : ''}/blog/rss.xml`)
                }
              }}
            />
          </div>
          <h1>{content.title}</h1>
        </div>
      </div>
      <Container className={styles['post-container']}
        classes={{
          bgContainer: styles['post-container-bg-container'],
          content: styles['post-container-content'],
        }}
      >
        <div className={styles['post-content']}>
          <div className={styles['post-header']}>
            <div className={styles['info']}>
              <div className={styles['date']}>{date}</div>
              {(post.author) && (
                <>
                  <div className={styles['divided-line']}></div>
                  <div className={styles['author']}>{post.author.username}</div>
                </>
              )}
            </div>
            <div className={styles['share']}>
              Share:
              <div className={styles['sns-items']}>
                <a
                  className={styles['sns-item']}
                  onClick={(e) => {
                    e.preventDefault()
                  }}
                >
                  <LinkedinShareButton
                    url={`${getBaseUrl(localContext.locale)}posts/${post['post_url']}`} className="share"
                  >
                    <LinkedinSvg
                      mode="dark"
                    />
                  </LinkedinShareButton>
                </a>
                <a
                  className={styles['sns-item']}
                  onClick={(e) => {
                    e.preventDefault()
                  }}
                >
                  <TwitterShareButton
                    url={`${getBaseUrl(localContext.locale)}posts/${post['post_url']}`} className="share"
                  >
                    <TwitterSvg
                      mode="dark"
                    />
                  </TwitterShareButton>
                </a>
                <a
                  className={`${styles['sns-item']}`}
                  onClick={(e) => {
                    e.preventDefault()
                  }}
                >
                  <FacebookShareButton
                    url={`${getBaseUrl(localContext.locale)}posts/${post['post_url']}`} className="share"
                  >
                    <FacebookSvg
                      mode="dark"
                    />
                  </FacebookShareButton>
                </a>
              </div>
            </div>
          </div>
          <div className={styles['markdown-container']}>
            <Markdown context={content.context}/>
          </div>
          {(post['enable_form']) && (
            <PostForm
              title="I’m interested"
              uid={post['post_url']}
            />
          )}
          <div className={`
            ${styles['post-footer']}
            ${(relatedPosts.length > 0) ? styles['enable-footer-line'] : ''}
          `}>
            <div className={styles['share']}>
              Share:
              <div className={styles['sns-items']}>
                <a
                  className={styles['sns-item']}
                  onClick={(e) => {
                    e.preventDefault()
                  }}
                >
                  <LinkedinShareButton
                    url={`${getBaseUrl(localContext.locale)}posts/${post['post_url']}`} className="share"
                  >
                    <LinkedinSvg
                      mode="dark"
                    />
                  </LinkedinShareButton>
                </a>
                <a
                  className={styles['sns-item']}
                  onClick={(e) => {
                    e.preventDefault()
                  }}
                >
                  <TwitterShareButton
                    url={`${getBaseUrl(localContext.locale)}posts/${post['post_url']}`} className="share"
                  >
                    <TwitterSvg
                      mode="dark"
                    />
                  </TwitterShareButton>
                </a>
                <a
                  className={`${styles['sns-item']}`}
                  onClick={(e) => {
                    e.preventDefault()
                  }}
                >
                  <FacebookShareButton
                    url={`${getBaseUrl(localContext.locale)}posts/${post['post_url']}`} className="share"
                  >
                    <FacebookSvg
                      mode="dark"
                    />
                  </FacebookShareButton>
                </a>
              </div>
            </div>
          </div>
          <div className={styles['related-posts-container']}>
            {(relatedPosts.length > 0) && (
              <>
                <div className={styles['related-post-title']}>
                  <div className={styles['text']}>
                    {'Related Post'}
                  </div>
                </div>
                <div className={styles['related-posts']}>
                  {relatedPosts.map((relatedPost, index) => {
                    return (
                      <BaseArticle
                        key={index}
                        post={relatedPost}
                        className={styles['related-post-article']}
                        // animated={animatedArticleIndex > index}
                        // onAnimated={() => {
                        //   setAnimatedArticleIndex(index + 2)
                        // }}
                      />
                    )
                  })}
                </div>
              </>
            )}
          </div>
        </div>
      </Container>
    </BaseLayout>
  )
}

Post.propTypes = {
  post: PropTypes.object,
}

export default Post
