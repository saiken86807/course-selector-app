import React, { Component } from 'react';

import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Autocomplete from '@material-ui/lab/Autocomplete';

const options = [
	'Animal Care Management: ANSC-1003',
	'Animal Health Skills: ANSC-1010',
	'Introduction to Animal Science: ANSC-1400',
	'Small Animal Behavior: ANSC-2100',
	'College Algebra: MATH-1200.01',
	'College Algebra: MATH-1200.02',
	'Chemistry: CHEM-1001',
	'Introduction to Psychology: PSYC-1001.01',
	'Introduction to Psychology: PSYC-1001.02'
];

export class FirstChoiceSelection extends Component {
	constructor(props) {
		super(props);
		this.state = {
			courses: []
		};
		this.onCoursesChange = this.onCoursesChange.bind(this);
		//this.handlesubmit = this.handleSubmit.bind(this);
	}
	continue = (e) => {
		e.preventDefault();
		this.props.nextStep();
	};

	// handleSubmit(event) {
	// 	alert('Your Course Selections have been submitted!');
	// 	event.preventDefault();
	// }

	onCoursesChange = (event, values) => {
		this.setState(
			{
				courses: values
			},
			() => {
				// This will output an array of objects
				// given by Autocompelte options property.
				console.log(this.state.courses);
			}
		);
	};
	render() {
		return (
			<MuiThemeProvider>
				<div style={{ width: 600 }}>
					<Autocomplete
						name="courses"
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
					<Button color="primary" variant="contained" onClick={this.continue}>
						Continue
					</Button>

					<ul>{`Course Selected: ${this.state.courses}`}</ul>
				</div>
			</MuiThemeProvider>
		);
	}
}
export default FirstChoiceSelection;
