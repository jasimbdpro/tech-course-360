import React from 'react';
import './EachCourse.css'

const EachCourse = (props) => {
    const course = props.course;
    const addingCourses = props.addingCourses;
    return (
        <div className='EachCourse'>
            <img width='200px' height='200px' src={course.courseThumbnail} alt="" />
            <div>
                <h4>{course.courseName}</h4>
                <p>{course.courseInstructor}</p>
                <p>{course.courseDetails}</p>
                <p>Price: {course.coursePrice}</p>
                <button onClick={() => addingCourses(course)}>Add to Enroll</button>
            </div>

        </div>
    );
};

export default EachCourse;