import React from 'react'
import NavBar from '../(components)/navbar/navBar'
import SideBar from '../(components)/sidebar/sideBar'

export default function AddCource() {
  return (
    <>
    <div className="content flex flex-row">
        <SideBar />
        <div className="page-content px-8 md:px-12 lg:px-14 py-14 w-full">
            <NavBar />
            add cource form
        </div>
    </div>


</>
  )
}
