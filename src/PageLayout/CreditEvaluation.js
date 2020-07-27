import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledTableCell = withStyles((theme) => ({
	head: {
		backgroundColor: theme.palette.common.black,
		color: theme.palette.common.white
	},
	body: {
		fontSize: 14
	}
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
	root: {
		'&:nth-of-type(odd)': {
			backgroundColor: theme.palette.action.hover
		}
	}
}))(TableRow);

function createData(courseNumber, courseName, semester, creditsEarned, grade) {
	return { courseNumber, courseName, semester, creditsEarned, grade };
}

const rows = [
	createData('ENGL-1001', 'English Composition I', 'Fall 2019', 3, 'A-'),
	createData('BIOL-1001', 'Biology I', 'Fall 2019', 4, 'B'),
	createData('BIOL-1005', 'A & P Domestic Animals I', 'Fall 2019', 4, 'B'),
	createData('MGMT-1000', 'Introduction to Business Model', 'Fall 2019', 3, 'A'),
	createData('BIOL-1002', ' Biology II', 'Spring 2020', 4, 'B'),
	createData('BIOL-1006', ' A & P Domestic Animals II', 'Spring 2020', 4, 'B'),
	createData('CHEM-1001 ', 'Chemistry', 'Spring 2020', 4, 'B+'),
	createData('ANSC-1005 ', 'Animal Facilities Design & Mgt', 'Spring 2020', 3, 'A')
];

const useStyles = makeStyles({
	table: {
		minWidth: 700
	}
});

function totalCredits(items) {
	return items.map(({ creditsEarned }) => creditsEarned).reduce((sum, i) => sum + i, 0);
}
const totalCreditsEarned = totalCredits(rows);

export default function CreditEvaluation() {
	const classes = useStyles();

	return (
		<TableContainer component={Paper}>
			<Table className={classes.table} aria-label="credit evaluation table">
				<TableHead>
					<TableRow>
						<StyledTableCell align="center">Course Number</StyledTableCell>
						<StyledTableCell align="center">Course Name</StyledTableCell>
						<StyledTableCell align="center">Semester</StyledTableCell>
						<StyledTableCell align="center">Credits Earned</StyledTableCell>
						<StyledTableCell align="center">Grade</StyledTableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{rows.map((row) => (
						<StyledTableRow key={row.name}>
							<StyledTableCell component="th" scope="row">
								{row.courseNumber}
							</StyledTableCell>
							<StyledTableCell align="left">{row.courseName}</StyledTableCell>
							<StyledTableCell align="left">{row.semester}</StyledTableCell>
							<StyledTableCell align="center">{row.creditsEarned}</StyledTableCell>
							<StyledTableCell align="center">{row.grade}</StyledTableCell>
						</StyledTableRow>
					))}
					<TableRow>
						<TableCell rowSpan={3} />
						<TableCell colSpan={2}>
							<b>Total Credits Earned</b>
						</TableCell>
						<TableCell align="center">
							<b>{totalCreditsEarned}</b>
						</TableCell>
					</TableRow>
				</TableBody>
			</Table>
		</TableContainer>
	);
}
