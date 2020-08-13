import React, { Component } from 'react';
import Creatable from 'react-select/creatable';
import { components } from 'react-select';
import { Form, FormGroup, Label, Input } from 'reactstrap';
import Button from '@material-ui/core/Button';
import SuccessMessage from './SuccessMessage';

export class CourseSelectionForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			status: '',
			name: '',
			email: '',
			selectedCourses: []
		};
		this.onCoursesChange = this.onCoursesChange.bind(this);
		this.submitForm = this.submitForm.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}
	onCoursesChange = (selectedCourses) => {
		this.setState({ selectedCourses });
		console.log(selectedCourses);
	};
	handleChange = (input) => (e) => {
		this.setState({ [input]: e.target.value });
	};

	render() {
		const { status } = this.state;
		const options = [
			{ value: 'ANSC-1003', label: 'Animal Care Management: ANSC-1003' },
			{ value: 'ANSC-1010', label: 'Animal Health Skills: ANSC-1010' },
			{ value: 'ANSC-1400', label: 'Introduction to Animal Science: ANSC-1400' },
			{ value: 'ANSC-2100', label: 'Small Animal Behavior: ANSC-2100' },
			{ value: 'MATH-1200.01', label: 'College Algebra: MATH-1200.01' },
			{ value: 'MATH-1200.02', label: 'College Algebra: MATH-1200.02' },
			{ value: 'CHEM-1002', label: 'Chemistry II: CHEM-1002' },
			{ value: 'PSYC-1001.01', label: 'Introduction to Psychology: PSYC-1001.01' },
			{ value: 'PSYC-1001.02', label: 'Introduction to Psychology: PSYC-1001.02' }
		];
		const Menu = (props) => {
			const optionSelectedLength = props.getValue().length || 0;
			return (
				<components.Menu {...props}>
					{optionSelectedLength < 4 ? (
						props.children
					) : (
						<div style={{ margin: 15 }}>You've selected 4 courses, remove a course to choose another</div>
					)}
				</components.Menu>
			);
		};
		const isValidNewOption = (inputValue, selectValue) => inputValue.length > 0 && selectValue.length < 4;

		return (
			<div container>
				<Form
					className="CourseForm"
					onSubmit={this.submitForm}
					action="https://formspree.io/mlepzrlb"
					method="POST"
				>
					<FormGroup row>
						<Label for="fullName">Enter your Name:</Label>
						<Input
							type="text"
							name="fullName"
							placeholder="Alex Jones"
							onChange={this.state.handleChange}
						/>
					</FormGroup>
					<FormGroup row>
						<Label for="email">Enter your email address:</Label>
						<Input
							type="email"
							name="email"
							placeholder="alex.jones@gmail.com"
							onChange={this.state.handleChange}
						/>
					</FormGroup>
					<FormGroup row>
						<Label for="courses" sm={2}>
							Please select your 4 courses for next semester:
						</Label>
						<Creatable
							components={{ Menu }}
							isMulti
							isValidNewOption={isValidNewOption}
							options={options}
							className="dropdown"
							name="courses"
							onChange={this.onCoursesChange}
							placeholder="Select your chosen courses"
							autoFocus
						/>
					</FormGroup>
					{status === 'SUCCESS' ? (
						<SuccessMessage />
					) : (
						<Button className="formbutton" color="primary" variant="contained" type="submit">
							Submit
						</Button>
					)}
					{status === 'ERROR' && <p>Ooops! There was an error.</p>}
				</Form>
			</div>
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
export default CourseSelectionForm;
