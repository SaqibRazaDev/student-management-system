"use client"
import React from 'react'
import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../../config/firebase.js';

export default function Stats() {

  const [count, setCount] = useState(0);

  useEffect(() => {
    // Fetch the total number of documents in the "EnrolledStudents" collection
    const fetchDocumentCount = async () => {
      const collectionRef = collection(db, 'EnrolledStudents');
      const querySnapshot = await getDocs(collectionRef);
      setCount(querySnapshot.size);
    };

    fetchDocumentCount();
  }, []);




  return (
    <>




      <div className="py-14 flex flex-col md:flex-row md:justify-between w-full space-y-6 md:space-y-0">
        <div className="bg-slate-200 h-14 text-center flex items-center px-6 rounded-xl">Total Students:  {count}</div>
        <div className="bg-slate-200 h-14 text-center flex items-center px-6 rounded-xl">Offered Programs:{count}</div>
        <div className="bg-slate-200 h-14 text-center flex items-center px-6 rounded-xl">Open Programs:{count}</div>
      </div>



    </>
  )
}
