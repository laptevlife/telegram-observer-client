import React from 'react'
import s from './index.module.scss'

const Layout = ({ children }) => {
  return (
    <div className={s.layout}>{children}</div>
  )
}

export default Layout