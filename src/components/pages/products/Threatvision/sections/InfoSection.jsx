import React, { useState } from 'react'
import styles from './InfoSection.module.scss'

const Tab = () => {
  const [tabIndex, setTabIndex] = useState(0)
  return (
    <div className={styles['tab-wrap']}>
      <button onClick={() => { setTabIndex(0) }} className={[styles['tab'], tabIndex === 0 && styles['active']].join(' ')}>Customer Engagement</button>
      <button onClick={() => { setTabIndex(1) }} className={[styles['tab'], styles['tab-long'], tabIndex === 1 && styles['active']].join(' ')}>APAC centric, World-wide Tracking</button>
    </div>
  )
}

const InfoSection = () => {
  return (
    <div className={styles['container']}>
      <div className={styles['tab-box']}>
        <Tab />
      </div>

    </div>
  )
}

export default InfoSection
