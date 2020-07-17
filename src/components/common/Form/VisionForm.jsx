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
  'uid': '',
  'first-name': '',
  'last-name': '',
  'company-name': '',
  'industry-category': '',
  'job-title': '',
  'phone-nmuber': '',
  'email': '',
  'contry': '',
  'your-inquiry': '',
}

const initialErrorMessages = {
  'uid': '',
  'first-name': '',
  'last-name': '',
  'company-name': '',
  'industry-category': '',
  'job-title': '',
  'phone-nmuber': '',
  'email': '',
  'contry': '',
  'your-inquiry': '',
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

const VisionForm = (props) => {
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
        'first-name': validateRequire('First Name', formData['first-name']),
        'last-name': validateRequire('Last Name', formData['last-name']),
        'company-name': validateRequire('Company Name', formData['company-name']),
        'industry-category': validateRequire('Industry Category', formData['industry-category']),
        'job-title': validateRequire('Job Title', formData['job-title']),
        'phone-nmuber': validateRequire('Phone Number', formData['phone-nmuber']),
        'email': validateEmail('Mail', formData['email']),
        'contry': validateRequire('Contry', formData['contry']),
        'your-inquiry': validateRequire('Your Inquiry', formData['your-inquiry']),
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
        label="First Name"
        value={formData['first-name']}
        errorMessage={errorMessages['first-name']}
        placeholder="Type Your First Name"
        onChange={(e) => {
          const value = e.target.value

          setFormData((prev) => {
            return {
              ...prev,
              'first-name': value,
            }
          })
        }}
      />
      <PostFormInput
        label="Last Name"
        value={formData['last-name']}
        errorMessage={errorMessages['last-name']}
        placeholder="Type Your Last Name"
        onChange={(e) => {
          const value = e.target.value

          setFormData((prev) => {
            return {
              ...prev,
              'last-name': value,
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
      <PostFormInput
        label="Industry Category"
        value={formData.email}
        errorMessage={errorMessages.email}
        placeholder="Type Your Industry Category"
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
        label="Phone Number"
        value={formData['phone-nmuber']}
        errorMessage={errorMessages['phone-nmuber']}
        placeholder="Type Your Phone Number"
        onChange={(e) => {
          const value = e.target.value

          setFormData((prev) => {
            return {
              ...prev,
              'phone-nmuber': value,
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
        label="Country"
        value={formData['contry']}
        errorMessage={errorMessages['contry']}
        placeholder="Type Your Country"
        onChange={(e) => {
          const value = e.target.value

          setFormData((prev) => {
            return {
              ...prev,
              contry: value,
            }
          })
        }}
      />
      <PostFormInput
        label="Your Inquiry"
        value={formData['your-inquiry']}
        errorMessage={errorMessages['your-inquiry']}
        placeholder="Type Your Inquiry"
        onChange={(e) => {
          const value = e.target.value

          setFormData((prev) => {
            return {
              ...prev,
              'your-inquiry': value,
            }
          })
        }}
      />
    </BaseForm>
  )
}

VisionForm.propTypes = {
  title: PropTypes.string,
  uid: PropTypes.string,
}
export default VisionForm
