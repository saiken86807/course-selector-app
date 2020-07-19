import React, { useState } from 'react';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';

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
];

export function Dropdown() {
	const [ values, handleChange ] = useState({});

	return (
		<div>
			<Select
				component={makeAnimated()}
				onChange={handleChange}
				options={options}
				defaultValue={values.course1}
				placeholder="Select your Chosen Course"
				isSearchable
				autoFocus
			/>
			<br />
			<Select
				component={makeAnimated()}
				onChange={handleChange}
				options={options}
				defaultValue={values.course2}
				placeholder="Select your Chosen Course"
				isSearchable
				autoFocus
			/>
			<br />
			<Select
				component={makeAnimated()}
				onChange={handleChange}
				options={options}
				defaultValue={values.course3}
				placeholder="Select your Chosen Course"
				isSearchable
				autoFocus
			/>
			<br />
			<Select
				component={makeAnimated()}
				onChange={handleChange}
				options={options}
				defaultValue={values.course4}
				placeholder="Select your Chosen Course"
				isSearchable
				autoFocus
			/>
		</div>
	);
}

export default Dropdown;
