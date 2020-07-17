const { getPostContent, toDateString } = require('./utils')
const marked = require('marked')

const blogPostsRssXml = (posts, locale, baseUrl) => {
  let latestPostDate = null
  let rssItemsXml = ''
  posts.forEach((post) => {
    const postDate = new Date(post['publish_date'] || post.createdAt)
    const content = getPostContent(post, locale)
    if (!latestPostDate || Date.parse(postDate) > Date.parse(latestPostDate)) {
      latestPostDate = postDate
    }
    const mk = () => {
      return marked(content.context)
    }
    rssItemsXml += `
      <item>
        <title>${content.title}</title>
        <link>
          ${`${baseUrl}${locale}/posts/${post['post_url']}`}
        </link>

        <pubDate>${toDateString(postDate)}</pubDate>
        <description>
        <![CDATA[${mk()}]]>
        </description>
    </item>`
  })
  return {
    rssItemsXml,
    latestPostDate,
  }
}

const getRssXml = (blogPosts, locale, baseUrl) => {
  const { rssItemsXml, latestPostDate } = blogPostsRssXml(blogPosts, locale, baseUrl)

  return `<?xml version="1.0" ?>
  <rss version="2.0">
    <channel>
        <title>Team T5 Blog</title>
        <link>${baseUrl}${locale}/blog</link>
        <description>${'TeamT5 Blog'}</description>
        <language>en</language>
        <lastBuildDate>${toDateString(latestPostDate)}</lastBuildDate>
        ${rssItemsXml}
    </channel>
  </rss>`
}

module.exports = {
  blogPostsRssXml,
  getRssXml,
}
