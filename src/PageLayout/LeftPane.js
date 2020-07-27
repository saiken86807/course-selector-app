import React, { Component } from 'react';
import { CourseProvider } from '../CatalogComponents/CourseCatalog';
import CourseList from '../CatalogComponents/CourseList';
export class LeftPane extends Component {
	render() {
		return (
			<CourseProvider>
				<h2> Available Courses:</h2>
				<CourseList className="CourseList" />
			</CourseProvider>
		);
	}
}

export default LeftPane;
