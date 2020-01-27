import React from 'react'
import Header from './Header/Header'

type LayoutProps = {
  children : React.ReactNode
}

function Layout({children}: LayoutProps) {
  return (
    <>
      <Header/>
      {children}
    </>
  )
}

export default Layout
