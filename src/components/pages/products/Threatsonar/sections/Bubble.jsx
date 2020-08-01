import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import styles from './bubble.module.scss'

const Bubble = ({setIsOpen}) => {
  const GO_TO_TOP_BUTTON_PX_HEIGHT = 84
  const MARGIN_BOTTOM_PX_LENGTH = 20
  const [bottom, setBottom] = useState(MARGIN_BOTTOM_PX_LENGTH)

  useEffect(() => {
      /**
       * 以先計算基準線位置，位置是 Footer 高度 + GoToTop 按鈕的一半高度 + 預設間隔的距離
       * 當距離頁面會下方的距離 (distanceOfBottom) 小於這個基準線的時候，Bubble 會被固定動態指定位置。
       * 否則固定在下緣向上 20px
       */
      const handleScroll = (e) => {
        const footerHeight = document.querySelector('footer').getBoundingClientRect().height
        const {offsetHeight, clientHeight, scrollTop} = e.target.scrollingElement
        const distanceOfBottom = offsetHeight - clientHeight - scrollTop
        const checkHeight = (footerHeight + (GO_TO_TOP_BUTTON_PX_HEIGHT / 2) + MARGIN_BOTTOM_PX_LENGTH)
        if (distanceOfBottom <= checkHeight) {
            setBottom(footerHeight - distanceOfBottom + (GO_TO_TOP_BUTTON_PX_HEIGHT / 2) + MARGIN_BOTTOM_PX_LENGTH)
        } else {
            setBottom(MARGIN_BOTTOM_PX_LENGTH)
        }
      }

      window.addEventListener('scroll', handleScroll, { passive: true })
      return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div style={{bottom: `${bottom}px`}} className={styles['bubble']}>
      <p onClick={() => { setIsOpen(true) }}>Contact Us</p>
    </div>
  )
}

Bubble.propTypes = {
    setIsOpen: PropTypes.func,
}

export default Bubble

