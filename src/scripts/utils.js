const toDateString = (date) => {
  const yyyy = date.getFullYear()
  let mm = date.getMonth() + 1
  mm = (mm < 10) ? `0${mm}` : mm
  let dd = date.getDate()
  dd = (dd < 10) ? `0${dd}` : dd
  return `${yyyy}. ${mm}. ${dd}`
}

const getPostContent = (blog, locale = 'en') => {
  if(!blog.contents || blog.contents.length === 0) {
    return null
  }

  let content = null

  content = blog.contents.filter((content) => {
    return content.locale === locale
  })[0]

  if(!content) {
    content = blog.contents.filter((content) => {
      return content.locale === 'en'
    })[0]
  }

  if(!content) {
    content = blog.contents[0]
  }

  return content
}

const getTopicContent = (topic, locale = 'en') => {
  if(!topic.contents || topic.contents.length === 0) {
    return null
  }

  let content = null

  content = topic.contents.filter((content) => {
    return content.locale === locale
  })[0]

  if(!content) {
    content = topic.contents.filter((content) => {
      return content.locale === 'en'
    })[0]
  }

  if(!content) {
    content = topic.contents[0]
  }

  return content
}

const getTotalPage = (count, max) => {
  return Math.ceil(count / max)
}

module.exports = {
  toDateString,
  getPostContent,
  getTopicContent,
  getTotalPage,
}
