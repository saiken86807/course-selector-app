import React from 'react';
import CourseList from './CourseList';

const Course = ({name, description, times, location}) => {
    return (
        <div className="courses">
            <h2>{name}</h2>
            <p>{description}</p>
            <h3>{times}</h3>
            <h3>{location}</h3>
        </div>
    );
};

export default Course;