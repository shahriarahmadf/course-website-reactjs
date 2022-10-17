import React, { useEffect, useState } from 'react';
import Course from '../Course/Course';
import './Courses.css'

const Courses = () => {

    // load fake data of courses
    const [courses, setCourses] = useState([]);

    // 
    useEffect( () => {
        fetch('coursesData.json')
        .then(res => res.json())
        .then(data => setCourses(data))
    } , [])


    return (
        <div className='courses-page'>
            <div className="header">
                <h1>Falcon Football Academy</h1>
            </div>

            <div className="courses-container">
                {
                    courses.map(course => <Course 
                        key={course.id}
                        course = {course}
                        ></Course>)
                }
            </div>
        </div>
    );
};

export default Courses;