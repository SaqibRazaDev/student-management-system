"use client"
import React from 'react'
import Link from 'next/link'
import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../../config/firebase.js';

export default function Stats() {

  const [studentCount, setStudentCount] = useState(0);

  useEffect(() => {
    // Fetch the total number of documents in the "EnrolledStudents" collection
    const fetchDocumentCount = async () => {
      const collectionRef = collection(db, 'EnrolledStudents');
      const querySnapshot = await getDocs(collectionRef);
      setStudentCount(querySnapshot.size);
    };

    fetchDocumentCount();
  }, []);




  return (
    <>




      <div className="py-14 flex flex-col md:flex-row md:justify-between w-full space-y-6 md:space-y-0 text-center">

        <Link href="/students" className='bg-white hover:bg-gray-200 text-gray-800 md:font-semibold py-2 px-6 border border-gray-400 rounded shadow max-w-xs flex items-center '>
          Total Students:  {studentCount}
        </Link>

        <Link href="/cources" className='bg-white hover:bg-gray-200 text-gray-800 md:font-semibold py-2 px-6 border border-gray-400 rounded shadow max-w-xs flex items-center'>
          Offered Programs:  {studentCount}
        </Link>

        <Link href="/students/addStudent" className='bg-white hover:bg-gray-200 text-gray-800 md:font-semibold py-2 px-6 border border-gray-400 rounded shadow max-w-xs flex items-center'>
          Open Programs:  {studentCount}
        </Link>
      </div>



    </>
  )
}
