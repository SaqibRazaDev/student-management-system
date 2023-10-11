"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import { BsPersonFillAdd } from 'react-icons/bs';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../../config/firebase.js';

export default function StudentForm() {
    const [studentName, setStudentName] = useState('');
    const [studentId, setStudentId] = useState('');
    const [courseName, setCourseName] = useState('');
    const [email, setEmail] = useState('');
    const [contact, setContact] = useState('');
    const [showAlert, setShowAlert] = useState(false);
    const [showEmptyFieldsAlert, setShowEmptyFieldsAlert] = useState(false);

    const onSubmitHandler = async () => {
        if (
            studentName.trim() === '' ||
            studentId.trim() === '' ||
            courseName.trim() === '' ||
            email.trim() === '' ||
            contact.trim() === ''
        ) {
            setShowEmptyFieldsAlert(true);
            setTimeout(() => {
                setShowEmptyFieldsAlert(false);
            }, 2000);
            return;
        }

        let student = {
            StudentName: studentName,
            StudentId: studentId,
            CourseName: courseName,
            Email: email,
            Contact: contact,
        };

        try {
            const collectionName = collection(db, 'EnrolledStudents');

            await addDoc(collectionName, student);

            // Clear the input fields after successful submission
            setStudentName('');
            setStudentId('');
            setCourseName('');
            setEmail('');
            setContact('');

            setShowAlert(true);
            setTimeout(() => {
                setShowAlert(false);
            }, 2000);
        } catch (e) {
            return alert('error');
        }
    };

    return (
        <>
            <div className="form">

                <span className="mt-4">Student Name:</span>
                <input
                    onChange={(e) => setStudentName(e.target.value)}
                    value={studentName}
                    type="text"
                    placeholder="John Doe"
                    className="h-8 md:mx-4  px-2 border border-1 rounded-md w-full md:w-1/4"
                />
                <br />
                <br />

                <span className="mt-4">Student ID:</span>
                <input
                    onChange={(e) => setStudentId(e.target.value)}
                    value={studentId}
                    type="text"
                    placeholder="Student ID"
                    className="h-8 md:mx-4  px-2 border border-1 rounded-md w-full md:w-1/4"
                />
                <br />
                <br />

                <span className="mt-4">Course Name:</span>
                <input
                    onChange={(e) => setCourseName(e.target.value)}
                    value={courseName}
                    type="text"
                    placeholder="Course name"
                    className="h-8 md:mx-4  px-2 border border-1 rounded-md w-full md:w-1/4"
                />
                <br />
                <br />

                <span className="mt-4">Student Email:</span>
                <input
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    type="text"
                    placeholder="example@xyz.com"
                    className="h-8 md:mx-4  px-2 border border-1 rounded-md w-full md:w-1/4"
                />
                <br />
                <br />

                <span className="mt-4">Student Contact:</span>
                <input
                    onChange={(e) => setContact(e.target.value)}
                    value={contact}
                    type="text"
                    placeholder="03xxxxxxxxx"
                    className="h-8 md:mx-4  px-2 border border-1 rounded-md w-full md:w-1/4"
                />
                <br />
                <br />

                {/* Other input fields go here */}
                <Link
                    href={""}
                    onClick={onSubmitHandler}
                    className="bg-white hover:bg-gray-100 text-gray-800 md:font-semibold py-2 px-2 mx-auto border border-gray-400 max-w-xs rounded shadow flex justify-center"
                >
                    <BsPersonFillAdd size={20} />{' '}
                    <span className="mx-2">Enroll Now</span>{' '}

                </Link>

            </div>

            {showAlert && (
                <div className="alert fixed top-10 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-4 py-2 rounded shadow">
                    Form submitted successfully, your response collected.
                </div>
            )}

            {showEmptyFieldsAlert && (
                <div className="alert fixed top-10 left-1/2 transform -translate-x-1/2 bg-red-500 text-white px-4 py-2 rounded shadow">
                    Please fill all fields correctly. All fields are required.
                </div>
            )}
        </>
    );
}

