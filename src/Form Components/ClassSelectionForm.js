import React, { Component } from 'react';
import FirstChoiceSelection from './FirstChoiceClassSelection';
import AltChoiceSelection from './AltChoiceSelection';
import Confirm from './Confirm';
import Success from './Success';

export class ClassSelectionForm extends Component {
	state = {
		step: 1,
		course1: '',
		course2: '',
		course3: '',
		course4: '',
		alternateCourse1: '',
		alternateCourse2: '',
		alternateCourse3: ''
	};
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
	handleChange = (input) => (e) => {
		this.setState({ [input]: e.target.value });
	};
	render() {
		const { step } = this.state;
		const { course1, course2, course3, course4, alternateCourse1, alternateCourse2, alternateCourse3 } = this.state;
		const values = {
			course1,
			course2,
			course3,
			course4,
			alternateCourse1,
			alternateCourse2,
			alternateCourse3
		};
		switch (step) {
			case 1:
				return (
					<FirstChoiceSelection nextStep={this.nextStep} handleChange={this.handleChange} values={values} />
				);
			case 2:
				return (
					<AltChoiceSelection
						nextStep={this.nextStep}
						prevStep={this.prevStep}
						handleChange={this.handleChange}
						values={values}
					/>
				);
			case 3:
				return <Confirm nextStep={this.nextStep} prevStep={this.prevStep} values={values} />;
			case 4:
				return <Success />;
			default:
				return <h1>Oops! Something went wrong ❗🤔</h1>;
		}
	}
}

export default ClassSelectionForm;
