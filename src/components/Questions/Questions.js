import React from 'react';
import './Questions.css'

const Questions = () => {
    return (
        <div className='questions'>
            <h2>Important Questions and Answers</h2>

            <h3>1. How does ReactJS work?</h3>
            <p><b>Answer: </b>ReactJS is a library, not a framework that creates user interfaces in a predictable and efficient way using declarative code. The declarative codes are used to create components, which are essentially building blocks of the whole website. It helps to produce code smartly and use reuse components in the website.</p>
            <h3>2. What are the differences between props and state??</h3>
            <p><b>Answer: </b>Props are used to pass data from one component to another. On the other hand, state is used to update or change data within that particular component only but not passed to other components.</p>
            <h3>3. Why is useEffect used apart from the purpose of data loading?</h3>
            <p><b>Answer: </b>useEffect is used to manipulate something that is outside the scope of the code. Apart from data loading using API for example, it is also used in DOM manipulation and fix the width of the browser which is outside the control of the code.</p>
        </div>
    );
};

export default Questions;