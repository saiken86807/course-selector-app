import React, { Component } from 'react';
import { Grid } from '@material-ui/core/';

export class LeftPaneTab extends Component {
	render() {
		return (
			<Grid container className="LeftPaneTabGrid">
				<h1>Welcome to your Course Selection Portal!</h1>

				<h2>
					Please review the courses that are available. You will read through the course descriptions, view
					the class times and location. On the next section you will select 4 classes that you intend to take.{' '}
				</h2>

				<h3>
					<b>
						<i>
							You will also be required to choose two alternate classes in the event that your preferred
							choice has a waitlist at the time your submission is received and reviewed by your Academic
							Advisor.
						</i>
					</b>
				</h3>
			</Grid>
		);
	}
}

export default LeftPaneTab;
