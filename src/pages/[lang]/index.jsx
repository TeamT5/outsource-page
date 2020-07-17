import React from 'react'
import Home from 'components/pages/Home'

const HomePage = (props) => {
  return (
    <Home {...props}/>
  )
}

HomePage.getInitialProps = async () => {
  let blogs = []

  let newsAndEvents = []

  blogs = blogs.slice(0, 4)
  newsAndEvents = newsAndEvents.slice(0, 4)

  return {
    blogs,
    newsAndEvents,
  }
}

export default HomePage
