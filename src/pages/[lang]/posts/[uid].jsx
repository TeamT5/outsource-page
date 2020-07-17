import Post from 'components/pages/Post'
import PropTypes from 'prop-types'
import Custom404 from '../../../components/pages/404'

const PostPage = (props) => {
  return (
    <>
      {!props.post ? (
        <Custom404/>
      ) : (
        <Post {...props}/>
      )}
    </>
  )
}

PostPage.propTypes = {
  post: PropTypes.object,
}

PostPage.getInitialProps = async () => {
  const post = []

  return { post }
}

export default PostPage
