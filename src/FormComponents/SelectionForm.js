import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, Col } from 'reactstrap';

export class SelectionForm extends Component {
	saveAndContinue = (e) => {
		e.preventDefault();
		this.props.nextStep();
	};
	render() {
		const { values } = this.props;
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
		return (
			<Form>
				<h1>Select your courses and Submit</h1>
				<FormGroup row>
					<Label for="course1" sm={2}>
						Select a course
					</Label>
					<Col sm={10}>
						<Input
							type="select"
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
						Select a course
					</Label>
					<Col sm={10}>
						<Input
							type="select"
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
						Select a course
					</Label>
					<Col sm={10}>
						<Input
							type="select"
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
						Select a course
					</Label>
					<Col sm={10}>
						<Input
							type="select"
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
						Select a course
					</Label>
					<Col sm={10}>
						<Input
							type="select"
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
						Select a course
					</Label>
					<Col sm={10}>
						<Input
							type="select"
							name="altcourse2"
							defaultValue={values.altcourse2}
							onChange={this.props.handleChange('altcourse2')}
						>
							{options}
						</Input>
					</Col>
				</FormGroup>
				<br />
				<button onClick={this.saveAndContinue}>Save And Continue </button>
			</Form>
		);
	}
}

export default SelectionForm;
