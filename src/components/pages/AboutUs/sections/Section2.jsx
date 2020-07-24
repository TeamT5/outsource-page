import React, { useEffect, useState, useRef } from 'react'
import styles from './Section2.module.scss'
import PropTypes from 'prop-types'
import useTranslation from 'src/scripts/translations/useTranslation'


const CardWithPhoto = (props)=>(
  <div className={styles['card-with-photo-container']}>
    <div className={styles['left-side']}>
      {props.leadership && <h5 className={styles['leadership-text']}>{props.leadership}</h5>}
    </div>
    <div className={styles['right-side']}>
      <img src='/images/about_us/CEO_TT.jpg' />
       {props.leadershipTitle && 
       <p className={styles['leadership-head']}>{props.leadershipTitle}</p>
       }
       {props.leadershipContext && 
       <p>
         {props.leadershipContext}
       </p>
       }
    </div>
  </div>
)

const Card = (props)=>{
  const { t } = useTranslation()
  return( 
    <div className={styles['card-container']}>
      <div className={styles['left-side']}>
      {props.title && <h4>{t(props.title)}</h4>}
      </div>
      <div className={styles['right-side']}>
      {props.content && props.content.map(card=>(
      <>
      <h5>
       {t(card.title)}
      </h5>
      <p>
       {t(card.context)}
      </p>
      </>
      ))}
      </div>
    </div>
)}



export const Section2 = (props) => {
  const { t } = useTranslation()
   const cybers ={
     title:'about-us.our-cyber-threat-experts.title',
     content:[
       {title:'about-us.our-cyber-threat-experts.analyst-title',
        ontext:'about-us.our-cyber-threat-experts.analyst-context'},
       {
        title:'about-us.our-cyber-threat-experts.engine-lab-title',
        context:'about-us.our-cyber-threat-experts.engine-lab-context'
       },{
        title:'about-us.our-cyber-threat-experts.d39-title',
        context:'about-us.our-cyber-threat-experts.d39-context'
       },{
         title:'about-us.our-cyber-threat-experts.ir-team-title',
         context:'about-us.our-cyber-threat-experts.ir-team-context'
       }]
   }

   return(
     <div className={styles['container']}>
     <CardWithPhoto  
     leadership={t('about-us.our-leadership.title') } 
     leadershipTitle={t('about-us.our-leadership.content.title') }
     leadershipContext={t('about-us.our-leadership.content.context')}
     />
     <Card {...cybers}/>
     </div>
   )
   
}