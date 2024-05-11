import React from 'react';
import Course from '../Courses/Courses';
import Cart from '../Cart/Cart';
import './BodyContent.css'

const BodyContent = () => {
    return (
        <div className='BodyContent'>
            <Course></Course>
            <Cart></Cart>
        </div>
    );
};

export default BodyContent;