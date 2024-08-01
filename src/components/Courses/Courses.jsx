import React, { useEffect, useState } from 'react';
import EachCourse from '../EachCourse/EachCourse';
import './Courses.css'

const Course = ({ addingCourses }) => {
    const [course, setCourse] = useState([]);
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/jasimbdpro/tech-course-360/main/src/data/courselmirigsdotwet9ei9489ewutbeji.json')
            .then(response => response.json())
            .then(data => setCourse(data))
            .catch(error => alert('data is not loaded'))
    }, []);
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