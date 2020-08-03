import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, Col } from 'reactstrap';
import { Button } from '@material-ui/core/';

export class SelectionForm extends Component {
	saveAndContinue = (e) => {
		e.preventDefault();
		this.props.nextStep();
	};
	render() {
		const { values } = this.props;
		const courses = [
			'',
			' Animal Care Management: ANSC-1003',
			' Animal Health Skills: ANSC-1010',
			' Introduction to Animal Science: ANSC-1400',
			' Small Animal Behavior: ANSC-2100',
			' College Algebra: MATH-1200.01',
			' College Algebra: MATH-1200.02',
			' Chemistry II CHEM-1002',
			' Introduction to Psychology: PSYC-1001.01',
			' Introduction to Psychology: PSYC-1001.02'
		];
		const options = courses.map((item) => <option value={item}>{item}</option>);
		// const filteredOptions = options.filter((option) => !selectedOption.includes(option));
		return (
			<Form>
				<h1>Select your courses and Submit</h1>
				<FormGroup row>
					<Label for="course1" sm={2}>
						Select first course
					</Label>
					<Col sm={10}>
						<Input
							type="select"
							bsSize="lg"
							name="course1"
							defaultValue={values.course1}
							onChange={this.props.handleChange('course1')}
						>
							{options}
						</Input>
					</Col>
				</FormGroup>
				<br />
				<FormGroup row>
					<Label for="course2" sm={2}>
						Select second course
					</Label>
					<Col sm={10}>
						<Input
							type="select"
							bsSize="lg"
							name="course2"
							defaultValue={values.course2}
							onChange={this.props.handleChange('course2')}
						>
							{options}
						</Input>
					</Col>
				</FormGroup>
				<br />
				<FormGroup row>
					<Label for="course3" sm={2}>
						Select third course
					</Label>
					<Col sm={10}>
						<Input
							type="select"
							bsSize="lg"
							name="course3"
							defaultValue={values.course3}
							onChange={this.props.handleChange('course3')}
						>
							{options}
						</Input>
					</Col>
				</FormGroup>
				<br />
				<FormGroup row>
					<Label for="course4" sm={2}>
						Select fourth course
					</Label>
					<Col sm={10}>
						<Input
							type="select"
							bsSize="lg"
							name="course4"
							defaultValue={values.course4}
							onChange={this.props.handleChange('course4')}
						>
							{options}
						</Input>
					</Col>
				</FormGroup>
				<br />
				<FormGroup row>
					<Label for="altcourse1" sm={2}>
						<h2>In the event your preferred course is full, select 2 alternate courses: </h2>
						Select an alternate course
					</Label>
					<Col sm={10}>
						<Input
							type="select"
							bsSize="lg"
							name="altcourse1"
							defaultValue={values.altcourse1}
							onChange={this.props.handleChange('altcourse1')}
						>
							{options}
						</Input>
					</Col>
				</FormGroup>
				<br />
				<FormGroup row>
					<Label for="altcourse2" sm={2}>
						Select an alternate course
					</Label>
					<Col sm={10}>
						<Input
							type="select"
							bsSize="lg"
							name="altcourse2"
							defaultValue={values.altcourse2}
							onChange={this.props.handleChange('altcourse2')}
						>
							{options}
						</Input>
					</Col>
				</FormGroup>
				<br />
				<Button color="primary" variant="contained" onClick={this.saveAndContinue}>
					Save And Continue
				</Button>
			</Form>
		);
	}
}

export default SelectionForm;
