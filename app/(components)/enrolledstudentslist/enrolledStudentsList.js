"use client"
import React, { useState, useEffect } from 'react';
import { db } from "../../../config/firebase.js";
import { collection, deleteDoc, doc, getDocs, updateDoc } from "firebase/firestore";
import { RiDeleteBin6Line } from 'react-icons/ri';

export default function EnrolledStudentsList() {
    const [students, setStudents] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchDocs = async () => {
        try {
            const collectionName = collection(db, "EnrolledStudents");
            const docs = await getDocs(collectionName);
            const studentsData = [];

            docs.forEach((doc) => {
                studentsData.push({
                    id: doc.id,
                    ...doc.data()
                });
            });

            setStudents(studentsData);
        } catch (error) {
            console.error("Error fetching students:", error);
        }
    };

    useEffect(() => {
        fetchDocs();
    }, []);

    const onDeletHandler = async (id, serialNumber) => {
        const docRef = doc(db, "EnrolledStudents", id);

        try {
            setLoading(true);
            await deleteDoc(docRef);
            
            // Update the serial numbers of remaining students
            const updatedStudents = students.map((student) => {
                if (student.id === id) {
                    return null;
                } else if (student.serialNumber > serialNumber) {
                    return {
                        ...student,
                        serialNumber: student.serialNumber - 1,
                    };
                } else {
                    return student;
                }
            }).filter(Boolean);

            setStudents(updatedStudents);

            // Update serial numbers in Firestore
            for (const updatedStudent of updatedStudents) {
                const { id: studentId, serialNumber: newSerialNumber } = updatedStudent;
                const studentDocRef = doc(db, "EnrolledStudents", studentId);
                await updateDoc(studentDocRef, { serialNumber: newSerialNumber });
            }

            setLoading(false);
        } catch (error) {
            console.error("Error deleting student:", error);
        }
    };

    return (
        <div className="stu-data">
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-2 py-3 pl-6">
                                Sr. No
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Student Name
                            </th>
                            <th scope="col" className="px-2 py-3">
                                Student Email
                            </th>
                            <th scope="col" className="px-2 py-3">
                                Student Course
                            </th>
                            <th scope="col" className="px-2 py-3">
                                Student Contact
                            </th>
                            <th scope="col" className="px-2 py-3">
                                Delete
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {students.map((student, index) => (
                            <tr key={student.id} className="bg-white border-b">
                                <td className="px-2 pl-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {index + 1}
                                </td>
                                <td className="px-2 py-4">{student.StudentName}</td>
                                <td className="px-2 py-4">{student.Email}</td>
                                <td className="px-2 py-4">{student.CourseName}</td>
                                <td className="px-2 py-4">{student.Contact}</td>
                                <td className="px-2 py-4">
                                    <button onClick={() => onDeletHandler(student.id, index)} className="mx-auto">
                                        <RiDeleteBin6Line />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
