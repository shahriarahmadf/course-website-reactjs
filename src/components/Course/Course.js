import React from 'react';
import './Course.css'
import {addToList} from './../Courses/Courses'

const Course = ({course, addToList}) => {
    const {id, name, time, img, instructor} = course;
    return (
        <div className='course'>
            <img src={img} alt="" />
            <h3>{name}</h3>
            <p>Instructor: {instructor}</p>
            <p>Time required: {time} minutes</p>
            <button onClick={() => addToList(id)} className='add-course-btn'>Add to List</button>
        </div>
    );
};

export default Course;