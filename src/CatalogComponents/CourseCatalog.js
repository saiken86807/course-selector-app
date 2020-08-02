import React, { useState, createContext } from 'react';

export const CourseCatalog = createContext();

export const CourseProvider = (props) => {
	const [ courses, setCourses ] = useState([
		{
			id: 'ANSC-1003',
			name: 'Animal Care Management ANSC-1003',
			description:
				'Animal Care Management is an introductory course focusing on the proper care and husbandry of many animal species commonly kepts as pets. Emphasis is placed on nutrition, feeding, housing, breeding and health maintenance of dogs, cats, ferrets, birds, fish, pocket pets and some exotic pets.',
			times: 'M/W/F 1:00 PM - 1:50 PM',
			location: 'Borger Academic Building, Room 108',
			limit: '15/25'
		},
		{
			id: 'ANSC-1010',
			name: 'Animal Health Skills ANSC-1010',
			description:
				'This course introduces the student to more in-depth skills involving animal care and handling, concentrating on the dog and cat. Anatomy and physiology, diseases and conditions affecting these species and entry level skills such as first aid, intramuscular and subcutaneous injections techniques, obtaining vital signs, bandaging and splinting techniques and basic laboratory procedures are taught.',
			times: 'T/TH 9:00 AM - 11:00 AM',
			location: 'Borger Academic Building, Room 210',
			limit: '10/15'
		},
		{
			id: 'ANSC-1400',
			name: 'Introduction to Animal Science ANSC-1400',
			description:
				'An introduction to the broad field of animal science. The course develops a basic understanding of each of the major types of domestic animals, with particular attention to nutrition and reproduction',
			times: 'M/W/F 9:00 AM - 9:50 AM',
			location: 'Borger Academic Building, Davis Hall',
			limit: '20/30'
		},
		{
			id: 'ANSC-2100',
			name: 'Small Animal Behavior ANSC-2100',
			description:
				'A generalized overview of the fundamental principles of animal behavior, including normal patterns of behavior; the principals of learning theory and behavior modification; nuisance and abnormal behaviors of pet animals; development and socialization of cats and dogs; and pet selection counseling. Students will have the opportunity to work hands-on with various species of domestic animals.',
			times: 'M/W/F 2:00 PM - 2:50 PM',
			location: 'Marsh Hall, Large CR Lecture',
			limit: '20/30'
		},
		{
			id: 'MATH-1200.01',
			name: 'College Algebra MATH-1200.01',
			description:
				'The topics covered include properties of number systems, polynomials, linear and quadratic equations and inequalities, radical equations, absolute value equations, systems of equations and inequalities, graphing, and verbal problems. A grade of C or higher is required to advance in the AVMA accredited Veterinary Technology programs.',
			times: 'M/W/F 11:30 AM - 12:20 PM',
			location: 'Borger Academic Building, Room 220',
			limit: '30/40'
		},
		{
			id: 'MATH-1200.02',
			name: 'College Algebra MATH-1200.02',
			description:
				'The topics covered include properties of number systems, polynomials, linear and quadratic equations and inequalities, radical equations, absolute value equations, systems of equations and inequalities, graphing, and verbal problems. A grade of C or higher is required to advance in the AVMA accredited Veterinary Technology programs.',
			times: 'TH 6:25 PM - 8:55 PM',
			location: 'Borger Academic Building, Room 108',
			limit: '25/35'
		},
		{
			id: 'CHEM-1002',
			name: 'Chemistry II CHEM-1002',
			description:
				'A continuation of Chemistry 1001. The basics of organic chemistry and the fundamentals of biochemistry are covered. The application of biochemistry to the health sciences is emphasized. Some topics include functional groups, nomenclature and reactions of organic compounds, carbohydrates, proteins, lipids, and nucleic acids. Prerequisite: Chemistry 1001',
			times: 'T/TH 1:15 PM - 2:30 PM',
			location: 'Borger Academic Building, Room 108',
			limit: '6/15'
		},
		{
			id: 'PSYC-1001.01',
			name: 'Introduction to Psychology PSYC-1001.01',
			description:
				'An introduction to the basic concepts and fundamental principles of human behavior using the historical background of psychology as a foundation, and present theory and research as a tool to explore principles of learning, human development motivation, stress, personality, interpersonal skills and mental health.',
			times: 'W 6:15 PM - 8:45 PM',
			location: 'Borger Academic Building, Room 110',
			limit: '13/50'
		},
		{
			id: 'PSYC-1001.02',
			name: 'Introduction to Psychology PSYC-1001.01',
			description:
				'An introduction to the basic concepts and fundamental principles of human behavior using the historical background of psychology as a foundation, and present theory and research as a tool to explore principles of learning, human development motivation, stress, personality, interpersonal skills and mental health.',
			times: 'M/W/F 8:00 AM - 8:50 AM',
			location: 'Borger Academic Building, Room 210',
			limit: '40/50'
		}
	]);
	return <CourseCatalog.Provider value={[ courses, setCourses ]}>{props.children}</CourseCatalog.Provider>;
};
