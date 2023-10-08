import React from 'react'
import { MdAdminPanelSettings } from 'react-icons/md';


export default function NavBar() {
    return (
        <>

        <div className='w-full flex flex-row justify-between'>
            <input className='border bottom-1 rounded-full px-4 h-8 w-28 md:w-1/4' placeholder='Search...' type="text" />
            <div className="flex flex-row items-center">
            <MdAdminPanelSettings size={30} />
            <p className="font-semibold text-sm md:font-bold md:text-lg">
                Saqib Raza
            </p>
            </div>
        </div>

        </>
    )
}
