import React, { Component } from 'react';
import { Form } from 'reactstrap';
import { List, ListItem, ListItemText } from '@material-ui/core/';

class Confirmation extends Component {
	saveAndContinue = (e) => {
		e.preventDefault();
		this.props.nextStep();
	};

	back = (e) => {
		e.preventDefault();
		this.props.prevStep();
	};

	render() {
		const { values: { course1, course2, course3, course4, altcourse1, altcourse2 } } = this.props;

		return (
			<div>
				<Form>
					<List>
						<ListItem>
							<ListItemText name="course1" primary="Course 1:" secondary={course1} />
						</ListItem>
						<ListItem>
							<ListItemText name="course2" primary="Course 2:" secondary={course2} />
						</ListItem>
						<ListItem>
							<ListItemText name="course3" primary="Course 3: " secondary={course3} />
						</ListItem>
						<ListItem>
							<ListItemText name="course4" primary="Course 4: " secondary={course4} />
						</ListItem>
						<ListItem>
							<ListItemText name="altcourse1" primary="Alternate Course 1: " secondary={altcourse1} />
						</ListItem>
						<ListItem>
							<ListItemText name="altcourse2" primary="Alternate Course 2: " secondary={altcourse2} />
						</ListItem>
					</List>
				</Form>
				<button onClick={this.back}>Back</button>
				<button onClick={this.saveAndContinue}>Confirm</button>
			</div>
		);
	}
}

export default Confirmation;
