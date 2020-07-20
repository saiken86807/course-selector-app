import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

export class AltChoiceSelection extends Component {
	continue = (e) => {
		e.preventDefault();
		this.props.nextStep();
	};
	back = (e) => {
		e.preventDefault();
		this.props.prevStep();
    };
    
	render() {
		const { values, handleChange } = this.props;
		return (
			<MuiThemeProvider>
				<>
                {/* <AppBar title="Enter your selected courses">
                    <Toolbar>
                        <Typography variant="h6">
                            Course Selection
                        </Typography>
                    </Toolbar>
                </AppBar> */}
					<TextField
                        variant="outlined"
						placeholder="Enter an alternate course"
						label="Alternate Course 1"
						onChange={handleChange('alternateCourse1')}
                        defaultValue={values.alternateCourse1}
                        margin="normal"
                        fullWidth
					/>
					<br />
					<TextField
                        variant="outlined"
						placeholder="Enter an alternate course"
						label="Alternate Course 2"
						onChange={handleChange('alternateCourse2')}
                        defaultValue={values.alternateCourse2}
                        margin="normal"
                        fullWidth
					/>
					<br />
					<TextField
                        variant="outlined"
						placeholder="Enter an alternate course"
						label="Alternate Course 3"
						onChange={handleChange('alternateCourse3')}
                        defaultValue={values.alternateCourse3}
                        margin="normal"
                        fullWidth
					/>
					<br />
					<Button
                        color="secondary"
                        variant="contained"
                        onClick={this.back}
                        >Back</Button>

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


export default AltChoiceSelection;
