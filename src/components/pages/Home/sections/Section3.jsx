import React, { useContext } from 'react'
import styles from './Section3.module.scss'
import PropTypes from 'prop-types'
import { BaseArticle as BlogArticle } from '../../Blog'
import NewsAndEventsArticle from '../../NewsAndEvents/Article'
import { RSSButton } from '../../../common/ui-components'
import { LocaleContext } from 'src/scripts/translations/LocaleContext'
import Link from '../../../common/Link'
import useTranslation from 'src/scripts/translations/useTranslation'
import { Button } from '../../../common/ui-components/Button'

const Section3 = (props) => {
  const blogs = props.blogs
  const newsAndEvents = props.newsAndEvents
  const localContext = useContext(LocaleContext)
  const { t } = useTranslation()

  return (
    <section className={styles['section3']}>
      <div className={styles['content']}>
        <div className={styles['background']}></div>
        <div className={styles['blog']}>
          <div className={styles['blog-header']}>
            <h2>{t('common.blog')}</h2>
            <RSSButton
              onClick={() => {
                if(process.browser) {
                  window.open(`${(localContext.locale) ? `/${localContext.locale}` : ''}/blog/rss.xml`)
                }
              }}
            />
          </div>
          <div className={styles['line']}></div>
          <div className={styles['articles']}>
            {blogs.map((post, index) => {
              return (
                <BlogArticle
                  key={index}
                  post={post}
                  className={styles['blog-article']}
                />
              )
            })}
          </div>
          <div className={styles['blog-buttons']}>
            <Link
              as="/blog"
              href="/blog"
            >
              <Button
                classes={{
                  root: styles['read-more'],
                }}
              >
                Read More
              </Button>
            </Link>
          </div>
        </div>
        <div className={styles['news-and-events']}>
          <div className={styles['news-and-events-header']}>
            <h2>{t('common.news-and-event')}</h2>
          </div>
          <div className={styles['articles']}>
            {newsAndEvents.map((post, index) => {
              return (
                <NewsAndEventsArticle
                  key={index}
                  post={post}
                  classes={{
                    root: styles['news-events-article-root'],
                    container: styles['news-events-article-container'],
                    category: styles['news-events-article-category'],
                    imgBlock: styles['news-events-article-img-block'],
                    content: styles['news-events-article-content'],
                  }}
                />
              )
            })}
          </div>
          <div className={styles['buttons']}>
            <Link
              as="/news-and-events"
              href="/news-and-events"
            >
              <Button
                classes={{
                  root: styles['read-more'],
                }}
              >
                Read More
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
Section3.propTypes = {
  blogs: PropTypes.array,
  newsAndEvents: PropTypes.array,
}

export default Section3
