import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import styles from './PostForm.module.scss'
import FormInput from './FormInput'
import { Button } from '../ui-components/Button'
import BaseForm from './BaseForm'

const validateRequire = (fieldName, value) => {
  let errorMessage = ''
  if(!value) {
    errorMessage = `${fieldName} field is required`
  }
  return errorMessage
}

const validateEmail = (fieldName, str) => {
  let errorMessage = validateRequire(fieldName, str)
  if(!errorMessage) {
    if(!str.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
      errorMessage = 'not a valid e-mail address'
    }
  }
  return errorMessage
}

const SubmitButton = (props) => {
  const onSubmit = props.onSubmit

  return (
    <Button
      {...props}
      classes={{
        root: styles['submit-button'],
      }}
      onClick={(e) => {
        e.preventDefault()
        onSubmit()
      }}
    />
  )
}
SubmitButton.propTypes = {
  onSubmit: PropTypes.func,
}

const baseInitialPostFormData = {
  'name': '',
  'email': '',
  'job-title': '',
  'company-name': '',
  'uid': '',
}

const initialErrorMessages = {
  'name': '',
  'email': '',
  'job-title': '',
  'company-name': '',
}

const PostFormInput = (props) => {
  return (
    <FormInput
      classes={{
        root: styles['form-input-root'],
        label: styles['form-input-label'],
        input: styles['form-input-input'],
        errorMessage: styles['form-input-error-message'],
      }}
      {...props}
    />
  )
}

const PostForm = (props) => {
  const uid = props.uid
  const title = props.title
  const [formData, setFormData] = useState({
    ...baseInitialPostFormData,
    uid,
  })
  const [errorMessages, setErrorMessages] = useState(initialErrorMessages)

  useEffect(() => {
    setErrorMessages(() => {
      return {
        'name': validateRequire('Name', formData.name),
        'email': validateEmail('Mail', formData.email),
        'job-title': validateRequire('Job Title', formData['job-title']),
        'company-name': validateRequire('Company Name', formData['company-name']),
      }
    })
  }, [formData])

  return (
    <BaseForm
      title={title}
      validate={() => {
        return Object.values(errorMessages).every((value) => {
          return value === ''
        })
      }}
      onSubmit={async () => {
        const query = Object.keys(formData).reduce((str, key, index) => {
          str += `${(index > 0) ? '&' : ''}${encodeURIComponent(key)}=${encodeURIComponent(formData[key])}`
          return str
        }, '')

        await new Promise((resolve) => {
          setTimeout(() => {
            resolve()
          }, 1000)
        })
        console.log(query)
      }}
    >
      <PostFormInput
        label="Name"
        value={formData.name}
        errorMessage={errorMessages.name}
        placeholder="Type Your Name"
        onChange={(e) => {
          const value = e.target.value
          setFormData((prev) => {
            return {
              ...prev,
              name: value,
            }
          })
        }}
      />
      <PostFormInput
        label="Mail"
        value={formData.email}
        errorMessage={errorMessages.email}
        placeholder="Type Your Mail Address"
        onChange={(e) => {
          const value = e.target.value

          setFormData((prev) => {
            return {
              ...prev,
              email: value,
            }
          })
        }}
      />
      <PostFormInput
        label="Job Title"
        value={formData['job-title']}
        errorMessage={errorMessages['job-title']}
        placeholder="Type Your Job Title"
        onChange={(e) => {
          const value = e.target.value

          setFormData((prev) => {
            return {
              ...prev,
              'job-title': value,
            }
          })
        }}
      />
      <PostFormInput
        label="Company Name"
        value={formData['company-name']}
        errorMessage={errorMessages['company-name']}
        placeholder="Type Your Company Name"
        onChange={(e) => {
          const value = e.target.value

          setFormData((prev) => {
            return {
              ...prev,
              'company-name': value,
            }
          })
        }}
      />
    </BaseForm>
  )
}

PostForm.propTypes = {
  title: PropTypes.string,
  uid: PropTypes.string,
}
export default PostForm
