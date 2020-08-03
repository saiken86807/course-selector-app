import React, { Component } from 'react';
import { Form } from 'reactstrap';
import { List, ListItem, ListItemText, Button } from '@material-ui/core/';

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
					<h1 className="ui centered">Confirm your Selected Courses</h1>
					<p>Click Confirm if the following details have been correctly entered</p>
					<List>
						<ListItem name="course1">
							<ListItemText name="course1" primary="Course 1:" secondary={course1} />
						</ListItem>
						<ListItem name="course2">
							<ListItemText name="course2" primary="Course 2:" secondary={course2} />
						</ListItem>
						<ListItem name="course3">
							<ListItemText name="course3" primary="Course 3: " secondary={course3} />
						</ListItem>
						<ListItem name="course4">
							<ListItemText name="course4" primary="Course 4: " secondary={course4} />
						</ListItem>
						<ListItem name="altcourse1">
							<ListItemText name="altcourse1" primary="Alternate Course 1: " secondary={altcourse1} />
						</ListItem>
						<ListItem name="altcourse2">
							<ListItemText name="altcourse2" primary="Alternate Course 2: " secondary={altcourse2} />
						</ListItem>
					</List>
				</Form>
				<Button color="secondary" variant="contained" onClick={this.back}>
					Back
				</Button>
				<Button color="primary" variant="contained" onClick={this.saveAndContinue}>
					Confirm
				</Button>
			</div>
		);
	}
}

export default Confirmation;
