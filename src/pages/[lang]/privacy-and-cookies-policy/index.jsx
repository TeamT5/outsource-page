import AnnounceLayout from 'components/layout/AnnounceLayout'
import md from 'src/assets/privacy-and-cookies-policy.md'

const PrivacyAndCookiesPolicyPage = () => {
  const title = 'Privacy & Cookies Policy'
  const context = md
  return (
    <AnnounceLayout
      title={title}
      context={context}
    />
  )
}

export default PrivacyAndCookiesPolicyPage
