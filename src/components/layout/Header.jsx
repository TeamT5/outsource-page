import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import styles from './Header.module.scss'
import Link from '../common/Link'
import { LinkedinSvg, TwitterSvg } from '../common/Icon'
import Burger from '../common/Burger'
import useTranslation from 'src/scripts/translations/useTranslation'

const NavItem = React.memo((props) => {
  const href = props.href
  const as = props.as
  const text = props.text
  const scrollActive = props.scrollActive
  return (
    <div
      className={`
        ${styles['nav-item-container']}
        ${scrollActive ? styles['scroll-active'] : ''}
      `}
    >
      <Link
        href={href}
        as={as}
      >
        <div className={styles['nav-item']}>
          <a>{text}</a>
        </div>
      </Link>
    </div>
  )
})

NavItem.displayName = 'NavItem'

NavItem.propTypes = {
  scrollActive: PropTypes.bool,
  href: PropTypes.string,
  text: PropTypes.string,
  as: PropTypes.string,
}

const Logo = React.memo((props) => {
  const scrollActive = props.scrollActive

  return (
    <Link
      as="/"
      href="/"
    >
      <a
        className={`
          ${styles['logo']}
          ${scrollActive ? styles['scroll-active'] : ''}
        `}
      >
        <svg width="140px" height="140px" viewBox="0 0 140 140">
          <g id="Symbols" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <g id="header_logo_L">
              <g>
                <rect id="Rectangle" fill="#D93751" x="0" y="0" width="140" height="140"></rect>
                <g id="logo" fill="#FEFEFE">
                  <g className={styles['graph']}>
                    <path d="M45.3878535,7.83374722 L46.5394028,6.64521453 C41.9643042,2.79068668 36.0560225,0.348420339 29.5325296,0.000255690073 L29.5325296,7.2512 C30.6363042,8.26884649 33.1205859,8.98776174 36.5806423,8.98776174 C40.4539944,8.98776174 44.2998535,8.10477869 45.3878535,7.83374722" id="Fill-1"></path>
                    <path d="M26.3422648,52.6615012 L26.3422648,50.0376949 C19.5488,43.5926005 14.657307,42.8932881 12.8558423,42.8932881 L12.4429972,42.9060726 L9.33764507,46.0156901 C13.9118423,49.8697918 19.8196732,52.3129104 26.3422648,52.6615012" id="Fill-3"></path>
                    <path d="M46.3986028,45.2400969 C44.2419831,44.4845327 42.1705465,44.1001453 40.2415324,44.1001453 C33.6680113,44.1001453 30.3197296,48.5244358 29.4516732,49.8791671 L29.5192789,52.6619274 C36.3294197,52.3018305 42.4819831,49.6703535 47.1359549,45.5239128 L46.3986028,45.2400969 Z" id="Fill-5"></path>
                    <path d="M49.3275493,43.2795506 C53.0927324,39.0500107 55.4575775,33.7099235 55.8113803,27.8367225 L51.4832676,27.8367225 C49.2689577,28.6758121 47.6410141,30.0633569 46.8347042,31.9256329 C45.2644507,35.5670857 46.9270986,40.3173811 47.7140282,42.1903109 L49.3275493,43.2795506 Z" id="Fill-7"></path>
                    <path d="M16.046062,8.13963777 C20.6599211,8.13963777 24.7414986,7.04869346 26.3424,6.55904697 L26.3424,0.000170460048 C19.8198085,0.348761259 13.9128789,2.79145375 9.33868169,6.6451293 L10.3369915,7.58777337 C11.9067944,7.90823826 13.9128789,8.13963777 16.046062,8.13963777" id="Fill-9"></path>
                    <path d="M7.70582535,9.29574044 L7.08385352,8.77370654 C3.00002254,13.0923119 0.411628169,18.6684862 0.0429521127,24.8255031 L6.49072676,24.8255031 C11.2276282,18.4588203 7.85230423,9.67075254 7.70582535,9.29574044" id="Fill-11"></path>
                    <path d="M6.34780845,27.8365947 L0.0429070423,27.8365947 C0.412935211,33.9927593 2.99952676,39.5689337 7.08290704,43.887539 L9.97417839,41.1563429 C9.97778028,35.5507642 7.37811831,29.8667738 6.34780845,27.8365947" id="Fill-13"></path>
                    <path d="M12.8634141,24.8256736 C17.1762028,22.6514557 17.0261183,19.1634169 16.7484845,17.766923 L11.7177239,13.1244436 C12.1882592,16.1957075 12.254062,20.6979835 9.9315831,24.8256736 L12.8634141,24.8256736 Z" id="Fill-15"></path>
                    <path d="M13.7971831,10.8505065 L18.6422535,15.4235235 C19.5337465,15.5837559 20.6100282,15.7333346 21.5934648,15.7333346 C24.3594366,15.7333346 25.8409014,14.5482111 26.4732394,13.8416542 L26.3614648,9.47404165 C24.1588732,10.0962208 20.3977465,10.934032 16.0962254,10.934032 C15.3210141,10.934032 14.5494085,10.9050538 13.7971831,10.8505065" id="Fill-17"></path>
                    <path d="M41.6613859,24.8256736 L46.3753014,24.8256736 C44.5544563,23.29963 43.3163718,21.5485792 42.6876394,19.6040562 C42.1972732,18.0890925 42.1125408,16.4739835 42.4289352,14.7830199 L38.9531042,18.0673588 C38.9760901,18.1474751 38.910738,18.3170828 38.8954141,18.4986228 C38.7061183,20.6562208 40.6468507,23.5020513 41.6613859,24.8256736" id="Fill-19"></path>
                    <path d="M12.7555606,38.5327923 L17.2071662,34.3309521 C17.0530254,29.6173056 12.7055324,27.9787584 12.2038986,27.8057414 L9.59612394,27.8296058 C10.5912789,29.9816639 12.2462648,34.0816542 12.7555606,38.5327923" id="Fill-21"></path>
                    <path d="M46.2172845,27.8365947 L41.9004394,27.8365947 C38.0352,29.5646334 37.6029746,33.2550935 37.5912563,34.6933501 L43.6635944,39.135539 C43.1272563,36.6919942 42.9226366,33.6339409 44.1070873,30.8844203 C44.5970028,29.7410596 45.306862,28.7195777 46.2172845,27.8365947" id="Fill-23"></path>
                    <path d="M45.5075606,18.7829927 C46.6532507,22.3566877 50.5685183,24.3502179 51.7376451,24.8765133 L55.8349972,24.8317676 C55.4672225,18.673046 52.8801803,13.0943148 48.7949972,8.77485714 L48.1847437,9.35186441 L47.9224338,9.72900726 C45.4688,13.0917579 44.6588845,16.1374528 45.5075606,18.7829927" id="Fill-25"></path>
                    <path d="M29.5945014,42.8879613 L29.5286986,43.335845 L29.5327549,45.4930169 C31.5735437,43.6614237 35.1305014,41.4130557 40.2919662,41.4130557 C40.7354592,41.4130557 41.1830085,41.4296755 41.6341634,41.462063 L35.2923042,36.8251235 C30.4585014,37.3369298 29.6251493,42.6582663 29.5945014,42.8879613" id="Fill-27"></path>
                    <path d="M32.1713127,16.1228785 C32.5417915,16.2319729 32.9505803,16.2869462 33.3864113,16.2869462 C35.2847775,16.2869462 37.2480451,15.2326508 37.8037634,14.9100552 L41.4918761,11.4147719 C39.7634254,11.6551206 38.1237634,11.7769995 36.5963268,11.7769995 C33.7145239,11.7769995 31.3456225,11.3367864 29.5328901,10.4627525 L29.5328901,13.4862877 C30.1192563,14.8448542 31.0143549,15.7840891 32.1713127,16.1228785" id="Fill-29"></path>
                    <path d="M26.3422648,41.5732881 C24.648969,37.2640581 20.8373634,36.7778208 19.2747718,36.7778208 L18.9241239,36.7884746 L15.3054197,40.3536465 C17.9402366,40.863322 21.7130817,42.350586 26.3422648,46.2306828 L26.3422648,41.5732881 Z" id="Fill-31"></path>
                    <polygon id="Fill-33" points="27.9386592 34.3720329 36.4574197 26.3310063 27.9386592 18.2899797 19.4198986 26.3310063"></polygon>
                  </g>
                  <g className={styles['text']}>
                    <path d="M53.5407775,0.00379273608 L45.8256225,0.00379273608 C45.6034254,0.00379273608 45.4114254,0.0800736077 45.2505239,0.232209201 C45.0896225,0.384770944 45.0089465,0.570998547 45.0089465,0.79174431 C45.0089465,1.01206392 45.0896225,1.19871768 45.2505239,1.35085327 C45.4114254,1.50341501 45.6034254,1.57926973 45.8256225,1.57926973 L48.5582423,1.57926973 C48.647031,1.57926973 48.6916507,1.61634479 48.6916507,1.68964262 L48.6916507,9.87513414 C48.6916507,10.127415 48.7858479,10.3456039 48.9751437,10.5288484 C49.163538,10.7129453 49.3970028,10.8049937 49.6746366,10.8049937 L49.6913127,10.8049937 C49.9581296,10.8049937 50.1884394,10.7129453 50.3831437,10.5288484 C50.5769465,10.3456039 50.6742986,10.127415 50.6742986,9.87513414 L50.6742986,1.68964262 C50.6742986,1.61634479 50.7135099,1.57926973 50.791031,1.57926973 L53.5407775,1.57926973 C53.7737915,1.57926973 53.9707493,1.50341501 54.1321014,1.35085327 C54.2930028,1.19871768 54.3736789,1.01206392 54.3736789,0.79174431 C54.3736789,0.570998547 54.2930028,0.384770944 54.1321014,0.232209201 C53.9707493,0.0800736077 53.7737915,0.00379273608 53.5407775,0.00379273608" id="Fill-35"></path>
                    <path d="M62.5289014,4.67316223 C61.895662,4.16732203 61.0830423,3.84856174 60.1978592,3.84472639 C60.192,3.84472639 56.8455211,3.84387409 56.8455211,3.84387409 L56.8455211,1.5908184 L61.8821408,1.5908184 C62.3468169,1.5908184 62.7209014,1.2345569 62.7209014,0.795196126 C62.7209014,0.356261501 62.3445634,9.9475983e-14 61.880338,9.9475983e-14 C61.8695211,9.9475983e-14 55.1661972,0.000426150121 55.1661972,0.000426150121 L55.1612394,5.45642615 C55.1612394,5.45642615 60.2442817,5.45813075 60.2587042,5.45898305 C61.2232113,5.50628571 61.9997746,6.45745278 61.9997746,7.30719613 C61.9997746,8.13435351 61.2633239,9.14646005 60.3335211,9.22018402 C60.3033239,9.22487167 55.2189296,9.21890557 55.2009014,9.22061017 C54.7610141,9.24617918 54.3743099,9.59349153 54.3743099,10.0158063 C54.3743099,10.0294431 54.3734085,10.0362615 54.3743099,10.0498983 C54.4009014,10.4700823 54.8250141,10.8105763 55.2748169,10.8105763 C55.3248451,10.8105763 60.1807324,10.8050363 60.1807324,10.8050363 C61.0397746,10.8050363 61.8294085,10.5399709 62.456338,10.1023148 C63.308169,9.50783535 63.8580282,8.32569492 63.8580282,7.30719613 C63.8580282,6.31682324 63.340169,5.32133656 62.5289014,4.67316223" id="Fill-37"></path>
                    <path d="M19.8986366,1.07875642 C20.091538,1.07875642 20.2492845,0.929177724 20.2492845,0.747211622 C20.2492845,0.56481937 20.091538,0.415666828 19.8986366,0.415666828 L12.4863549,0.415666828 L12.4859042,0.415666828 C12.2930028,0.415666828 12.135707,0.56481937 12.135707,0.747211622 L12.135707,10.4732358 C12.135707,10.5188339 12.1451718,10.5623012 12.1632,10.6023593 C12.2168338,10.7208291 12.3412282,10.8047806 12.4859042,10.8047806 L19.8986366,10.8047806 C20.091538,10.8047806 20.2492845,10.6556281 20.2492845,10.4732358 C20.2492845,10.2908436 20.091538,10.1421172 19.8986366,10.1421172 L12.8365521,10.1421172 L12.8365521,5.53884358 L19.4682141,5.53884358 C19.6444394,5.53884358 19.7882141,5.40247554 19.7882141,5.236277 L19.7882141,5.17874673 C19.7882141,5.01212203 19.6444394,4.875754 19.4682141,4.875754 L12.8365521,4.875754 L12.8365521,1.07875642 L19.8986366,1.07875642 Z" id="Fill-39"></path>
                    <path d="M10.1354366,0.415794673 L0.350647887,0.415794673 C0.157746479,0.415794673 -1.04805054e-13,0.564947215 -1.04805054e-13,0.746913317 C-1.04805054e-13,0.929305569 0.157746479,1.07888426 0.350647887,1.07888426 L4.89239437,1.07888426 L4.89239437,10.4733637 C4.89239437,10.6553298 5.05014085,10.8049085 5.24304225,10.8049085 C5.43594366,10.8049085 5.59369014,10.6553298 5.59369014,10.4733637 L5.59369014,1.07888426 L10.1354366,1.07888426 C10.328338,1.07888426 10.4860845,0.929305569 10.4860845,0.746913317 C10.4860845,0.564947215 10.328338,0.415794673 10.1354366,0.415794673" id="Fill-41"></path>
                    <path d="M24.5099718,6.72980533 L27.1776901,1.32025569 L29.8454085,6.72980533 L24.5099718,6.72980533 Z M27.5341972,0.47477385 C27.4692958,0.343093462 27.3232676,0.274909443 27.1776901,0.289824697 C27.0325634,0.274909443 26.8860845,0.343093462 26.8211831,0.47477385 L21.9643944,10.322677 C21.8828169,10.4875971 21.9589859,10.6861831 22.1338592,10.7633162 C22.3087324,10.8404494 22.5183099,10.76843 22.5998873,10.6030838 L24.1827606,7.39289492 L30.172169,7.39289492 L31.755493,10.6030838 C31.8370704,10.76843 32.0466479,10.8404494 32.2215211,10.7633162 C32.3963944,10.6861831 32.4725634,10.4875971 32.3909859,10.322677 L27.5341972,0.47477385 Z" id="Fill-43"></path>
                    <path d="M42.8502085,0.161510896 L42.8466028,0.161510896 C42.7375324,0.161510896 42.6433352,0.21264891 42.5793352,0.288077482 C42.5599549,0.306828087 42.5383211,0.323447942 42.5234479,0.347738499 L38.6347718,6.71612591 L34.7726873,0.391205811 C34.7298704,0.254837772 34.6014197,0.152561743 34.4436732,0.152561743 L34.4400676,0.152561743 C34.2480676,0.152561743 34.0912225,0.300861985 34.0912225,0.482401937 L34.0912225,10.466247 C34.0912225,10.6473608 34.2480676,10.795661 34.4400676,10.795661 L34.4436732,10.795661 C34.6352225,10.795661 34.7925183,10.6473608 34.7925183,10.466247 L34.7925183,1.74934625 L38.3300958,7.54243099 C38.3350535,7.55138015 38.3440676,7.55649395 38.3503775,7.56416465 C38.3589408,7.576523 38.3706592,7.58632446 38.3810254,7.59740436 C38.4017577,7.61828571 38.4224901,7.63788862 38.4472789,7.65280387 C38.4526873,7.65578692 38.4553915,7.66132688 38.4608,7.66388378 C38.4720676,7.66984988 38.4842366,7.67027603 38.4959549,7.67538983 C38.520293,7.68476513 38.5437296,7.69414044 38.5698704,7.69882809 C38.5919549,7.70223729 38.6126873,7.70266344 38.6347718,7.70266344 C38.6568563,7.70266344 38.6780394,7.70223729 38.6996732,7.69882809 C38.7258141,7.69414044 38.7492507,7.68476513 38.7735887,7.67538983 C38.7848563,7.67027603 38.7974761,7.66984988 38.8087437,7.66388378 C38.8141521,7.66132688 38.817307,7.65578692 38.8222648,7.65280387 C38.8475042,7.63788862 38.8677859,7.61828571 38.8885183,7.59740436 C38.8988845,7.58632446 38.9106028,7.576523 38.9191662,7.56416465 C38.9254761,7.55649395 38.9344901,7.55138015 38.9394479,7.54243099 L42.4977577,1.71525424 L42.4977577,10.4751961 C42.4977577,10.6563099 42.6546028,10.8050363 42.8466028,10.8050363 L42.8502085,10.8050363 C43.0422085,10.8050363 43.1990535,10.6563099 43.1990535,10.4751961 L43.1990535,0.49135109 C43.1990535,0.310237288 43.0422085,0.161510896 42.8502085,0.161510896" id="Fill-45"></path>
                  </g>
                </g>
              </g>
            </g>
          </g>
        </svg>
      </a>
    </Link >
  )
})

