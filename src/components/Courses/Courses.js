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

    // declaring break time and exercise time
    const [breakTime, setBreakTime] = useState(0);
    const [exerciseTime, setExerciseTime] = useState(0);

    // break time button event handler
    let addBreakTime = (t) => setBreakTime(t);
    
    // add course to list button function
    const addToList = (id) => {
        //console.log(id);
        console.log(courses.map(course => {
            if(course.id == id){
                setExerciseTime(course.time);
            }
        }))
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

                <h3>Profile Information</h3>
                <div className="profile-info">
                    <div>
                        Weight:<b> 75</b> kg
                    </div>
                    <div>
                        Height: <b>5'11''</b>
                    </div>
                    <div>
                        Age: <b>25</ b> years 
                    </div>
                </div>    

                <h3>Add A Break</h3>
                <div className="add-a-break">
                    <button onClick={() => addBreakTime(10)} className='break-btn'>
                        15 min
                    </button>
                    <button onClick={() =>addBreakTime(20)} className='break-btn'>
                        30 min
                    </button>
                    <button onClick={() =>addBreakTime(30)} className='break-btn'>
                        45 min
                    </button>
                    <button onClick={() =>addBreakTime(60)} className='break-btn'>
                        60 min
                    </button>
                </div>

                <h3>Course Practice Session Details</h3>              
                <div className="details">
                    <div className="time">
                        <b>Exercise Time: <i>{exerciseTime} minutes</i></b>
                    </div>
                    <div className="break-time">
                        <b>Break Time: <i>{breakTime} minutes</i></b>
                    </div>
                </div>
                
                <div className="complete-button">
                    <h2>Course Session Completed</h2>
                </div>

            </div>
        </div>
    );
};

export default Courses;
