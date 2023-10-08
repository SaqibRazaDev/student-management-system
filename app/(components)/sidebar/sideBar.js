import React from 'react'
import Link from 'next/link'
import { FaHome } from 'react-icons/fa';
import { PiStudentFill } from 'react-icons/pi';
import { ImBooks } from 'react-icons/im';
import { BsFillPersonCheckFill } from 'react-icons/bs';

export default function SideBar() {
    return (
        <>
            <div className="menu w-20 h-screen md:w-36 lg:w-44 flex flex-col items-center bg-slate-200 px-2 py-6">
                <h3 className="text-sm font-semibold md:text-lg md:font-bold my-8">
                    SMIT Fsd
                </h3>
                <div className="menu-links space-y-4">
                    <Link href="/" className='flex hover:text-slate-500 '> <FaHome size={20} /><span className='hidden md:block mx-2'>Home</span></Link>
                    <Link href="/students" className='flex hover:text-slate-500 '> <PiStudentFill size={20} /> <span className='hidden md:block mx-2'>Students</span></Link>
                    <Link href="/cources" className='flex hover:text-slate-500 '> <ImBooks size={20} /> <span className='hidden md:block mx-2'>Cources</span></Link>
                    <Link href="/attendance" className='flex hover:text-slate-500 '> <BsFillPersonCheckFill size={20} /> <span className='hidden md:block mx-2'>Attendance</span></Link>
                </div>


            </div>
        </>
    )
}
