import React, { useEffect, useState } from 'react';
import Course from '../Course/Course';
import './Courses.css';
import toast from 'react-simple-toasts';

const Courses = () => {
    
    // load fake data of courses
    const [courses, setCourses] = useState([]);

    // 
    useEffect( () => {
        fetch('coursesData.json')
        .then(res => res.json())
        .then(data => setCourses(data))
    } , [])

    
    // check local storage
    const storedBreakTime = localStorage.getItem('break time');
    const storedExerciseTime = localStorage.getItem('exercise time');
    let storedBreak = 0;
    if (storedBreakTime){
        storedBreak = JSON.parse(storedBreakTime);
    }
    let exerciseBreak = 0;
    if (storedExerciseTime){
        exerciseBreak = JSON.parse(storedExerciseTime);
    }

    // declaring break time and exercise time
    const [breakTime, setBreakTime] = useState(storedBreak);
    const [exerciseTime, setExerciseTime] = useState(exerciseBreak);


    // break time button event handler
    let addBreakTime = (t) => {
        localStorage.setItem('break time',t);    
        setBreakTime(t);
    };
    
    // add course to list button function
    const addToList = (id) => {
        console.log('pressed');
        courses.map(course => {
        if(course.id == id){
            console.log('here');
            setExerciseTime(exerciseTime+course.time);
            localStorage.setItem('exercise time', exerciseTime+course.time);
            console.log('there');
        }
        })

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
                        10 min
                    </button>
                    <button onClick={() =>addBreakTime(20)} className='break-btn'>
                        20 min
                    </button>
                    <button onClick={() =>addBreakTime(30)} className='break-btn'>
                        30 min
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
                
                <div>
                    <button onClick={() => toast('Activity Completed, congratulations!')} className='complete-button'><h2>Course Session Completed</h2></button>
                </div>

            </div>
        </div>
    );
};

export default Courses;
