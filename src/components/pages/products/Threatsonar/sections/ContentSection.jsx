import React, { useState } from 'react';
import styles from './ContentSection.module.scss';
import useTranslation from 'src/scripts/translations/useTranslation';
import IntersectionVisible from 'react-intersection-visible';

const content = [
  {
    context: 'solution.sonar.intro.context',
    img: '/images/ThreatSonar/what_is_sonar.svg',
    reverse: true,
  },
  {
    title: 'solution.sonar.function.ca-title',
    context: 'solution.sonar.function.ca-context',
    img: '/images/ThreatSonar/CompromiseAssessment.svg',
    reverse: false,
  },
  {
    title: 'solution.sonar.function.ir-title',
    context: 'solution.sonar.function.ir-context',
    img: '/images/ThreatSonar/IncidentResponse.svg',
    reverse: true,
  },
  {
    title: 'solution.sonar.function.mdr-title',
    context: 'solution.sonar.function.mdr-context',
    img: '/images/ThreatSonar/MDRplatform.svg',
    reverse: false,
  },
]
const renderClassName = (contentItem) => {
  if (contentItem.reverse) {
    return `${styles['card-reverse']} ${styles['card']}`
  }
  return styles['card']
};
const ContentSection = () => {
  const { t } = useTranslation()
  const [scrollToThisElementArr, setScrollToThisElementArr] = useState(
    content.map(() => false),
  )
  const onShow = (e, index) => {
    if (e && !scrollToThisElementArr[index]) {
      setScrollToThisElementArr((prevState) =>
        prevState.map((isShow, i) => (i === index ? true : isShow)),
      )
    }
  }
  const renderShowClass = (index) => {
    if (scrollToThisElementArr[index]) {
      return styles['show']
    }
    return '';
  }
  return (
    <div className={styles['container']}>
      {content.map((contentItem, index) => {
        console.log('contentItem', contentItem, 'index', index)
        return (
          <IntersectionVisible
            key={index}
            onShow={(e) => onShow(e, index)}
            className={`${renderClassName(contentItem)} ${renderShowClass(
              index,
            )}`}
            options={{ rootMargin: '-30%' }}
          >
            <img src={contentItem.img} />
            <div className={styles['content']}>
              {contentItem.title && (
                <h4
                  className={styles['title']}
                  dangerouslySetInnerHTML={{ __html: t(contentItem.title) }}
                />
              )}
              <div
                className={styles['text']}
                dangerouslySetInnerHTML={{ __html: t(contentItem.context) }}
              />
            </div>
          </IntersectionVisible>
        )
      })}
    </div>
  )
};

export default ContentSection
