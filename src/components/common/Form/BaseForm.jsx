import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styles from './SonarForm.module.scss'
import { Button } from '../ui-components/Button'

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

const BaseForm = (props) => {
  const title = props.title
  const [formState, setFormState] = useState('normal')
  const radius = (formState === 'submit') ? 26.085 : 28
  const strokeWidth = (formState === 'submit') ? 7.83 : 4
  const onSubmit = props.onSubmit
  const validate = props.validate

  return (
    <div
      className={styles['form-container']}
    >
      {(() => {
        switch(formState) {
          case 'normal':
            return (
              <div className={styles['form-content']}>
                <div className={styles['form-title']}>
                  {title}
                </div>
                <hr className={styles['line']}/>
                <form className={styles['form']}>
                  <div className={styles['fields']}>
                    {props.children}
                  </div>
                  <SubmitButton
                    onSubmit={() => {
                      const validated = validate()
                      if(validated) {
                        setFormState('submit')
                        onSubmit()
                        setFormState('success')
                      }
                    }}
                  >
                    Send me full PDF
                  </SubmitButton>
                </form>
              </div>
            )
          case 'submit':
          case 'success':
            return (
              <div
                className={`
                  ${styles['submit']}
                  ${(formState === 'submit') ? styles['progressing'] : styles['success']}
                `}
              >
                <svg width="60px" height="60px" viewBox="0 0 60 60">
                  <g className={styles['circle-group']}>
                    <circle className={styles['bg']} cx="30" cy="30" r={radius} strokeWidth={strokeWidth}/>
                    <circle className={styles['progress']} cx="30" cy="30" r={radius} strokeWidth={strokeWidth}></circle>
                  </g>
                  <path d="M42.0025559,20.2660398 C42.9143517,19.2292208 44.4940161,19.1278695 45.5308352,20.0396653 C46.5225751,20.9118178 46.658424,22.3950259 45.8704004,23.4297283 L45.7572097,23.5679445 L28.3294753,43.3853274 C27.3533387,44.4953095 25.6454136,44.5133538 24.6436572,43.460678 L24.5269281,43.3292188 L14.806225,31.5948438 C13.9254171,30.531574 14.0733317,28.9555876 15.1366015,28.0747797 C16.1536422,27.2322678 17.6397846,27.3309689 18.5379345,28.2716692 L18.6566656,28.4051562 L26.508,37.883 L42.0025559,20.2660398 Z" id="Combined-Shape"></path>
                </svg>
                <div className={styles['text']}>
                  {(formState === 'submit') ? 'Please wait a second' : 'SUCCESS'}
                </div>
              </div>
            )
        }
      })()}
    </div>
  )
}

BaseForm.propTypes = {
  title: PropTypes.string,
  uid: PropTypes.string,
  onSubmit: PropTypes.func,
  validate: PropTypes.func,
}
export default BaseForm
