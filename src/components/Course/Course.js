import React from 'react';
import './Course.css'

const Course = (props) => {
    
    const {id, name, time, img, instructor} = props.course;
    return (
        <div className='course'>
            <img src={img} alt="" />
            <h3>{name}</h3>
            <p>Instructor: {instructor}</p>
            <p>Time required: {time} hours</p>
            <button className='add-course-btn'>Add to List</button>
        </div>
    );
};

export default Course;