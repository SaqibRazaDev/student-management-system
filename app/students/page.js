import React from 'react'
import Link from 'next/link'
import NavBar from '../(components)/navbar/navBar'
import SideBar from '../(components)/sidebar/sideBar'
import { BsPersonFillAdd } from 'react-icons/bs';
import EnrolledStudentsList from '../(components)/enrolledstudentslist/enrolledStudentsList';

export default function StudentsPage() {







    return (
        <>
            <div className="content flex flex-row">
                <SideBar />
                <div className="page-content px-8 md:px-12 lg:px-14 py-14 w-full">
                    <NavBar />
                    <div className="stu-bar py-14 flex justify-between">
                        <h3 className="text-lg">Total Students:</h3>
                        <button class="bg-white hover:bg-gray-200 text-gray-800 md:font-semibold py-2 px-2 border border-gray-400 rounded shadow flex">
                            <BsPersonFillAdd size={20} /> <Link href="/addStudent"> <span className='hidden md:block mx-2'>Enroll Student </span> </Link>
                        </button>
                    </div>
                    <EnrolledStudentsList/>
                    
                </div>
            </div>


        </>
    )
}
