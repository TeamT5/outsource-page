import React, {Fragment} from 'react'
import styles from './ContentSection.module.scss'
import PropTypes from 'prop-types'
import useTranslation from 'src/scripts/translations/useTranslation'

const CardWithPhoto = props =>{
  const leadership = props.leadership
  const leadershipTitle = props.leadershipTitle
  const leadershipContext = props.leadershipContext
  return(
  <div className={styles['card-with-photo-container']}>
    <div className={styles['left-side']}>
      {leadership && (
        <h5 className={styles['leadership-text']}>{leadership}</h5>
      )}
    </div>
    <div className={styles['right-side']}>
      <img src='/images/about_us/CEO_TT.jpg' />
      {leadershipTitle && (
        <p className={styles['leadership-head']}>{leadershipTitle}</p>
      )}
      {leadershipContext && <p className={styles['article-context']}>{leadershipContext}</p>}
    </div>
  </div>
)
}

CardWithPhoto.propTypes = {
  leadership: PropTypes.string,
  leadershipTitle: PropTypes.string,
  leadershipContext: PropTypes.leadershipContext,
}

const Card = props => {
  const { t } = useTranslation()
  const {title, content} = props
  return (
    <div className={styles['card-container']}>
      <div className={styles['left-side']}>
        {title && <h5 className={styles['leadership-text']}>{t(title)}</h5>}
      </div>
      <div className={styles['right-side']}>
        {content
          && content.map((card, index) => (
            <Fragment key={index}>
              <p className={styles['leadership-head']}>{t(card.title)}</p>
              <p className={styles['article-context']}>{t(card.context)}</p>
            </Fragment>
          ))}
      </div>
    </div>
  )
}

Card.propTypes = {
  title: PropTypes.string,
  content: PropTypes.array,
}

 const ContentSection = () => {
  const { t } = useTranslation()
  const cybers = {
    title: 'about-us.our-cyber-threat-experts.title',
    content: [
      {
        title: 'about-us.our-cyber-threat-experts.analyst-title',
        context: 'about-us.our-cyber-threat-experts.analyst-context',
      },
      {
        title: 'about-us.our-cyber-threat-experts.engine-lab-title',
        context: 'about-us.our-cyber-threat-experts.engine-lab-context',
      },
      {
        title: 'about-us.our-cyber-threat-experts.d39-title',
        context: 'about-us.our-cyber-threat-experts.d39-context',
      },
      {
        title: 'about-us.our-cyber-threat-experts.ir-team-title',
        context: 'about-us.our-cyber-threat-experts.ir-team-context',
      },
    ],
  }

  return (
    <div className={styles['container']}>
      <CardWithPhoto
        leadership={t('about-us.our-leadership.title')}
        leadershipTitle={t('about-us.our-leadership.content.title')}
        leadershipContext={t('about-us.our-leadership.content.context')}
      />
      <Card {...cybers} />
    </div>
  )
}


export default ContentSection
