import React, { Component } from 'react';
import FirstChoiceSelection from './FirstChoiceClassSelection';
import AltChoiceSelection from './AltChoiceSelection';
import Confirm from './Confirm';
import Success from './Success';

export class ClassSelectionForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			step: 1,
			courses: [],
			altcourses: []
		};
		this.onCoursesChange = this.onCoursesChange.bind(this);
		// this.onAltcoursesChange = this.onAltcoursesChange.bind(this);
	}
	// Proceed to the next step
	nextStep = () => {
		// destructering
		const { step } = this.state;
		this.setState({
			step: step + 1
		});
	};

	// Go back to previous step
	prevStep = () => {
		const { step } = this.state;
		this.setState({
			step: step - 1
		});
	};
	onCoursesChange = (event, values) => {
		this.setState({
			courses: values
		});
	};
	// onCoursesChange = (event) => {
	// 	const { name, values } = event.target;
	// 	this.setState({
	// 		[name]: values
	// 	});
	// };

	onAltcoursesChange = (event, values) => {
		this.setState({
			altcourses: values
		});
	};

	render() {
		const { step } = this.state;
		const { courses, altcourses } = this.state;
		const values = { courses, altcourses };
		//const { courses, altcourses} = this.state;
		// const values = {
		// 	courses,
		// 	// altcourses,
		// };
		switch (step) {
			case 1:
				return (
					<FirstChoiceSelection
						nextStep={this.nextStep}
						handleChange={this.onCoursesChange}
						courses={this.state.courses}
					/>
				);
			case 2:
				return (
					// <AltChoiceSelection
					// 	nextStep={this.nextStep}
					// 	prevStep={this.prevStep}
					// 	handleChange={this.handleChange}
					// 	values={values}
					// />
					<AltChoiceSelection
						nextStep={this.nextStep}
						handleChange={this.onAltcoursesChange}
						altcourses={this.altcourses}
					/>
				);
			case 3:
				return <Confirm nextStep={this.nextStep} prevStep={this.prevStep} values={values} />;
			case 4:
				return <Success />;
			default:
				return (
					<h1>
						Oops! Something went wrong <span>❗🤔</span>
					</h1>
				);
		}
	}
}

export default ClassSelectionForm;
