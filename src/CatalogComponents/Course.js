import React from 'react';
//import SelectedButton from './buttons';
import { Grid } from '@material-ui/core';

const Course = ({ name, description, times, location, limit }) => {
	return (
		<Grid container direction="row" justify="center" alignItems="center">
			<div className="courses">
				<h2>{name}</h2>
				<h4>{description}</h4>
				<h3>
					Location: {location}
					<br />Times: {times} <br /> Seats: {limit}
				</h3>
			</div>
		</Grid>
	);
};

export default Course;
