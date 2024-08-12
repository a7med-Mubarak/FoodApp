import React from 'react'
import SideBar from '../sideBar/SideBar'
import NavBar from '../NavBar/NavBar'
import { Outlet } from 'react-router-dom'

export default function AuthLayout({loginData}) {
  return <>
    <div className="d-flex sidebar-continer">
        <div>
            <SideBar/>
        </div>
        <div className="w-100">
            <NavBar loginData={loginData}/>
            <Outlet/>
        </div>
    </div>
  
  </>
}
