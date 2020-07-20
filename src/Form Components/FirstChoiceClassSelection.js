import React, { Component } from 'react';

import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


const options = [
    { value: 'ANSC-1003', label: 'Animal Care Management' },
	{ value: 'ANSC-1010', label: 'Animal Health Skills' },
	{ value: 'ANSC-1400', label: 'Introduction to Animal Science' },
	{ value: 'ANSC-2100', label: 'Small Animal Behavior' },
	{ value: 'MATH-1200.01', label: 'College Algebra' },
	{ value: 'MATH-1200.02', label: 'College Algebra' },
	{ value: 'CHEM-1001', label: 'Chemistry' },
	{ value: 'PSYC-1001.01', label: 'Introduction to Psychology ' },
	{ value: 'PSYC-1001.02', label: 'Introduction to Psychology ' }
]

export class FirstChoiceSelection extends Component {
	continue = (e) => {
		e.preventDefault();
		this.props.nextStep(); 
	};
	render() {
		const { values, handleChange } = this.props;
		return (
			<MuiThemeProvider>
				<>
                    
                    <TextField
                        variant="outlined"
						placeholder="Enter your Chosen course"
						label="Course 1"
						onChange={handleChange('course1')}
                        defaultValue={values.course1}
                        margin="normal"
                        fullWidth
					/>
					<br />
					<TextField
                        variant="outlined"
						placeholder="Enter your Chosen course"
						label="Course 2"
						onChange={handleChange('course2')}
                        defaultValue={values.course2}
                        margin="normal"
                        fullWidth
					/>
					<br />
					<TextField
                        variant="outlined"
						placeholder="Enter your Chosen course"
						label="Course 3"
						onChange={handleChange('course3')}
                        defaultValue={values.course3}
                        margin="normal"
                        fullWidth
					/>
					<br />
					<TextField
                        variant="outlined"
						placeholder="Enter your Chosen course"
						label="Course 4"
						onChange={handleChange('course4')}
                        defaultValue={values.course4}
                        margin="normal"
                        fullWidth
					/>
					<br />
					<Button
              color="primary"
              variant="contained"
              onClick={this.continue}
            >Continue</Button>
        </>
			</MuiThemeProvider>
		);
	}
}


export default FirstChoiceSelection;
