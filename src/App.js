import React from 'react';
import './App.css';
import CourseList from './CatalogComponents/CourseList';
import { CourseProvider } from './CatalogComponents/CourseCatalog';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import CourseSelectionForm from './Form Components/CourseSelectionForm';
import Layout from './PageLayout/Layout';

function App() {
	return (
		<div className="App">
			<Layout />
		</div>
	);
}

export default App;
