import React from 'react'
import { Outlet } from 'react-router-dom'
import HeaderPart from '../header/HeaderPart'
import Footer from '../footer/Footer'

const CommonLayout = () => {
  return (
   <>
     <HeaderPart />
        <Outlet />
     <Footer />
   </>
  )
}

export default CommonLayout
