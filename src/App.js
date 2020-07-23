import React from 'react';
import './App.css';
import CourseList from './CatalogComponents/CourseList';
import { CourseProvider } from './CatalogComponents/CourseCatalog';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import CourseSelectionForm from './Form Components/CourseSelectionForm';

function App() {
	return (
		<div className="App">
			<AppBar title="Enter your selected courses" position="static">
				<Toolbar>
					<Typography variant="h6">Course Selection</Typography>
				</Toolbar>
			</AppBar>

			<CourseProvider>
				<CourseSelectionForm className="CourseSelection" />
				<CourseList className="CourseList" />
			</CourseProvider>
		</div>
	);
}

export default App;
