
"use client"
import React from 'react'
import Link from 'next/link'
import NavBar from '../(components)/navbar/navBar'
import SideBar from '../(components)/sidebar/sideBar'
import { BsPersonFillAdd } from 'react-icons/bs';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { db } from "../../config/firebase.js"

import { useState, useEffect } from "react"
import { getDocs, collection, query, where, deleteDoc, doc, updateDoc } from "firebase/firestore"

export default function StudentsPage() {

    const [students, setStudents] = useState([])

    const [id, setId] = useState("")

    const [loading, setLoading] = useState(false)

    const fetchDocs = async () => {
        try {
            const collectionName = collection(db, "EnrolledStudents")
            // const queryRef = query(collectionName, where("email","==","naveed@gmail.com"))
            const docs = await getDocs(collectionName)
            const studentsData = []
            docs.forEach((doc) => {
                studentsData.push({
                    id: doc.id,
                    ...doc.data()
                })
            })
            setStudents(studentsData)
            console.log("students", studentsData)

        } catch (error) {
            console.log("error", error);
        }



    }
    useEffect(() => {
        fetchDocs()
    }, [])


    const onDeletHandler = async (id) => {
        const docRef = doc(db, "EnrolledStudents", id)

        try {
            setId(id)
            setLoading(true)

            await deleteDoc(docRef)


            const newStudents = students.filter((student) => id !== student.id)
            setLoading(false)
            setStudents(newStudents)

        } catch (error) {
            alert("error")
        }
    }

    // const onUpdateHandler = async (id) => {
    //     try {
    //         const docRef = doc(db, "abc", id)
    //         setId(id)
    //         setLoading(true)
    //         await updateDoc(docRef, {
    //             email: "naveed@techloset.com"
    //         })
    //         fetchDocs()
    //         setLoading(false)


    //     } catch (error) {

    //     }
    // }






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
                    <div className="stu-data">
                        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                    <tr>
                                        <th scope="col" class="px-2 py-3">
                                            Student ID
                                        </th>
                                        <th scope="col" class="px-6 py-3">
                                            Student Name
                                        </th>
                                        <th scope="col" class="px-2 py-3">
                                            Student Email
                                        </th>
                                        <th scope="col" class="px-2 py-3">
                                            Student Course
                                        </th>
                                        <th scope="col" class="px-2 py-3">
                                            Student Contact
                                        </th>
                                        <th scope="col" class="px-2 py-3">
                                            Delete
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        students.map((student) => {
                                            return (
                                                <>
                                                    <tr class="bg-white border-b  ">
                                                        <th scope="row" class="px-2 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                            {student.id}
                                                        </th>
                                                        <td class="px-2 py-4 ">
                                                            {student.StudentName}
                                                        </td>
                                                        <td class="px-2 py-4 ">
                                                            {student.Email}
                                                        </td>

                                                        <td class="px-2 py-4 ">
                                                            {student.CourseName}
                                                        </td>
                                                        <td class="px-2 py-4 ">
                                                            {student.Contact}
                                                        </td>
                                                        <td class="px-2 py-4 ">
                                                            <button onClick={() => onDeletHandler(student.id)} className='mx-auto'>
                                                                <RiDeleteBin6Line/>
                                                            </button>
                                                        </td>
                                                    </tr>
                                                </>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>


                    </div>
                </div>
            </div>


        </>
    )
}
