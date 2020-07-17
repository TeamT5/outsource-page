import React, { useState, useEffect, useContext } from 'react'
import PropTypes from 'prop-types'
import BaseLayout from '../../layout/BaseLayout'
import styles from './index.module.scss'
import BaseArticle from './BaseArticle'
import Container from '../../common/Container/ArticleContainer'
import { TopicLabel, Paginator, RSSButton} from '../../common/ui-components'
import { getTotalPage, getTopicContent } from 'scripts/utils'
import Head from 'next/head'
import { LocaleContext } from 'src/scripts/translations/LocaleContext'
import useTranslation from 'src/scripts/translations/useTranslation'

const Article = (props) => {
  const [animatFinish] = useState(false)

  return (
    <div
      className={`
        ${styles['blog-article']}
        ${(animatFinish) ? styles['animated'] : ''}
      `}
    >
      <BaseArticle
        {...props}
      />
    </div>
  )
}

Article.propTypes = {
  animated: PropTypes.bool,
  onAnimated: PropTypes.func,
}

const Blog = (props) => {
  const posts = props.posts
  const localContext = useContext(LocaleContext)
  const { t } = useTranslation()
  const topics = props.topics
  const count = props.count
  const [blogs, setBlogs] = useState([])
  const [selectedTopicIds, setSelectedTopicIds] = useState(topics.reduce((acc, topic) => {
    acc.push(topic.id)
    return acc
  }, []))
  const [animatedArticleIndex, setAnimatedArticleIndex] = useState(0)
  const maxArticles = 12
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPage] = useState(getTotalPage(count, maxArticles))

  useEffect(() => {
    setSelectedTopicIds(topics.reduce((acc, topic) => {
      acc.push(topic.id)
      return acc
    }, []))
  }, [])

  useEffect(() => {
    ((async () => {
      const blogs = posts.filter((post) => {
        return selectedTopicIds.includes(post.topic._id)
      }).slice((currentPage - 1) * 12, currentPage * 12)
      setAnimatedArticleIndex(1)
      setBlogs(blogs)
    })())
  }, [selectedTopicIds, currentPage, posts])

  return (
    <BaseLayout>
      <Head>
        <title>TeamT5 Blog</title>
        <meta
          property="og:title"
          content="TeamT5 Blog"
        />
        <meta
          name="description"
          content="TeamT5 Blog"
        />
        <meta
          property="og:description"
          content="TeamT5 Blog"
        />
        <meta
          property="og:url"
          content={`https://teamt5.org${(localContext.locale) ? `/${localContext.locale}` : ''}/blog`}
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/images/og-image.jpg" />
      </Head>
      <Container
        classes={{
          root: styles['post-container'],
          bgContainer: styles['bg-container'],
          bgPaddingBlock: styles['bg-padding-block'],
        }}
      >
        <div className={styles['bg-text']}>
          Blog
        </div>
        <header className={styles['header']}>
          <div className={styles['title-and-rss']}>
            <h1>Blog</h1>
            <RSSButton
              onClick={() => {
                if(process.browser) {
                  window.open(`${(localContext.locale) ? `/${localContext.locale}` : ''}/blog/rss.xml`)
                }
              }}
            />
          </div>
          <hr className={styles['hr']}/>
        </header>
        <div className={styles['content']}>
          <div className={styles['topics']}>
            {topics.map((topic) => {
              const content = getTopicContent(topic, localContext.locale)
              return (
                <TopicLabel
                  key={topic.name}
                  text={content.text}
                  color={topic.color}
                  active={selectedTopicIds.includes(topic.id)}
                  classes={{
                    size: styles['topic-size'],
                  }}
                  onClick={() => {
                    setSelectedTopicIds((prev) => {
                      const next = [...prev]
                      if(prev.includes(topic.id)) {
                        next.splice(next.indexOf(topic.id), 1)
                      } else {
                        next.push(topic.id)
                      }
                      return next
                    })
                  }}
                />
              )
            })}
          </div>
          {(blogs.length > 0) ? (
            <>
              <div className={styles['articles']}>
                {blogs.map((post, index) => {
                  return (
                    <Article
                      key={index}
                      post={post}
                      className={styles['article']}
                      animated={animatedArticleIndex > index}
                      onAnimated={() => {
                        setAnimatedArticleIndex(index + 2)
                      }}
                    />
                  )
                })
                }
              </div>
              <div className={styles['paginator']}>
                <Paginator
                  totalPage={totalPage}
                  currentPage={currentPage}
                  onRightPageClick={async () => {
                    setCurrentPage((prev) => {
                      const next = (prev >= totalPage) ? totalPage : prev + 1
                      return next
                    })
                  }}
                  onLeftPageClick={() => {
                    setCurrentPage((prev) => {
                      const next = (prev <= 1) ? 1 : prev - 1
                      return next
                    })
                  }}
                  onPageClick={(nextPage) => {
                    setCurrentPage(nextPage)
                  }}
                />
              </div>
            </>
          ) : (
            <div className={styles['empty-articles']}>
              {t('common.no-match-articles')}
            </div>
          )}

        </div>
      </Container>
    </BaseLayout>
  )
}

Blog.propTypes = {
  blogs: PropTypes.array,
  getPostsByTopicIds: PropTypes.func,
  posts: PropTypes.array,
  topics: PropTypes.array,
  count: PropTypes.number,
}

export {
  BaseArticle,
}
export default Blog
