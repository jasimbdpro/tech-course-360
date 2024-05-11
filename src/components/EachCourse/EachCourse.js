import React from 'react';

const EachCourse = (props) => {
    const course = props.course;
    // const addingCourses = props.addingCourses;
    return (
        <div>
            <h4>{course.courseName}</h4>
            <p>{course.courseInstructor}</p>
            <p>{course.courseDetails}</p>
            <p>Price: {course.coursePrice}k</p>

        </div>
    );
};

export default EachCourse;