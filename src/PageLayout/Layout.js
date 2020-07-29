import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Toolbar from '@material-ui/core/Toolbar';
import CourseSelectForm from './CourseSelectForm';
import CourseTabIndex from './CourseTabIndex';
import CreditEvaluation from './CreditEvaluation';

function TabPanel(props) {
	const { children, value, index, ...other } = props;

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`wrapped-tabpanel-${index}`}
			aria-labelledby={`wrapped-tab-${index}`}
			{...other}
		>
			{value === index && (
				<Box p={3}>
					<Typography>{children}</Typography>
				</Box>
			)}
		</div>
	);
}

TabPanel.propTypes = {
	children: PropTypes.node,
	index: PropTypes.any.isRequired,
	value: PropTypes.any.isRequired
};

function a11yProps(index) {
	return {
		id: `wrapped-tab-${index}`,
		'aria-controls': `wrapped-tabpanel-${index}`
	};
}

export default function SimpleTabs() {
	const [ value, setValue ] = React.useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<div className="TabsRoot">
			<AppBar className="TabsAppBar" position="static">
				<Toolbar>
					<Typography variant="h4">My Student Portal: Course Selection </Typography>
				</Toolbar>
				<Tabs value={value} onChange={handleChange} variant="scrollable" scrollButtons="auto" aria-label="Course Selection">
					<Tab className="TabsBar" label="Descriptions" wrapped {...a11yProps(0)} />
					<Tab className="TabsBar" label="Course Selection Form" wrapped {...a11yProps(1)} />
					<Tab className="TabsBar" label="Credit Summary" wrapped {...a11yProps(2)} />
				</Tabs>
			</AppBar>
			<TabPanel className="TabsLayoutPanel" value={value} index={0}>
				<CourseTabIndex />
			</TabPanel>
			<TabPanel className="TabsLayoutPanel" 
			value={value} index={1}>
				<CourseSelectForm />
			</TabPanel>
			<TabPanel className="TabsLayoutPanel" value={value} index={2}>
				<CreditEvaluation />
			</TabPanel>
		</div>
	);
}
