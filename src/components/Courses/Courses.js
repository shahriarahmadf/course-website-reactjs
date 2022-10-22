import React, { useEffect, useState } from 'react';
import Course from '../Course/Course';
import './Courses.css'
import Dashboard from '../Dashboard/Dashboard'

const Courses = () => {
    
    // load fake data of courses
    const [courses, setCourses] = useState([]);

    // 
    useEffect( () => {
        fetch('coursesData.json')
        .then(res => res.json())
        .then(data => setCourses(data))
    } , [])

    // 
    const [courseCart, setCourseCart] = useState([]);
    
    // add course to list button function
    const addToList = (id) => {
        console.log(id);

        const newCourseCart = [...courseCart, id]
        setCourseCart(newCourseCart);
    }

    return (
        <div className="main-page">
            <div className='courses-page'>
                <div className="header">
                    <h1>Falcon Football Academy</h1>
                </div>

                <div className="courses-container">
                    {
                        courses.map(course => <Course 
                            key={course.id}
                            course = {course}
                            addToList = {addToList}
                            ></Course>)
                    }
                </div>
            </div>

            <div className='dashboard'>
                <h2>dashboard</h2>
                    <h3>Registered Courses: {courseCart.length}</h3>
                    
            </div>
        </div>
    );
};

export default Courses;
