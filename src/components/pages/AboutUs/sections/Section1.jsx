import React, { useEffect, useState, useRef } from 'react'
import styles from './Section1.module.scss'
import PropTypes from 'prop-types'
import BannerContent from './BannerContent'

export const Section1 = (props) => {

  return (
    <section className={styles['section1']}>
      <BannerContent/>
    </section>
  )
}

Section1.propTypes = {
  onLoaded: PropTypes.func,
}
export default Section1
