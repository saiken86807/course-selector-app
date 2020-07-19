import React from 'react';
import Button from '@material-ui/core/Button';

class SelectedButton extends React.Component {
	constructor(props) {
		super(props);
		this.state = { isClassSelected: false };
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		this.setState((prevState) => ({
			isClassSelected: !prevState.isClassSelected
		}));
	}

	render() {
		return (
			<Button size="medium" color="primary" variant="contained" onClick={this.handleClick}>
				{this.state.isClassSelected ? 'This course has been selected' : 'Not Selected'}
			</Button>
		);
	}
}

export default SelectedButton;
