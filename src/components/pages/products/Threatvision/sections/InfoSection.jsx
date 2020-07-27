import React, { useState, useContext } from 'react'
import styles from './InfoSection.module.scss'
import PropTypes from 'prop-types'
import useTranslation from 'src/scripts/translations/useTranslation'

const tabConfig = {
  ce: 'solution.vision.advantage.ce-title',
  apac: 'solution.vision.advantage.apac-title',
}

const Tab = (props) => {
  const { t } = useTranslation(useContext)
  const { ce, apac } = props
  const [tabIndex, setTabIndex] = useState(0)
  return (
    <div className={styles['tab-wrap']}>
      {ce && <button onClick={() => { setTabIndex(0) }} className={[styles['tab'], tabIndex === 0 && styles['active']].join(' ')}>{t(ce)}</button>}
      {apac && <button onClick={() => { setTabIndex(1) }} className={[styles['tab'], styles['tab-long'], tabIndex === 1 && styles['active']].join(' ')}>{t(apac)}</button>}
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
