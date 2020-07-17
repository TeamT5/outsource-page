import React from 'react'
import styles from './index.module.scss'
import Arrow from './Arrow'
import PropTypes from 'prop-types'

const BasePagin = (props) => {
  return (
    <div className={styles['base-pagin']}>
      {props.children}
    </div>
  )
}

const LeftPage = (props) => {
  const onClick = props.onClick
  return (
    <div className={styles['left-page']}
      onClick={() => {
        onClick()
      }}
    >
      <BasePagin
      >
        <Arrow angle="left"/>
      </BasePagin>
    </div >
  )
}
LeftPage.propTypes = {
  onClick: PropTypes.func,
}

const RightPage = (props) => {
  const onClick = props.onClick
  return (
    <div className={styles['right-page']}
      onClick={() => {
        onClick()
      }}
    >
      <BasePagin>
        <Arrow angle="right"/>
      </BasePagin>
    </div >
  )
}
RightPage.propTypes = {
  onClick: PropTypes.func,
}

const Pagin = (props) => {
  const selected = props.selected || false
  const number = props.number
  const onClick = props.onClick
  return (
    <div
      className={`
        ${styles['pagin']}
        ${(selected) ? styles['selected'] : ''}
      `}
      onClick={() => {
        onClick(number)
      }}
    >
      <BasePagin>
        <div className={styles['text']}>
          <span>{number}</span>
        </div>
        <svg
          width="40px" height="40px" viewBox="0 0 40 40"
        >
          <circle cx="20" cy="20" r="20"></circle>
        </svg>
      </BasePagin>
    </div>
  )
}
Pagin.propTypes = {
  selected: PropTypes.bool,
  number: PropTypes.number,
  onClick: PropTypes.func,
}

const Paginator = (props) => {
  const totalPage = props.totalPage || 1
  const currentPage = props.currentPage || 1
  const onRightPageClick = props.onRightPageClick || (() => {})
  const onLeftPageClick = props.onLeftPageClick || (() => {})
  const onPageClick = props.onPageClick || (() => {})
  return (
    <div className={styles['paginator']}>
      <LeftPage
        onClick={onLeftPageClick}
      />
      {(() => {
        const pagings = []
        for (let i = 1; i <= totalPage; i++) {
          pagings.push((
            <Pagin
              selected={currentPage === i}
              key={i}
              number={i}
              onClick={onPageClick}
            />
          ))
        }
        return pagings
      })()}
      <RightPage
        onClick={onRightPageClick}
      />
    </div>
  )
}
Paginator.propTypes = {
  totalPage: PropTypes.number,
  currentPage: PropTypes.number,
  onRightPageClick: PropTypes.func,
  onLeftPageClick: PropTypes.func,
  onPageClick: PropTypes.func,
}

export default Paginator
