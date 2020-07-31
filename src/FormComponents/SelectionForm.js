import React, { Component } from 'react';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Autocomplete from '@material-ui/lab/Autocomplete';

const options = [
	' Animal Care Management: ANSC-1003',
	' Animal Health Skills: ANSC-1010',
	' Introduction to Animal Science: ANSC-1400',
	' Small Animal Behavior: ANSC-2100',
	' College Algebra: MATH-1200.01',
	' College Algebra: MATH-1200.02',
	' Chemistry: CHEM-1001',
	' Introduction to Psychology: PSYC-1001.01',
	' Introduction to Psychology: PSYC-1001.02'
];

export class SelectionForm extends Component {
	constructor(props) {
		super(props);
		this.submitForm = this.submitForm.bind(this);
		this.state = {
			status: '',
			courses: [],
			altcourses: []
		};
		this.onCoursesChange = this.onCoursesChange.bind(this);
		this.onAltcoursesChange = this.onAltcoursesChange.bind(this);
	}
	onCoursesChange = (event, values) => {
		this.setState({
			courses: values
		});
		console.log(values);
	};
	onAltcoursesChange = (event, values) => {
		this.setState({
			altcourses: values
		});
		console.log(values);
	};

	render() {
		const { status } = this.state;
		const firstOptions = options.filter((course) => !this.state.altcourses.includes(course));
		const secondOptions = options.filter((course) => !this.state.courses.includes(course));
		const coursesList = this.state.courses.map((item) => <li key={item}>{item}</li>);
		const altcoursesList = this.state.altcourses.map((item) => <li key={item}>{item}</li>);

		return (
			<MuiThemeProvider>
				<div style={{ width: 600 }}>
					<Autocomplete
						name="autocourses"
						multiple
						options={firstOptions}
						defaultValue={[]}
						onChange={this.onCoursesChange}
						renderInput={(params) => (
							<TextField
								{...params}
								name="coursestext"
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
						name="autoaltcourses"
						multiple
						options={secondOptions}
						onChange={this.onAltcoursesChange}
						renderInput={(params) => (
							<TextField
								{...params}
								name="altcoursestext"
								variant="outlined"
								label="Select your courses"
								placeholder="Select 2"
								fullWidth
							/>
						)}
					/>
					<form onSubmit={this.submitForm} action="https://formspree.io/mlepzrlb" method="POST">
						<div name="coursesContainer" values={console.log(coursesList)}>
							<h3>Your First Choice Selection:</h3>
							<ol name="coursesList">{coursesList}</ol>
						</div>
						<div name="coursesContainer">
							<input type="li" value={coursesList} />
						</div>
						<div name="altcoursesContainer" values={console.log({ altcoursesList })}>
							<h3>Your Second Choice Selection:</h3>
							<ol name="altcoursesList">{altcoursesList}</ol>
						</div>
						<div name="altcoursesContainer">
							<input type="li" value={altcoursesList} />
						</div>
						{status === 'SUCCESS' ? (
							<p>Thanks!</p>
						) : (
							<Button color="primary" variant="contained" type="submit">
								Submit!
							</Button>
						)}
						{status === 'ERROR' && <p>Ooops! There was an error.</p>}
					</form>
				</div>
			</MuiThemeProvider>
		);
	}
	submitForm(ev) {
		ev.preventDefault();
		const form = ev.target;
		const data = new FormData(form);
		const xhr = new XMLHttpRequest();
		xhr.open(form.method, form.action);
		xhr.setRequestHeader('Accept', 'application/json');
		xhr.onreadystatechange = () => {
			if (xhr.readyState !== XMLHttpRequest.DONE) return;
			if (xhr.status === 200) {
				form.reset();
				this.setState({ status: 'SUCCESS' });
			} else {
				this.setState({ status: 'ERROR' });
			}
		};
		xhr.send(data);
	}
}
export default SelectionForm;
