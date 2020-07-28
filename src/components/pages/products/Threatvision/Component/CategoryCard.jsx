import React, { useContext } from 'react'
import styles from './CategoryCard.module.scss'
import useTranslation from 'src/scripts/translations/useTranslation'


const planCardConfig = [{
  title: 'solution.vision.category.enterprises-title',
  traits: ['solution.vision.category.enterprises-trait-1', 'solution.vision.category.enterprises-trait-2'],
  tags: 'solution.vision.category.enterprises-tags',
  image: '/images/ThreatVision/Enterprises.svg',
}, {
  title: 'solution.vision.category.financial-service-title',
  traits: ['solution.vision.category.financial-service-trait-1', 'solution.vision.category.financial-service-trait-2'],
  tags: 'solution.vision.category.financial-service-tags',
  image: '/images/ThreatVision/FinancialService.svg',
}, {
  title: 'solution.vision.category.public-sectors-title',
  traits: ['solution.vision.category.public-sectors-trait-1', 'solution.vision.category.public-sectors-trait-2'],
  tags: 'solution.vision.category.public-sectors-tags',
  image: '/images/ThreatVision/PublicSectors.svg',
}]

const CategoryCard = () => {
  const { t } = useTranslation(useContext)
  return (
    <div className={styles['container']}>
      {planCardConfig && planCardConfig.map((card, index) => (
        <div key={index} className={styles['card']}>
          <div className={styles['image-wrap']}>
            <img src={card.image} />
          </div>
          <div className={styles['context']}>
            <h4 className={styles['title']} dangerouslySetInnerHTML={{ __html: `${t(card.title)}` }} />
            <ul>{card.traits && card.traits.map((trait, index) => (
              <li className={styles['list']} key={index} dangerouslySetInnerHTML={{ __html: `${t(trait)}` }} />
            ))}</ul>
            <span className={styles['tags']} dangerouslySetInnerHTML={{ __html: `${t(card.tags)}` }} />
          </div>
        </div>))}
    </div>
  )
}

export default CategoryCard
