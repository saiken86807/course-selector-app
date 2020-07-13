import React, {useState, createContext} from 'react';

export const CourseCatalog = createContext();

export const CourseProvider = (props) => {
    const [courses, setCourses] = useState([
        {
            id: 'ANSC-1003',
            name: 'Animal Care Management ANSC-1003',
			description:
				'Animal Care Management is an introductory course focusing on the proper care and husbandry of many animal species commonly kepts as pets. Emphasis is placed on nutrition, feeding, housing, breeding and health maintenance of dogs, cats, ferrets, birds, fish, pocket pets and some exotic pets.',
			times: 'M/W/F 1:00 PM - 1:50 PM',
			location: 'Borger Academic Building, Room 108'
        },
        {
            id:'ANSC-1010',
            name: 'Animal Health Skills ANSC-1010',
			description:
				'This course introduces the student to more in-depth skills involving animal care and handling, concentrating on the dog and cat. Anatomy and physiology, diseases and conditions affecting these species and entry level skills such as first aid, intramuscular and subcutaneous injections techniques, obtaining vital signs, bandaging and splinting techniques and basic laboratory procedures are taught.',
			times: 'T/TH 9:00 AM - 11:00 AM',
			location: 'Borger Academic Building, Room 210'
        },
        {
            id: 'ANSC-1400',
            name: 'Introduction to Animal Science ANSC-1400',
			description:
				'An introduction to the broad field of animal science. The course develops a basic understanding of each of the major types of domestic animals, with particular attention to nutrition and reproduction',
			times: 'M/W/F 9:00 AM - 9:50 AM',
			location: 'Borger Academic Building, Davis Hall, room 110'
        },
        {
            id:'ANSC-2100',
            name: 'Small Animal Behavior ANSC-2100',
			description:
				'A generalized overview of the fundamental principles of animal behavior, including normal patterns of behavior; the principals of learning theory and behavior modification; nuisance and abnormal behaviors of pet animals; development and socialization of cats and dogs; and pet selection counseling. Students will have the opportunity to work hands-on with various species of domestic animals.',
			times: 'M/W/F 2:00 PM - 2:50 PM',
			location: 'Marsh Hall, Large CR Lecture'
        },
        {
            id: 'MATH-1200.01',
            name: 'College Algebra MATH-1200',
			description:
				'The topics covered include properties of number systems, polynomials, linear and quadratic equations and inequalities, radical equations, absolute value equations, systems of equations and inequalities, graphing, and verbal problems. A grade of C or higher is required to advance in the AVMA accredited Veterinary Technology programs.',
			times: 'M/W/F 11:30 AM - 12:20 PM',
			location: 'Borger Academic Building, Room 220'
        },
        {
            id: 'MATH-1200.02',
            name: 'College Algebra MATH-1200',
			description:
				'The topics covered include properties of number systems, polynomials, linear and quadratic equations and inequalities, radical equations, absolute value equations, systems of equations and inequalities, graphing, and verbal problems. A grade of C or higher is required to advance in the AVMA accredited Veterinary Technology programs.',
			times: 'TH 6:25 PM - 8:55 PM',
			location: 'Borger Academic Building, Room 108'
        },
        {
            id: 'CHEM-1001',
            name: 'Chemistry CHEM-1001',
			description:
				'An introductory general chemistry course with laboratory for students in the health professions or life sciences. Topics include measurement, the states of matter, energy, the nature of atoms, ionic and molecular compounds, chemical quantities and reactions, solutions, acids, bases, buffers, and gases. Note: A grade of C or better is required for graduation in the Nursing program. A grade of C or higher is required to advance in the Veterinary Science AVMA accredited programs.',
			times: 'T/TH 1:15 PM - 2:30 PM',
			location: 'Borger Academic Building, Room 108'
        }
    ]);
    return <CourseCatalog.Provider value={[courses, setCourses]}>{props.children}</CourseCatalog.Provider>;
};