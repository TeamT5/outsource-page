import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import styles from './Footer.module.scss'
import { ScrollTop } from '../common/ui-components'
import { LocaleContext } from 'src/scripts/translations/LocaleContext'
import useTranslation from 'src/scripts/translations/useTranslation'
import Link from '../common/Link'
import { animateScroll as scroll } from 'react-scroll'
import { AppContext } from 'scripts/generalStores'

const Footer = React.memo((props) => {
  const { t } = useTranslation()
  const mail = props.mail
  const phone = props.phone
  const localContext = useContext(LocaleContext)
  const appContext = useContext(AppContext)

  return (
    <footer className={styles['footer']}>
      <div className={styles['scroll-arrow']}>
        <ScrollTop
          classes={{
            scrollContainer: styles['scroll-container'],
          }}
          onClick={(e) => {
            scroll.scrollToTop(e)
          }}
        />
      </div>
      <div className={styles['icon-and-meta']}>
        <Link
          as="/"
          href="/"
        >
          <div className={styles['icon']}>
            <img src="/images/logo_contact.svg" alt=""/>
          </div>
        </Link>
        <div className={styles['metas']}>
          <div className={styles['meta-item']}>
            <span className={styles['label']}>{`${t('footer.mail')}: `}</span>
            <span className={styles['text']}>{mail}</span>
          </div>
          <div className={styles['meta-item']}>
            <span className={styles['label']}>{`${t('footer.phone')}: `}</span>
            <span className={styles['text']}>{phone}</span>
          </div>
          <div className={styles['meta-item']}>
            <span className={styles['label']}>{`${t('footer.address.label')}: `}</span>
            <span className={styles['text']}>{t('footer.address.content')}</span>
          </div>
        </div>
      </div>
      <hr/>
      <div className={styles['right-policy-and-i18n-selector']}>
        <div className={styles['right-policy']}>
          <Link
            as="/privacy-and-cookies-policy"
            href="/privacy-and-cookies-policy"
          >
            <a className={styles['right-policy-item']}>
              {t('footer.privacy-and-cookies-policy')}
            </a>
          </Link>
          <Link
            as="/terms-of-service"
            href="/terms-of-service"
          >
            <a className={styles['right-policy-item']}>
              {t('footer.terms-of-service')}
            </a>
          </Link>
          <div className={styles['right-policy-item']}>
            {'© 2020 TEAM T5, Inc. All Rights Reserved.'}
          </div>
        </div>
        <div className={styles['i18n-select']}>
          <div className={styles['select-container']}>
            <select
              value={localContext.locale}
              onChange={(e) => {
                appContext.changeLocale(e.target.value)
              }}
            >
              <option value="en">English</option>
              <option value="tw">繁體中文</option>
              <option value="jp">日本語</option>
            </select>
            <svg width="8px" height="4px" viewBox="0 0 8 4" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
              <g id="Symbols" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g id="footer/nor" transform="translate(-1227.000000, -341.000000)" fill="#4C433F">
                  <g transform="translate(1170.000000, 333.000000)">
                    <polygon id="Triangle" transform="translate(61.000000, 10.000000) scale(1, -1) translate(-61.000000, -10.000000) " points="61 8 65 12 57 12"></polygon>
                  </g>
                </g>
              </g>
            </svg>
          </div>
        </div>
      </div>
    </footer>
  )
})
Footer.displayName = 'Footer'
Footer.propTypes = {
  mail: PropTypes.string,
  phone: PropTypes.string,
  adress: PropTypes.string,
}

export default Footer
