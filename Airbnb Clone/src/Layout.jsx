import React from 'react'
import Navbar from './Components/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './Components/Footer'
import Slider from './Components/Slider'

const Layout = () => {
  return (
    <>
    <Navbar/>
    <Slider/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default Layout