import { useState, useEffect } from 'react'
const useScrollTop = (ref) => {
  const [scrollTop, setScrollTop] = useState(0)
  const onScrolled = (e) => {
    setScrollTop(e.target.scrollTop)
  }
  useEffect(() => {
    const element = ref.current
    setScrollTop(element.scrollTop)
    element.addEventListener('scroll', onScrolled)
    return (() => {
      element.removeEventListener('scoll', onScrolled)
    })
  }, [])
  return scrollTop
}

const useDocumentScrollTop = () => {
  const [scrollTop, setScrollTop] = useState(0)
  const onScrolled = () => {
    setScrollTop(document.documentElement.scrollTop)
  }

  useEffect(() => {
    document.addEventListener('scroll', onScrolled)

    return () => {
      document.removeEventListener('scroll', onScrolled)
    }
  }, [])

  return scrollTop
}

export {
  useScrollTop,
  useDocumentScrollTop,
}
