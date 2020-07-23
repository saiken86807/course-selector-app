import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

const options = [
	'Animal Care Management: ANSC-1003',
	'Animal Health Skills: ANSC-1010',
	'Introduction to Animal Science: ANSC-1400',
	'Small Animal Behavior: ANSC-2100',
	'College Algebra: MATH-1200.01',
	'College Algebra: MATH-1200.02',
	'Chemistry: CHEM-1001',
	'Introduction to Psychology: PSYC-1001.01',
	'Introduction to Psychology: PSYC-1001.02'
];

// export default function AutoCompleteForm({initialValue}) {
// 	const [ value, setValue ] = useState(initialValue);

// 	return (
// 		<div>
// 			<br />
// 			<Autocomplete
// 				value={value}
// 				onChange={(event, newValue) => {
// 					setValue(newValue);
// 				}}
// 				inputValue={value}
// 				onInputChange={(event, newInputValue) => {
// 					setValue(newInputValue);
// 				}}
// 				options={options}
// 				style={{ width: 300 }}
//                 renderInput={(params) => <TextField {...params} 
//                 label="Select a Course"
//                 variant="outlined" />}
// 			/>
// 			<div>{`Course Selected: ${value}`}</div>
// 		</div>
//     );
    
/*

export default function AutoCompleteForm() {
	const [ value, setValue ] = useState(options[0]);
	//const [ inputValue, setInputValue ] = useState('');

	return (
		<div>
			<br />
			<Autocomplete
				value={value}
				onChange={(event, newValue) => {
					setValue(newValue);
				}}
				// inputValue={inputValue}
				// onInputChange={(event, newInputValue) => {
				// 	setInputValue(newInputValue);
				// }}
				options={options}
				style={{ width: 300 }}
                renderInput={(params) => <TextField {...params} 
                label="Select a Course"
                variant="outlined" />}
			/>
			<div>{`Course Selected: ${value}`}</div>
		</div>
	);

}
*/
export default function AutoCompleteForm() {
    const [ course1, setCourse1 ] = useState('');
    const [ course2, setCourse2 ] = useState('');
    const [ course3, setCourse3 ] = useState('');
    const [ course4, setCourse4 ] = useState('');
    const [ altcourse1, setAltcourse1 ] = useState('');
    const [ altcourse2, setAltcourse2 ] = useState('');
    

	return (
		<div>
			<br />
            <Autocomplete
				value={course1}
				onChange={(event, newCourse1) => {
					setCourse1(newCourse1);
				}}
				options={options}
				style={{ width: 300 }}
                renderInput={(params) => <TextField {...params} 
                label="Select your first course"
                variant="outlined" />}
			/>
			<div>{`Course Selected: ${course1}`}</div>
            <Autocomplete
				value={course2}
				onChange={(event, newCourse2) => {
					setCourse2(newCourse2);
				}}
				options={options}
				style={{ width: 300 }}
                renderInput={(params) => <TextField {...params} 
                label="Select your second course"
                variant="outlined" />}
			/>
			<div>{`Course Selected: ${course2}`}</div>
            <Autocomplete
				value={course3}
				onChange={(event, newCourse3) => {
					setCourse3(newCourse3);
				}}
				options={options}
				style={{ width: 300 }}
                renderInput={(params) => <TextField {...params} 
                label="Select your third course"
                variant="outlined" />}
			/>
			<div>{`Course Selected: ${course3}`}</div>
            <Autocomplete
				value={course4}
				onChange={(event, newCourse4) => {
					setCourse4(newCourse4);
				}}
				options={options}
				style={{ width: 300 }}
                renderInput={(params) => <TextField {...params} 
                label="Select your fourth course"
                variant="outlined" />}
			/>
			<div>{`Course Selected: ${course4}`}</div>
            <div><h3>In the event your chosen course is full, select 2 alternate courses:</h3></div>
            <Autocomplete
				value={altcourse1}
				onChange={(event, newAltcourse1) => {
					setAltcourse1(newAltcourse1);
				}}
				options={options}
				style={{ width: 300 }}
                renderInput={(params) => <TextField {...params} 
                label="Select a Course"
                variant="outlined" />}
			/>
			<div>{`Course Selected: ${altcourse1}`}</div>
            <Autocomplete
				inputValue={altcourse2}
				onInputChange={(event, newAltcourse2) => {
					setAltcourse2(newAltcourse2);
				}}
				options={options}
				style={{ width: 300 }}
                renderInput={(params) => <TextField {...params} 
                label="Select a Course"
                variant="outlined" />}
			/>
			<div>{`Course Selected: ${altcourse2}`}</div>
		</div>
	);

}
