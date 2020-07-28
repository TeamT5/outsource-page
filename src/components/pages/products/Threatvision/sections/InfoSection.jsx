import React, { useState, useContext } from 'react'
import styles from './InfoSection.module.scss'
import PropTypes from 'prop-types'
import useTranslation from 'src/scripts/translations/useTranslation'

const tabConfig = {
  ce: {
    title: 'solution.vision.advantage.ce-title',
    context: 'solution.vision.advantage.ce-context',
  },
  apac: {
    title: 'solution.vision.advantage.apac-title',
    context: 'solution.vision.advantage.apac-context',
  },
}

const imagesConfig = {
  ce: [{
    title: 'solution.vision.advantage.ce-trait-1',
    img: '/images/ThreatVision/Customer Engagement_API.svg',
  },
  {
    title: 'solution.vision.advantage.ce-trait-2',
    img: '/images/ThreatVision/Customer Engagement_Keyword_search.svg',
  },
  {
    title: 'solution.vision.advantage.ce-trait-3',
    img: '/images/ThreatVision/Customer Engagement_online_sandbox.svg',
  },
  {
    title: 'solution.vision.advantage.ce-trait-4',
    img: '/images/ThreatVision/Customer Engagement_Technical_data.svg',
  }],
  apac: [{
    title: 'solution.vision.advantage.apac-trait-1',
    img: '/images/ThreatVision/APACcentric_samples.svg',
  },
  {
    title: 'solution.vision.advantage.apac-trait-2',
    img: '/images/ThreatVision/APACcentric_malware.svg',
  },
  {
    title: 'solution.vision.advantage.apac-trait-3',
    img: '/images/ThreatVision/APACcentric_Adversary.svg',
  }],
}

const Tab = (props) => {
  const { t } = useTranslation(useContext)
  const { ce, apac } = props
  const [tabIndex, setTabIndex] = useState(0)
  return (
    <div className={styles['tab-container']}>
      <div className={styles['tab-wrap']}>
        {ce && ce.title && <button dangerouslySetInnerHTML={{ __html: `${t(ce.title)}` }} onClick={() => { setTabIndex(0) }} className={[styles['tab'], tabIndex === 0 && styles['active']].join(' ')} />}
        {apac && apac.title && <button dangerouslySetInnerHTML={{ __html: `${t(apac.title)}` }} onClick={() => { setTabIndex(1) }} className={[styles['tab'], styles['tab-long'], tabIndex === 1 && styles['active']].join(' ')} />}
      </div>
      {tabIndex === 0
        ? (<div className={styles['tab-content-ce']}>
          {tabConfig && tabConfig.ce && tabConfig.ce.context && < p className={styles['title']} dangerouslySetInnerHTML={{ __html: `${t(tabConfig.ce.context)}` }} />}
          <div className={styles['context']}>
            {imagesConfig && imagesConfig.ce.length > 0 && imagesConfig.ce.map((card, index) => {
              return <div className={styles['img-box']} key={index}>
                <img src={card.img} />
                <p className={styles['card-title']} dangerouslySetInnerHTML={{ __html: `${t(card.title)}` }} />
              </div>
            })}
          </div>
        </div>)
        : (<div className={styles['tab-content-apac']}>
          {tabConfig && tabConfig.apac && tabConfig.apac.context && < p className={styles['title']} dangerouslySetInnerHTML={{ __html: `${t(tabConfig.apac.context)}` }} />}
          <div className={styles['context']}>
            {imagesConfig && imagesConfig.apac.length > 0 && imagesConfig.apac.map((card, index) => {
              return <div className={styles['img-box']} key={index}>
                <img src={card.img} />
                <p className={styles['card-title']} dangerouslySetInnerHTML={{ __html: `${t(card.title)}` }} />
              </div>
            })}
          </div>
        </div>)}
    </div>
  )
}

Tab.propTypes = {
  ce: PropTypes.string,
  apac: PropTypes.string,
}


const InfoSection = () => {
  return (
    <div className={styles['container']}>
      <div className={styles['tab-box']}>
        <Tab {...tabConfig} />
      </div>

    </div>
  )
}

export default InfoSection
