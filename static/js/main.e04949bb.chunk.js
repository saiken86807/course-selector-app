(this["webpackJsonpcourse-selector-app"]=this["webpackJsonpcourse-selector-app"]||[]).push([[0],{76:function(e,t,n){e.exports=n(87)},81:function(e,t,n){},82:function(e,t,n){},87:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),i=n(11),r=n.n(i),s=(n(81),n(82),n(33)),l=(n(61),n(141),n(135),n(136),n(137),n(143),n(138),n(20)),c=n(21),u=n(17),m=n(27),d=n(26),h=n(126),p=n(139),g=n(128),f=n(142),A=n(123),C=[" Animal Care Management: ANSC-1003"," Animal Health Skills: ANSC-1010"," Introduction to Animal Science: ANSC-1400"," Small Animal Behavior: ANSC-2100"," College Algebra: MATH-1200.01"," College Algebra: MATH-1200.02"," Chemistry II CHEM-1002"," Introduction to Psychology: PSYC-1001.01"," Introduction to Psychology: PSYC-1001.02"],b=(a.Component,Object(a.createContext)()),y=function(e){var t=Object(a.useState)([{id:"ANSC-1003",name:"Animal Care Management ANSC-1003",description:"Animal Care Management is an introductory course focusing on the proper care and husbandry of many animal species commonly kepts as pets. Emphasis is placed on nutrition, feeding, housing, breeding and health maintenance of dogs, cats, ferrets, birds, fish, pocket pets and some exotic pets.",times:"M/W/F 1:00 PM - 1:50 PM",location:"Borger Academic Building, Room 108",limit:"15/25"},{id:"ANSC-1010",name:"Animal Health Skills ANSC-1010",description:"This course introduces the student to more in-depth skills involving animal care and handling, concentrating on the dog and cat. Anatomy and physiology, diseases and conditions affecting these species and entry level skills such as first aid, intramuscular and subcutaneous injections techniques, obtaining vital signs, bandaging and splinting techniques and basic laboratory procedures are taught.",times:"T/TH 9:00 AM - 11:00 AM",location:"Borger Academic Building, Room 210",limit:"10/15"},{id:"ANSC-1400",name:"Introduction to Animal Science ANSC-1400",description:"An introduction to the broad field of animal science. The course develops a basic understanding of each of the major types of domestic animals, with particular attention to nutrition and reproduction",times:"M/W/F 9:00 AM - 9:50 AM",location:"Borger Academic Building, Davis Hall",limit:"20/30"},{id:"ANSC-2100",name:"Small Animal Behavior ANSC-2100",description:"A generalized overview of the fundamental principles of animal behavior, including normal patterns of behavior; the principals of learning theory and behavior modification; nuisance and abnormal behaviors of pet animals; development and socialization of cats and dogs; and pet selection counseling. Students will have the opportunity to work hands-on with various species of domestic animals.",times:"M/W/F 2:00 PM - 2:50 PM",location:"Marsh Hall, Large CR Lecture",limit:"20/30"},{id:"MATH-1200.01",name:"College Algebra MATH-1200",description:"The topics covered include properties of number systems, polynomials, linear and quadratic equations and inequalities, radical equations, absolute value equations, systems of equations and inequalities, graphing, and verbal problems. A grade of C or higher is required to advance in the AVMA accredited Veterinary Technology programs.",times:"M/W/F 11:30 AM - 12:20 PM",location:"Borger Academic Building, Room 220",limit:"30/40"},{id:"MATH-1200.02",name:"College Algebra MATH-1200",description:"The topics covered include properties of number systems, polynomials, linear and quadratic equations and inequalities, radical equations, absolute value equations, systems of equations and inequalities, graphing, and verbal problems. A grade of C or higher is required to advance in the AVMA accredited Veterinary Technology programs.",times:"TH 6:25 PM - 8:55 PM",location:"Borger Academic Building, Room 108",limit:"25/35"},{id:"CHEM-1002",name:"Chemistry II CHEM-1002",description:"A continuation of Chemistry 1001. The basics of organic chemistry and the fundamentals of biochemistry are covered. The application of biochemistry to the health sciences is emphasized. Some topics include functional groups, nomenclature and reactions of organic compounds, carbohydrates, proteins, lipids, and nucleic acids. Prerequisite: Chemistry 1001",times:"T/TH 1:15 PM - 2:30 PM",location:"Borger Academic Building, Room 108",limit:"6/15"},{id:"PSYC-1001.01",name:"Introduction to Psychology PSYC-1001",description:"An introduction to the basic concepts and fundamental principles of human behavior using the historical background of psychology as a foundation, and present theory and research as a tool to explore principles of learning, human development motivation, stress, personality, interpersonal skills and mental health.",times:"W 6:15 PM - 8:45 PM",location:"Borger Academic Building, Room 110",limit:"13/50"},{id:"PSYC-1001.02",name:"Introduction to Psychology PSYC-1001",description:"An introduction to the basic concepts and fundamental principles of human behavior using the historical background of psychology as a foundation, and present theory and research as a tool to explore principles of learning, human development motivation, stress, personality, interpersonal skills and mental health.",times:"M/W/F 8:00 AM - 8:50 AM",location:"Borger Academic Building, Room 210",limit:"40/50"}]),n=Object(s.a)(t,2),i=n[0],r=n[1];return o.a.createElement(b.Provider,{value:[i,r]},e.children)},v=function(e){var t=e.name,n=e.description,a=e.times,i=e.location,r=e.limit;return o.a.createElement(A.a,{container:!0,direction:"row",justify:"center",alignItems:"center"},o.a.createElement("div",{className:"courses"},o.a.createElement("h2",null,t),o.a.createElement("h4",null,n),o.a.createElement("h3",null,"Location: ",i,o.a.createElement("br",null),"Times: ",a," ",o.a.createElement("br",null)," Seats: ",r)))},S=function(){var e=Object(a.useContext)(b),t=Object(s.a)(e,1)[0];return o.a.createElement("div",null,t.map((function(e){return o.a.createElement(v,{key:e.id,name:e.name,description:e.description,times:e.times,location:e.location,limit:e.limit})})))},E=(a.Component,a.Component,n(4)),M=(n(132),n(134),n(129)),B=(n(131),n(133),n(130));n(89),Object(E.a)((function(e){return{head:{backgroundColor:e.palette.common.black,color:e.palette.common.white},body:{fontSize:16}}}))(M.a),Object(E.a)((function(e){return{root:{"&:nth-of-type(odd)":{backgroundColor:e.palette.action.hover}}}}))(B.a);function P(e,t,n,a,o){return{courseNumber:e,courseName:t,semester:n,creditsEarned:a,grade:o}}var I=[P("ENGL-1001","English Composition I","Fall 2019",3,"A-"),P("BIOL-1001","Biology I","Fall 2019",4,"B"),P("BIOL-1005","A & P Domestic Animals I","Fall 2019",4,"B"),P("MGMT-1000","Introduction to Business Model","Fall 2019",3,"A"),P("BIOL-1002"," Biology II","Spring 2020",4,"B"),P("BIOL-1006"," A & P Domestic Animals II","Spring 2020",4,"B"),P("CHEM-1001 ","Chemistry","Spring 2020",4,"B+"),P("ANSC-1005 ","Animal Facilities Design & Mgt","Spring 2020",3,"A")];I.map((function(e){return e.creditsEarned})).reduce((function(e,t){return e+t}),0);var T=[" Animal Care Management: ANSC-1003"," Animal Health Skills: ANSC-1010"," Introduction to Animal Science: ANSC-1400"," Small Animal Behavior: ANSC-2100"," College Algebra: MATH-1200.01"," College Algebra: MATH-1200.02"," Chemistry: CHEM-1001"," Introduction to Psychology: PSYC-1001.01"," Introduction to Psychology: PSYC-1001.02"],k=function(e){Object(m.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).onCoursesChange=function(e,t){a.setState({courses:t}),console.log(t)},a.onAltcoursesChange=function(e,t){a.setState({altcourses:t}),console.log(t)},a.submitForm=a.submitForm.bind(Object(u.a)(a)),a.state={status:"",courses:[],altcourses:[]},a.onCoursesChange=a.onCoursesChange.bind(Object(u.a)(a)),a.onAltcoursesChange=a.onAltcoursesChange.bind(Object(u.a)(a)),a}return Object(c.a)(n,[{key:"render",value:function(){var e=this,t=this.state.status,n=T.filter((function(t){return!e.state.altcourses.includes(t)})),a=T.filter((function(t){return!e.state.courses.includes(t)})),i=this.state.courses.map((function(e){return o.a.createElement("li",{key:e},e)})),r=this.state.altcourses.map((function(e){return o.a.createElement("li",{key:e},e)}));return o.a.createElement(h.a,null,o.a.createElement("div",{style:{width:600}},o.a.createElement(f.a,{name:"autocourses",multiple:!0,options:n,defaultValue:[],onChange:this.onCoursesChange,renderInput:function(e){return o.a.createElement(p.a,Object.assign({},e,{name:"coursestext",variant:"outlined",label:"Select your courses",placeholder:"First choice:Select 4",fullWidth:!0,margin:"normal"}))}}),o.a.createElement("br",null),o.a.createElement(f.a,{name:"autoaltcourses",multiple:!0,options:a,onChange:this.onAltcoursesChange,renderInput:function(e){return o.a.createElement(p.a,Object.assign({},e,{name:"altcoursestext",variant:"outlined",label:"Select your courses",placeholder:"Select 2",fullWidth:!0}))}}),o.a.createElement("form",{onSubmit:this.submitForm,action:"https://formspree.io/mlepzrlb",method:"POST"},o.a.createElement("div",{name:"coursesContainer",values:console.log(i)},o.a.createElement("h3",null,"Your First Choice Selection:"),o.a.createElement("ol",{name:"coursesList"},i)),o.a.createElement("div",{name:"coursesContainer"},o.a.createElement("input",{type:"li",value:i})),o.a.createElement("div",{name:"altcoursesContainer",values:console.log({altcoursesList:r})},o.a.createElement("h3",null,"Your Second Choice Selection:"),o.a.createElement("ol",{name:"altcoursesList"},r)),o.a.createElement("div",{name:"altcoursesContainer"},o.a.createElement("input",{type:"li",value:r})),"SUCCESS"===t?o.a.createElement("p",null,"Thanks!"):o.a.createElement(g.a,{color:"primary",variant:"contained",type:"submit"},"Submit!"),"ERROR"===t&&o.a.createElement("p",null,"Ooops! There was an error."))))}},{key:"submitForm",value:function(e){var t=this;e.preventDefault();var n=e.target,a=new FormData(n),o=new XMLHttpRequest;o.open(n.method,n.action),o.setRequestHeader("Accept","application/json"),o.onreadystatechange=function(){o.readyState===XMLHttpRequest.DONE&&(200===o.status?(n.reset(),t.setState({status:"SUCCESS"})):t.setState({status:"ERROR"}))},o.send(a)}}]),n}(a.Component);var O=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(k,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(O,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[76,1,2]]]);
//# sourceMappingURL=main.e04949bb.chunk.js.map