import React, { Component } from 'react';
import { CourseProvider } from '../CatalogComponents/CourseCatalog';
import CourseList from '../CatalogComponents/CourseList';
export class LeftPane extends Component {
	render() {
		return (
			<div className="CourseList">
				<CourseProvider>
					<h2> Available Courses:</h2>
					<CourseList />
				</CourseProvider>
			</div>
		);
	}
}

export default LeftPane;