Logo.displayName = 'Logo'

Logo.propTypes = {
  scrollActive: PropTypes.bool,
}

const Nav = React.memo((props) => {
  const { t } = useTranslation()
  const scrollActive = props.scrollActive
  const setActiveBurger = props.setActiveBurger
  const activeBurger = props.activeBurger
  const navItems = [
    {
      name: 'newsAndEvents',
      showName: t('common.news-and-event'),
      as: '/news-and-events',
      href: '/news-and-events',
    },
    {
      name: 'blog',
      showName: t('common.blog'),
      as: '/blog',
      href: '/blog',
    },
  ]
  const iconMode = props.iconMode || {
    origin: 'dark',
    scrollActive: 'dark',
  }

  return (
    <nav className={`
      ${styles['nav']}
      ${activeBurger ? styles['active-burger'] : ''}
    `}>
      <div className={styles['burger-container']}>
        <Burger
          activeBurger={activeBurger}
          onClick={() => {
            setActiveBurger((prev) => {
              const next = !prev
              if(next) {
                document.body.style.overflow = 'hidden'
              } else {
                document.body.style.overflow = 'unset'
              }
              return next
            })
          }}
          color={scrollActive ? iconMode.scrollActive : iconMode.origin}
        />
      </div>
      <div className={styles['nav-items-wrap']}>
        <div className={styles['nav-items']}>
          <div className={styles['bg']}></div>
          <div className={styles['nav-content']}>
            {navItems.map((navItem) => {
              return (
                <NavItem
                  scrollActive={scrollActive}
                  key={navItem.name}
                  text={navItem.showName}
                  href={navItem.href}
                  as={navItem.as}
                />
              )
            })}
            <div className={styles['sns-block']}>
              <a
                className={styles['sns-item']}
                onClick={(e) => {
                  e.preventDefault()
                  window.open('https://www.linkedin.com/company/teamt5/')
                }}
              >
                <LinkedinSvg
                  mode={scrollActive ? iconMode.scrollActive : iconMode.origin}
                />
              </a>
              <a
                className={styles['sns-item']}
                onClick={(e) => {
                  e.preventDefault()
                  window.open('https://twitter.com/teamt5_official/')
                }}
              >
                <TwitterSvg
                  mode={scrollActive ? iconMode.scrollActive : iconMode.origin}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
})

Nav.displayName = 'Nav'

Nav.propTypes = {
  scrollActive: PropTypes.bool,
  setActiveBurger: PropTypes.func,
  activeBurger: PropTypes.bool,
  iconMode: PropTypes.object,
}

const Header = React.memo((props) => {
  const [scrollTopActive, setScrollTopActive] = useState(false)
  const classes = Object.assign({
    header: styles['default-header'],
    scrollActiveHeader: styles['default-scroll-active-header'],
    background: styles['default-background'],
    scrollActivebackground: styles['default-background-scroll-active-background'],
  }, props.classes)
  const iconMode = props.iconMode
  const [activeBurger, setActiveBurger] = useState(false)
  useEffect(() => {
    const onScrolled = () => {
      setScrollTopActive(document.documentElement.scrollTop > 0)
    }
    onScrolled()
    document.addEventListener('scroll', onScrolled)
    return () => {
      document.removeEventListener('scroll', onScrolled)
    }
  }, [])
  return (
    <header
      className={`
        ${styles['header']}
        ${classes.header}
        ${(scrollTopActive || activeBurger) ? classes.scrollActiveHeader : ''}
      `}
    >
      <div className={styles['content']}>
        <Logo scrollActive={(scrollTopActive || activeBurger)} />
        <Nav
          scrollActive={(scrollTopActive || activeBurger)}
          iconMode={iconMode}
          activeBurger={activeBurger}
          setActiveBurger={setActiveBurger}
        />
      </div>
      <div className={`
        ${styles['background']}
        ${classes.background}
        ${(scrollTopActive || activeBurger) ? classes.scrollActivebackground : ''}
      `}></div>
    </header>
  )
})
Header.propTypes = {
  classes: PropTypes.object,
  iconMode: PropTypes.object,
}

export default Header
