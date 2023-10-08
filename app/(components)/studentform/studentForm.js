"use client"
import React from 'react'
import Link from 'next/link'
import { BsPersonFillAdd } from 'react-icons/bs';
import { useState } from "react"
import {addDoc, collection} from "firebase/firestore"
import { db } from "../../../config/firebase.js"



export default function StudentForm() {

    const [studentName, setStudentName] = useState("");
    const [studentId, setStudentId] = useState("");
    const [courseName, setCourseName] = useState("");
    const [email, setEmail] = useState("")
    const [contact, setContact] = useState("")

    const onSubmitHanlder = async () => {
        let student = {
            StudentName: studentName,
            StudentId : studentId,
            CourseName: courseName,
            Email: email,
            Contact: contact,
        }
        try {
            const collectionName = collection(db, "EnrolledStudents")

            await addDoc(collectionName, student)

        } catch (e) {
            return alert("error")
        }

    }




    return (
        <>
            <div className="form">
                <span className="mt-4">Student Name:</span>
                <input onChange={(e) => setStudentName(e.target.value)} type="text" placeholder='Enter student name...' className='h-8 md:mx-4  px-2 border border-1 rounded-md w-full md:w-1/4' />
                <br /><br />
                <span className="mt-4">Student ID:</span>
                <input onChange={(e) => setStudentId(e.target.value)} type="text" placeholder='Enter student ID.' className='h-8 md:mx-4  px-2 border border-1 rounded-md w-full md:w-1/4' />
                <br /><br />
                <span className="mt-4">Course Name:</span>
                <input onChange={(e) => setCourseName(e.target.value)} type="text" placeholder='Enter course name.' className='h-8 md:mx-4  px-2 border border-1 rounded-md w-full md:w-1/4' />
                <br /><br />
                <span className="mt-4"> Email Address:</span>
                <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder='Enter student email.' className='h-8 px-2  md:mx-4 border border-1 rounded-md w-full md:w-1/4' />
                <br /><br />
                <span className="mt-4">Contact: </span>
                <input onChange={(e) => setContact(e.target.value)} type="text" placeholder='Enter student contact number.' className='h-8 px-2 md:mx-4  border border-1 rounded-md w-full md:w-1/4' />
                <br /><br />
                <button onClick={onSubmitHanlder} class="bg-white hover:bg-gray-100 text-gray-800 md:font-semibold py-2 px-2 mx-auto border border-gray-400 rounded shadow flex">
                    <BsPersonFillAdd size={20} /> <Link href="/addStudent"> <span className=' mx-2'>Enroll Student </span> </Link>
                </button>
            </div>

        </>
    )
}
