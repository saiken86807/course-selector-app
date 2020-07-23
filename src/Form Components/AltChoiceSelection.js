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

export class AltChoiceSelection extends Component {
	constructor(props) {
		super(props);
		this.state = {
			altcourses: []
		};
		this.onAltcoursesChange = this.onAltcoursesChange.bind(this);
		//this.handlesubmit = this.handleSubmit.bind(this);
	}

	continue = (e) => {
		e.preventDefault();
		this.props.nextStep();
	};
	back = (e) => {
		e.preventDefault();
		this.props.prevStep();
	};

	onAltcoursesChange = (event, values) => {
		this.setState(
			{
				altcourses: values
			},
			() => {
				// This will output an array of objects
				// given by Autocompelte options property.
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
					<div>{`Course Selected: ${this.state.altcourses}`}</div>

					<Button color="secondary" variant="contained" onClick={this.back}>
						Back
					</Button>

					<Button color="primary" variant="contained" onClick={this.continue}>
						Continue
					</Button>
				</div>
			</MuiThemeProvider>
		);
	}
}

export default AltChoiceSelection;
