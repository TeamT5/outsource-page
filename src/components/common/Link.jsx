import React, { useContext } from 'react'
import { AppContext } from 'scripts/generalStores'
import PropTypes from 'prop-types'

const Link = (props) => {
  const as = props.as
  const href = props.href
  const appContext = useContext(AppContext)

  return (
    <>
      {React.cloneElement(props.children, {
        className: props.children.props.className,
        onClick: (e) => {
          e.preventDefault()
          props.children.props.onClick && props.children.props.onClick(e)
          if(e.ctrlKey || e.metaKey) {
            appContext.windowOpen(as)
          } else {
            appContext.routerPush(href, as)
          }
        },
      })}
    </>
  )
}

Link.propTypes = {
  as: PropTypes.string,
  href: PropTypes.string,
}

export default Link

