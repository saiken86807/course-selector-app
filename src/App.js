import React from 'react';
import './App.css';
import CourseList from './CatalogComponents/CourseList';
import { CourseProvider } from './CatalogComponents/CourseCatalog';
import Dropdown from './CatalogComponents/DropdownMenu';

function App() {
	return (
		<div className="App">
			<h1>React App</h1>
			<h2>Course Selector App</h2>
			<CourseProvider>
				<Dropdown />

				<CourseList />
			</CourseProvider>
		</div>
	);
}

export default App;
