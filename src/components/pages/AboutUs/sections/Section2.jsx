import React, { useEffect, useState, useRef } from 'react'
import styles from './Section2.module.scss'
import PropTypes from 'prop-types'
import useTranslation from 'src/scripts/translations/useTranslation'


const CardWithPhoto = (props)=>(
  <div>
    <div className={styles['LeftSide']}>
      {props.leadership && <p>{props.leadership}</p>}
    </div>
    <div className={styles['RightSide']}>
      <img src='/images/og-image.jpg' />
       {leadershipTitle && 
       <h4>
       props.about-us.our-leadership.content.title
      </h4>
       }
    </div>
  </div>
)

const Card = (props)=>(
  const { t } = useTranslation()
  <div>
    <div className={styles['LeftSide']}>
      {props.leadership && <p>{props.leadership}</p>}
    </div>
    <div className={styles['RightSide']}>
      <img src='/images/og-image.jpg' />
       {leadershipTitle && 
       <h4>
       props.about-us.our-leadership.content.title
      </h4>
       }
    </div>
  </div>
)

const Section2 = (props) => {
   return(
     <CardWithPhoto  
     leadership={t('about-us.our-leadership.title') } 
     leadershipTitle={t('about-us.our-leadership.content.title') }
     leadershipContext={t('about-us.our-leadership.content.context')}
     />
     <Card isTitle=''/>
   )
   
}