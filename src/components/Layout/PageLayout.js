import React from 'react'
import s from './index.module.scss'

const PageLayout = ({ children }) => {
  return (
    <div className={s.pageLayout}>{children}</div>
  )
}

export default PageLayout