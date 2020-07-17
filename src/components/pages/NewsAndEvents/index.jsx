import React, {useState, useEffect, useContext} from 'react'
import PropTypes from 'prop-types'
import BaseLayout from '../../layout/BaseLayout'
import styles from './index.module.scss'
import BaseArticle from './Article'
import Container from '../../common/Container/ArticleContainer'
import { TopicLabel, Paginator } from '../../common/ui-components'
import { getTotalPage, getTopicContent } from 'scripts/utils'
import Head from 'next/head'
import { LocaleContext } from 'src/scripts/translations/LocaleContext'
import useTranslation from 'src/scripts/translations/useTranslation'

const Article = (props) => {
  const [animatFinish] = useState(false)

  return (
    <div
      className={`
        ${styles['news-and-events-article']}
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

const NewsAndEvents = (props) => {
  const posts = props.posts
  const [newsAndEvents, setNewsAndEvents] = useState([])
  const localContext = useContext(LocaleContext)
  const topics = props.topics
  const count = props.count
  const { t } = useTranslation()
  const maxArticles = 12
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPage] = useState(getTotalPage(count, maxArticles))
  const [animatedArticleIndex, setAnimatedArticleIndex] = useState(0)
  const [selectedTopicIds, setSelectedTopicIds] = useState([])

  useEffect(() => {
    setSelectedTopicIds(topics.reduce((acc, topic) => {
      acc.push(topic.id)
      return acc
    }, []))
  }, [])

  useEffect(() => {
    ((async () => {
      // const newsAndEvents = await getPostsByTopicIds(selectedTopicIds, (currentPage - 1) * 12)
      const newsAndEvents = posts.filter((post) => {
        return selectedTopicIds.includes(post.topic._id)
      }).slice((currentPage - 1) * 12, currentPage * 12)
      setAnimatedArticleIndex(1)
      setNewsAndEvents(newsAndEvents)
    })())
  }, [selectedTopicIds, currentPage, posts])


  return (
    <BaseLayout>
      <Head>
        <title>{'TeamT5 News & Events'}</title>
        <meta
          property="og:title"
          content={'TeamT5 News & Events'}
        />
        <meta
          name="description"
          content={'TeamT5 News & Events'}
        />
        <meta
          property="og:description"
          content={'TeamT5 News & Events'}
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
        <div className={styles['post-content-wrap']}>
          <div className={styles['bg-text']}>
            {'News & Events'}
          </div>
          <header className={styles['header-layout']}>
            <div className={styles['header-layout']}>
              <h1>{'News & Events'}</h1>
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
            {(newsAndEvents.length > 0) ? (
              <>
                <div className={styles['articles']}>
                  {newsAndEvents.map((post, index) => {
                    return (
                      <Article
                        key={index}
                        post={post}
                        classes={{
                          root: styles['article'],
                          imgBlock: styles['article-img-block'],
                          content: styles['article-content'],
                          container: styles['article-container'],
                          category: styles['article-category'],
                        }}
                        animated={animatedArticleIndex > index}
                        onAnimated={() => {
                          setAnimatedArticleIndex(index + 2)
                        }}
                      />
                    )
                  })}
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
        </div>
      </Container>
    </BaseLayout>
  )
}

NewsAndEvents.propTypes = {
  newsAndEvents: PropTypes.array,
  topics: PropTypes.array,
  count: PropTypes.number,
  posts: PropTypes.array,
}

export default NewsAndEvents
