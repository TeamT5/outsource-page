import React, { useEffect, useState, useRef } from 'react'
import styles from './Section1.module.scss'
import PropTypes from 'prop-types'
import BannerContent from './BannerContent'

const Section1 = (props) => {
  const hero1Context = ''
  const heroImgsRef = useRef()
  const [isLoaded, setIsLoaded] = useState(false)
  const onLoaded = true

  // useEffect(() => {
  //   if(!heroImgsRef.current.isLoaded) {
  //     const onImgLoaded = () => {
  //       setIsLoaded(true)
  //     }
  //     heroImgsRef.current.addEventListener('imgs-loaded', onImgLoaded)
  //     return () => {
  //       heroImgsRef.current.removeEventListener('imgs-loaded', onImgLoaded)
  //     }
  //   } else {
  //     setIsLoaded(heroImgsRef.current.isLoaded)
  //   }
  // }, [])

  // useEffect(() => {
  //   if(isLoaded) {
  //     heroImgsRef.current.startAnimate()
  //     const id = setTimeout(() => {
  //       onLoaded()
  //     }, 100)
  //     return () => {
  //       clearTimeout(id)
  //     }
  //   }
  // }, [isLoaded])

  return (
    <section className={styles['section1']}>
      <div className={styles['top']}>
      </div>
      {/* <div className={styles['content-container']}>
        <div className={styles['content']}>
          <h1>
            <span>Persistent</span>
            <span>Cyber Threat Hunters</span>
          </h1>
          <hr align="left" />
          <p className={styles['context']}>
            {hero1Context}
          </p>
        </div>
      </div> */}
      <BannerContent/>
    </section>
  )
}

Section1.propTypes = {
  onLoaded: PropTypes.func,
}
export default Section1
