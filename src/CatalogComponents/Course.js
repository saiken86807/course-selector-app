import React from 'react';
import SelectedButton from './buttons';

const Course = ({ name, description, times, location }) => {
	return (
		<div className="courses">
			<h2>{name}</h2>
			<p>{description}</p>
			<h3>{times}</h3>
			<h3>{location}</h3>
			<SelectedButton />
		</div>
	);
};

export default Course;
