import React from 'react';
import './Cart.css'

const Cart = ({ cartedCourse }) => {
    const cartedCoursePrice = cartedCourse.reduce((acc, i) => acc + i.coursePrice, 0);
    const deliverCharge = cartedCourse.length > 0 ? (cartedCoursePrice > 15000 ? "Free" : 50 + 'Tk') : 0;
    return (
        <div className='Cart'>
            <h3>Enroll Sidebar</h3>
            <p>Course Added: {cartedCourse.length} </p>
            <p>Course Price: {cartedCoursePrice}</p>
            <p>Delivey Charge:  {deliverCharge}</p>
        </div>
    );
};

export default Cart;