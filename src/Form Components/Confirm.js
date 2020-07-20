import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { List, ListItem, ListItemText } from '@material-ui/core/';
import Button from '@material-ui/core/Button';

export class Confirm extends Component{
    continue = (e) => {
		e.preventDefault();
		// here I can send info to backend API
		this.props.nextStep();
	};
	back = (e) => {
		e.preventDefault();
		this.props.prevStep();
    };
    render() {
        const {
            values: {course1, course2, course3, course4, alternateCourse1, alternateCourse2, alternateCourse3}
        }= this.props;
        return (
            <MuiThemeProvider>
				<>
          <Dialog
            open
            fullWidth
            maxWidth='md'
          >
			<AppBar title="Confirm Selected Courses" />
				<List>
					<ListItem>
                        <ListItemText primary="Course 1: " secondary={course1} />
                    </ListItem> 
                    <ListItem>
                        <ListItemText primary="Course 2: " secondary={course2} />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Course 3: " secondary={course3} />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Course 4: " secondary={course4} />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Alternate Course 1: " secondary={alternateCourse1} />
                    </ListItem>
                    <ListItem>
						<ListItemText primary="Alternate Course 2: " secondary={alternateCourse2} />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Alternate Course 3: " secondary={alternateCourse3} />
                    </ListItem>
				</List>
					<br />
                    <Button
                    color="primary"
                    variant="contained"
                    onClick={this.continue}
                    >Confirm & Continue</Button>
                <Button
                    color="secondary"
                    variant="contained"
                    onClick={this.back}
                    >Back</Button>
          </Dialog>
        </>
      </MuiThemeProvider>
        )
    }
}

export default Confirm;