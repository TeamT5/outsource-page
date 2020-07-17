import NewsAndEvents from 'components/pages/NewsAndEvents'

const NewsAndEventsPage = (props) => {
  return (
    <NewsAndEvents {...props}/>
  )
}

NewsAndEventsPage.getInitialProps = async (ctx) => {
  const topics = []
  const count = 0
  let posts = []

  posts = posts.reduce((acc, post) => {
    const isExist = post.contents.some((content) => {
      return content.locale === 'en' || content.locale === ctx.query.lang
    })
    if(isExist) {
      acc.push(post)
    }
    return acc
  }, [])

  return { topics, count, posts }
}

export default NewsAndEventsPage
