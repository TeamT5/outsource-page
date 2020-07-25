import React from 'react'
import styles from './Section1.module.scss'
import BannerContent from './BannerContent'

const Section1 = () => {
  return (
    <section className={styles['section1']}>
      <BannerContent />
    </section>
  )
}

export default Section1
