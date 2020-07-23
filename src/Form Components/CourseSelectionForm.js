import React, { Component } from 'react';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Autocomplete from '@material-ui/lab/Autocomplete';

const options = [
	' Animal Care Management: ANSC-1003 \n',
	' Animal Health Skills: ANSC-1010 \n',
	' Introduction to Animal Science: ANSC-1400',
	' Small Animal Behavior: ANSC-2100',
	' College Algebra: MATH-1200.01',
	' College Algebra: MATH-1200.02',
	' Chemistry: CHEM-1001',
	' Introduction to Psychology: PSYC-1001.01',
	' Introduction to Psychology: PSYC-1001.02'
];

export class CourseSelectionForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			step: 1,
			courses: [],
			altcourses: []
		};
		this.onCoursesChange = this.onCoursesChange.bind(this);
		this.onAltcoursesChange = this.onAltcoursesChange.bind(this);
		this.handlesubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(event) {
		alert('Your Course Selections have been submitted!');
		event.preventDefault();
	}

	onCoursesChange = (event, values) => {
		this.setState(
			{
				courses: values
			},
			() => {
				console.log(this.state.courses);
			}
		);
	};
	onAltcoursesChange = (event, values) => {
		this.setState(
			{
				altcourses: values
			},
			() => {
				console.log(this.state.altcourses);
			}
		);
	};
	render() {
		return (
			<MuiThemeProvider>
				<div style={{ width: 600 }}>
					<Autocomplete
						multiple
						options={options}
						defaultValue={[]}
						onChange={this.onCoursesChange}
						renderInput={(params) => (
							<TextField
								{...params}
								variant="outlined"
								label="Select your courses"
								placeholder="First choice:Select 4"
								fullWidth
								margin="normal"
							/>
						)}
					/>
					<br />
					<Autocomplete
						multiple
						options={options}
						onChange={this.onAltcoursesChange}
						renderInput={(params) => (
							<TextField
								{...params}
								variant="outlined"
								label="Select your courses"
								placeholder="Select 2"
								fullWidth
							/>
						)}
					/>
					<br />

					<div>
						<h3>Your First Choice Selection:</h3>
						<ol>{this.state.courses.map((item) => <li key={item}>{item}</li>)}</ol>
					</div>
					<div>
						<h3>Your Second Choice Selection:</h3>
						<ol>{this.state.altcourses.map((item) => <li key={item}>{item}</li>)}</ol>
					</div>
				</div>
				<Button color="primary" variant="contained" onClick={this.handleSubmit}>
					Submit!
				</Button>
			</MuiThemeProvider>
		);
	}
}
export default CourseSelectionForm;
