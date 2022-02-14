import React from 'react'
import { NavBar } from '../Nav/NavBar'
import { Footer } from '../Footer/Footer'

export const Layout = ({children}) => {
  return (
    <div>
        <NavBar />
            {children}
        <Footer />
    </div>
  )
}

