import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from './nav-bar'

const Layout = () => (
  <>
    <NavBar />
    <Outlet />
  </>
)

export default Layout
