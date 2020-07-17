import React from 'react'
import styles from './FormInput.module.scss'
import PropTypes from 'prop-types'

const FormInput = (props) => {
  const label = props.label
  const value = props.value
  const onChange = props.onChange
  const placeholder = props.placeholder
  const errorMessage = props.errorMessage
  const classes = {
    root: styles['default'],
    label: styles['default'],
    input: styles['default'],
    errorMessage: styles['default'],
    ...props.classes,
  }

  return (
    <label className={`${styles['root']} ${classes.root}`}>
      <span className={`${styles['label']} ${classes.label}`}>{label}</span>
      <input
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`${styles['input']} ${classes.input}`}
      />
      <span className={`${styles['error-message']} ${classes.errorMessage}`}>
        <span className={styles['text']}>{errorMessage}</span>
      </span>
    </label>
  )
}

FormInput.propTypes = {
  label: PropTypes.string,
  value: PropTypes.any,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  errorMessage: PropTypes.string,
  classes: PropTypes.object,
}
export default FormInput
