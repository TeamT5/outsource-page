import NextError from 'next/error'
import PropTypes from 'prop-types'
import ErrorLayout from '../components/layout/ErrorLayout'

const Error = (props) => {
  return (
    <ErrorLayout>
      <NextError statusCode={props.statusCode}/>
    </ErrorLayout>
  )
}

Error.propTypes = {
  statusCode: PropTypes.string,
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404

  return { statusCode }
}

export default Error
