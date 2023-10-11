import React from 'react'
import NavBar from '../(components)/navbar/navBar'
import SideBar from '../(components)/sidebar/sideBar'
import StudentForm from '../(components)/studentform/studentForm';

export default function AddStudent() {
    return (
        <>
            <div className="content flex flex-row">
                <SideBar />
                <div className="page-content px-8 md:px-12 lg:px-14 py-14 w-full">
                    <NavBar />
                    <div className="stu-form py-14">
                        <h1 className="text-lg md:text-xl lg:text-2xl font-semibold text-center">Student enrollment form.</h1>
                        <p className="text-slate-400 text-xs md:text-sm lg:text-lg font-light py-4 text-center max-w-3xl mx-auto">
                            Familiarize yourself with the form and understand the information it requires. This will help you provide accurate and complete responses.
                        </p>
                        <StudentForm />
                    </div>
                </div>
            </div>


        </>
    )
}
