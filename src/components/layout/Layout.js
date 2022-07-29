import React from 'react'
import Header from '../../container/header/Header'

export default function Layout({children}) {
  return (
    <div>
      <Header />
      {children}
    </div>
  )
}
