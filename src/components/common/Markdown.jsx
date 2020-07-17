import PropTypes from 'prop-types'
import MarkdownToJsx from 'markdown-to-jsx'
import css from './Markdown.module.scss'
const MyList = (props) => {
  return (
    <li>
      <div>{props.children}</div>
    </li>
  )
}
const Markdown = (props) => {
  const context = props.context.replace('\\*', '&ast;')
  return (
    <div className={`${css['content']}`}>
      <MarkdownToJsx
        options={{
          namedCodesToUnicode: {
            ast: '\u002a',
          },
          overrides: {
            li: MyList,
          },
        }}
      >{context}</MarkdownToJsx>
    </div>
  )
}
Markdown.propTypes = {
  context: PropTypes.string,
}
export default Markdown
