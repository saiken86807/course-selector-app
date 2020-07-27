import React from 'react';
import { Grid } from '@material-ui/core/';
import LeftPane from './LeftPane';
import LeftPaneTab from './LeftTabPane';

export default (props) => (
	<Grid container spacing={2}>
		<Grid item xs={12} sm={5}>
			<LeftPaneTab />
		</Grid>
		<Grid item xs={12} sm={7}>
			<LeftPane className="Paper" />
		</Grid>
	</Grid>
);
