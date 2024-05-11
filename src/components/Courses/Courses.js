import React, { useEffect, useState } from 'react';
import EachCourse from '../EachCourse/EachCourse';
import Cart from '../Cart/Cart';
import './Courses.css'

const Course = () => {
    const [course, setCourse] = useState([]);
    const [cartedCourse, setCartedCourse] = useState([]);
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/jasimbdpro/tech-course-360/main/src/data/courselmirigsdotwet9ei9489ewutbeji.json')
            .then(response => response.json())
            .then(data => setCourse(data))
            .catch(error => alert('data is not loaded'))
    }, []);
    const addingCourses = (i) => {
        const newCourse = [cartedCourse, i]
        setCartedCourse(newCourse);
    }


    return (
        <div className='Courses'>

            <div>
                {
                    course.map(i => <EachCourse course={i} key={i.id} addingCourses={addingCourses}></EachCourse>)
                }
            </div>
        </div>
    );
};

export default Course;