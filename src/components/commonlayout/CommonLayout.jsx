import React from 'react'
import { Outlet } from 'react-router-dom'
import HeaderPart from '../header/HeaderPart'

const CommonLayout = () => {
  return (
   <>
     <HeaderPart />
        <Outlet />
     <div>Footer</div>
   </>
  )
}

export default CommonLayout
