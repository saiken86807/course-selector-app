import React, { Component } from 'react';
import { Grid } from '@material-ui/core';

export class SelectionForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			status: ''
		};
		this.submitForm = this.submitForm.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}
	handleChange(event) {
		this.setState({ [event.target.name]: event.target.value });
	}
	render() {
		const { status } = this.state;
		const courses = [
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
		const options = courses.map((item) => <option value={item}>{item}</option>);
		// const selected = [...selected.options].filter(item => item.selected).map(item=> <option value={!selected}>{!selected}</option>;
		return (
			<Grid container direction="row" justify="center" alignItems="center">
				<div className="dropdown">
					<form onSubmit={this.submitForm} action="https://formspree.io/mlepzrlb" method="POST">
						<h1>Select your courses and Submit</h1>
						<Grid item>
							<select
								placebolder="select a course"
								name="course1"
								value={this.state.course1}
								onChange={this.handleChange}
							>
								{options}
							</select>
							<br />
							<select name="course2" value={this.state.course2} onChange={this.handleChange}>
								{options}
							</select>
							<br />
							<select name="course3" value={this.state.course3} onChange={this.handleChange}>
								{options}
							</select>
							<br />
							<select name="course4" value={this.state.course4} onChange={this.handleChange}>
								{options}
							</select>
							<br />
							<select name="altcourse1" value={this.state.altcourse1} onChange={this.handleChange}>
								{options}
							</select>
							<br />
							<select name="altcourse2" value={this.state.altcourse2} onChange={this.handleChange}>
								{options}
							</select>
							<br />
							{status === 'SUCCESS' ? <p>Thanks!</p> : <button>Submit</button>}
							{status === 'ERROR' && <p>Ooops! There was an error.</p>}
						</Grid>
					</form>
				</div>
				<div className="ListedCourses">
					<Grid item container direction="column" justify="center" alignItems="center">
						<div>
							<h1>Your selected courses you submitted:</h1>
							<h2>First Choice Selections:</h2>
							<h4>1. {this.state.course1}</h4>
							<h4>2. {this.state.course2}</h4>
							<h4>3. {this.state.course3}</h4>
							<h4>4. {this.state.course4}</h4>
						</div>
						<div>
							<h2>Second Choice Selections:</h2>
							<h4>1. {this.state.altcourse1}</h4>
							<h4>2. {this.state.altcourse2}</h4>
						</div>
					</Grid>
				</div>
			</Grid>
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
