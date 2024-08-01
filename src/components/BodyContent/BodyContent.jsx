import React, { useState } from 'react';
import Course from '../Courses/Courses';
import Cart from '../Cart/Cart';
import './BodyContent.css'

const BodyContent = () => {
    const [cartedCourse, setCartedCourse] = useState([]);
    const addingCourses = (i) => {
        const newCourse = [...cartedCourse, i]
        setCartedCourse(newCourse);
    }
    return (
        <div className='BodyContent'>
            <Course addingCourses={addingCourses}></Course>
            <Cart cartedCourse={cartedCourse}></Cart>
        </div>
    );
};

export default BodyContent;