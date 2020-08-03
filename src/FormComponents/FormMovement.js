import React, { Component } from 'react';
import SelectionForm from './SelectionForm';
import Confirmation from './Confirmation';
import Success from './Success';

class FormSelectionMovement extends Component {
	state = {
		step: 1,
		course1: '',
		course2: '',
		course3: '',
		course4: '',
		altcourse1: '',
		altcourse2: ''
	};

	nextStep = () => {
		const { step } = this.state;
		this.setState({
			step: step + 1
		});
	};

	prevStep = () => {
		const { step } = this.state;
		this.setState({
			step: step - 1
		});
	};

	handleChange = (input) => (event) => {
		this.setState({ [input]: event.target.value });
	};

	render() {
		const { step } = this.state;
		const { course1, course2, course3, course4, altcourse1, altcourse2 } = this.state;
		const values = { course1, course2, course3, course4, altcourse1, altcourse2 };
		switch (step) {
			case 1:
				return <SelectionForm nextStep={this.nextStep} handleChange={this.handleChange} values={values} />;
			case 2:
				return <Confirmation nextStep={this.nextStep} prevStep={this.prevStep} values={values} />;
			case 3:
				return <Success />;
			default:
				return (
					<h1>
						Oops! Something went wrong{' '}
						<span role="img" aria-label="exclamation mark and ponder emoji">
							❗🤔
						</span>
					</h1>
				);
		}
	}
}

export default FormSelectionMovement;
