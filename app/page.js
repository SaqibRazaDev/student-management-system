import React from 'react'
import SideBar from './(components)/sidebar/sideBar'
import NavBar from './(components)/navbar/navBar'
import Stats from './(components)/stats/stats'

export default function Home() {
  return (
    <>
      <div className="content flex flex-row">
        <SideBar />
        <div className="page-content px-8 md:px-12 lg:px-14 py-14 w-full">
          <NavBar />
          <Stats />
        </div>
      </div>


    </>
  )
}
