import React, { useContext } from 'react';
import Course from './Course';
import { CourseCatalog } from './CourseCatalog';

const CourseList = () => {
	const [ courses ] = useContext(CourseCatalog);
	return (
		<div>
			{courses.map((course) => (
				<Course
					key={course.id}
					name={course.name}
					description={course.description}
					times={course.times}
					location={course.location}
					limit={course.limit}
				/>
			))}
		</div>
	);
};

export default CourseList;
