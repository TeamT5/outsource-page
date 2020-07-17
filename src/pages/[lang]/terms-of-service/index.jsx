import AnnounceLayout from 'components/layout/AnnounceLayout'
// import useTranslation from 'src/scripts/translations/useTranslation'
import md from 'src/assets/terms-of-service.md'

const TermOfServicePage = () => {
  // const { t } = useTranslation()
  const title = 'Terms of Service'
  const context = md
  return (
    <AnnounceLayout
      title={title}
      context={context}
    />
  )
}

export default TermOfServicePage
