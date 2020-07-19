import React from 'react'
import BaseLayout from '../../layout/BaseLayout'
import useTranslation from 'src/scripts/translations/useTranslation'
import styles from './index.module.scss'
const AboutUs = () => {
  const { t } = useTranslation()

  return (
    <BaseLayout>
      <div className={styles['context']}>
        <div
          dangerouslySetInnerHTML={{
            __html: t('about-us.our-leadership.content.context'),
          }}
        />
      </div>
    </BaseLayout>
  )
}

export default AboutUs
