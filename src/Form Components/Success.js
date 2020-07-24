import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export class Success extends Component {
	continue = (e) => {
		e.preventDefault();
		// PROCESS FORM //
		this.props.nextStep();
	};

	back = (e) => {
		e.preventDefault();
		this.props.prevStep();
	};

	render() {
		return (
			<MuiThemeProvider>
				<React.Fragment>
					<h1>Thank you for your Submission!</h1>
					<p>You will get an email from your Academic Advisor with further instructions</p>
				</React.Fragment>
			</MuiThemeProvider>
		);
	}
}

export default Success;
