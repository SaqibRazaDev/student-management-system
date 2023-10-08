import React from 'react'
import Link from 'next/link'
import NavBar from '../(components)/navbar/navBar'
import SideBar from '../(components)/sidebar/sideBar'
import { BiSolidBookAdd } from 'react-icons/bi';

export default function CourcesPage() {
  return (
    <>
      <div className="content flex flex-row">
        <SideBar />
        <div className="page-content px-8 md:px-12 lg:px-14 py-14 w-full">
          <NavBar />
          <div className="stu-bar py-14 flex justify-between">
            <h3 className="text-lg">Offered Cources:</h3>
            <button class="bg-white hover:bg-gray-200 text-gray-800 md:font-semibold py-2 px-2 border border-gray-400 rounded shadow flex">
              <BiSolidBookAdd size={20} /> <Link href="/addCourse"> <span className='hidden md:block mx-2'> Add Course </span> </Link>
            </button>
          </div>
        </div>
      </div>


    </>
  )
}
