(this["webpackJsonpcourse-selector-app"]=this["webpackJsonpcourse-selector-app"]||[]).push([[0],{137:function(e,a,t){e.exports=t(238)},142:function(e,a,t){},143:function(e,a,t){},238:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(11),l=t.n(o),c=(t(142),t(143),t(49)),i=t(125),s=t(303),u=t(72),m=t(298),d=t(299),p=t(305),h=t(300),g=t(15),E=t(16),f=t(50),b=t(18),v=t(17),y=t(281),C=t(301),A=t(284),S=t(304),M=t(278),w=[" Animal Care Management: ANSC-1003"," Animal Health Skills: ANSC-1010"," Introduction to Animal Science: ANSC-1400"," Small Animal Behavior: ANSC-2100"," College Algebra: MATH-1200.01"," College Algebra: MATH-1200.02"," Chemistry II CHEM-1002"," Introduction to Psychology: PSYC-1001.01"," Introduction to Psychology: PSYC-1001.02"],O=(n.Component,Object(n.createContext)()),j=function(e){var a=Object(n.useState)([{id:"ANSC-1003",name:"Animal Care Management ANSC-1003",description:"Animal Care Management is an introductory course focusing on the proper care and husbandry of many animal species commonly kepts as pets. Emphasis is placed on nutrition, feeding, housing, breeding and health maintenance of dogs, cats, ferrets, birds, fish, pocket pets and some exotic pets.",times:"M/W/F 1:00 PM - 1:50 PM",location:"Borger Academic Building, Room 108",limit:"15/25"},{id:"ANSC-1010",name:"Animal Health Skills ANSC-1010",description:"This course introduces the student to more in-depth skills involving animal care and handling, concentrating on the dog and cat. Anatomy and physiology, diseases and conditions affecting these species and entry level skills such as first aid, intramuscular and subcutaneous injections techniques, obtaining vital signs, bandaging and splinting techniques and basic laboratory procedures are taught.",times:"T/TH 9:00 AM - 11:00 AM",location:"Borger Academic Building, Room 210",limit:"10/15"},{id:"ANSC-1400",name:"Introduction to Animal Science ANSC-1400",description:"An introduction to the broad field of animal science. The course develops a basic understanding of each of the major types of domestic animals, with particular attention to nutrition and reproduction",times:"M/W/F 9:00 AM - 9:50 AM",location:"Borger Academic Building, Davis Hall",limit:"20/30"},{id:"ANSC-2100",name:"Small Animal Behavior ANSC-2100",description:"A generalized overview of the fundamental principles of animal behavior, including normal patterns of behavior; the principals of learning theory and behavior modification; nuisance and abnormal behaviors of pet animals; development and socialization of cats and dogs; and pet selection counseling. Students will have the opportunity to work hands-on with various species of domestic animals.",times:"M/W/F 2:00 PM - 2:50 PM",location:"Marsh Hall, Large CR Lecture",limit:"20/30"},{id:"MATH-1200.01",name:"College Algebra MATH-1200.01",description:"The topics covered include properties of number systems, polynomials, linear and quadratic equations and inequalities, radical equations, absolute value equations, systems of equations and inequalities, graphing, and verbal problems. A grade of C or higher is required to advance in the AVMA accredited Veterinary Technology programs.",times:"M/W/F 11:30 AM - 12:20 PM",location:"Borger Academic Building, Room 220",limit:"30/40"},{id:"MATH-1200.02",name:"College Algebra MATH-1200.02",description:"The topics covered include properties of number systems, polynomials, linear and quadratic equations and inequalities, radical equations, absolute value equations, systems of equations and inequalities, graphing, and verbal problems. A grade of C or higher is required to advance in the AVMA accredited Veterinary Technology programs.",times:"TH 6:25 PM - 8:55 PM",location:"Borger Academic Building, Room 108",limit:"25/35"},{id:"CHEM-1002",name:"Chemistry II CHEM-1002",description:"A continuation of Chemistry 1001. The basics of organic chemistry and the fundamentals of biochemistry are covered. The application of biochemistry to the health sciences is emphasized. Some topics include functional groups, nomenclature and reactions of organic compounds, carbohydrates, proteins, lipids, and nucleic acids. Prerequisite: Chemistry 1001",times:"T/TH 1:15 PM - 2:30 PM",location:"Borger Academic Building, Room 108",limit:"6/15"},{id:"PSYC-1001.01",name:"Introduction to Psychology PSYC-1001.01",description:"An introduction to the basic concepts and fundamental principles of human behavior using the historical background of psychology as a foundation, and present theory and research as a tool to explore principles of learning, human development motivation, stress, personality, interpersonal skills and mental health.",times:"W 6:15 PM - 8:45 PM",location:"Borger Academic Building, Room 110",limit:"13/50"},{id:"PSYC-1001.02",name:"Introduction to Psychology PSYC-1001.01",description:"An introduction to the basic concepts and fundamental principles of human behavior using the historical background of psychology as a foundation, and present theory and research as a tool to explore principles of learning, human development motivation, stress, personality, interpersonal skills and mental health.",times:"M/W/F 8:00 AM - 8:50 AM",location:"Borger Academic Building, Room 210",limit:"40/50"}]),t=Object(c.a)(a,2),o=t[0],l=t[1];return r.a.createElement(O.Provider,{value:[o,l]},e.children)},N=function(e){var a=e.name,t=e.description,n=e.times,o=e.location,l=e.limit;return r.a.createElement(M.a,{container:!0,direction:"row",justify:"center",alignItems:"center"},r.a.createElement("div",{className:"courses"},r.a.createElement("h2",null,a),r.a.createElement("h4",null,t),r.a.createElement("h3",null,"Location: ",o,r.a.createElement("br",null),"Times: ",n," ",r.a.createElement("br",null)," Seats: ",l)))},B=function(){var e=Object(n.useContext)(O),a=Object(c.a)(e,1)[0];return r.a.createElement("div",null,a.map((function(e){return r.a.createElement(N,{key:e.id,name:e.name,description:e.description,times:e.times,location:e.location,limit:e.limit})})))},k=function(e){Object(b.a)(t,e);var a=Object(v.a)(t);function t(){return Object(g.a)(this,t),a.apply(this,arguments)}return Object(E.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"CourseList"},r.a.createElement(j,null,r.a.createElement("h2",null," Available Courses:"),r.a.createElement(B,null)))}}]),t}(n.Component),P=function(e){Object(b.a)(t,e);var a=Object(v.a)(t);function t(){return Object(g.a)(this,t),a.apply(this,arguments)}return Object(E.a)(t,[{key:"render",value:function(){return r.a.createElement(M.a,{container:!0,className:"LeftPaneTabGrid"},r.a.createElement("h1",null,"Welcome to your Course Selection Portal!"),r.a.createElement("h2",null,"Please review the courses that are available. You will read through the course descriptions, view the class times and location. On the next section you will select 4 classes that you intend to take."," "),r.a.createElement("h3",null,r.a.createElement("b",null,r.a.createElement("i",null,"You will also be required to choose two alternate classes in the event that your preferred choice has a waitlist at the time your submission is received and reviewed by your Academic Advisor."))))}}]),t}(n.Component),T=function(e){return r.a.createElement(M.a,{container:!0,spacing:2},r.a.createElement(M.a,{item:!0,xs:12,sm:5},r.a.createElement(P,null)),r.a.createElement(M.a,{item:!0,xs:12,sm:7},r.a.createElement(k,{className:"Paper"})))},I=t(5),x=t(288),H=t(290),q=t(285),L=t(287),z=t(289),F=t(286),Y=t(240),D=Object(I.a)((function(e){return{head:{backgroundColor:e.palette.common.black,color:e.palette.common.white},body:{fontSize:16}}}))(q.a),V=Object(I.a)((function(e){return{root:{"&:nth-of-type(odd)":{backgroundColor:e.palette.action.hover}}}}))(F.a);function R(e,a,t,n,r){return{courseNumber:e,courseName:a,semester:t,creditsEarned:n,grade:r}}var W=[R("ENGL-1001","English Composition I","Fall 2019",3,"A-"),R("BIOL-1001","Biology I","Fall 2019",4,"B"),R("BIOL-1005","A & P Domestic Animals I","Fall 2019",4,"B"),R("MGMT-1000","Introduction to Business Model","Fall 2019",3,"A"),R("BIOL-1002"," Biology II","Spring 2020",4,"B"),R("BIOL-1006"," A & P Domestic Animals II","Spring 2020",4,"B"),R("CHEM-1001 ","Chemistry","Spring 2020",4,"B+"),R("ANSC-1005 ","Animal Facilities Design & Mgt","Spring 2020",3,"A")];var G=W.map((function(e){return e.creditsEarned})).reduce((function(e,a){return e+a}),0);function J(){return r.a.createElement(L.a,{component:Y.a},r.a.createElement(x.a,{className:"CreditHistoryTable",size:"size","aria-label":"credit evaluation table"},r.a.createElement(z.a,null,r.a.createElement(F.a,null,r.a.createElement(D,{align:"left"},"Course Number"),r.a.createElement(D,{align:"left"},"Course Name"),r.a.createElement(D,{align:"left"},"Semester"),r.a.createElement(D,{align:"center"},"Credits Earned"),r.a.createElement(D,{align:"center"},"Grade"))),r.a.createElement(H.a,null,W.map((function(e){return r.a.createElement(V,{key:e.name},r.a.createElement(D,{component:"th",scope:"row"},e.courseNumber),r.a.createElement(D,{align:"left"},e.courseName),r.a.createElement(D,{align:"left"},e.semester),r.a.createElement(D,{align:"center"},e.creditsEarned),r.a.createElement(D,{align:"center"},e.grade))})),r.a.createElement(F.a,null,r.a.createElement(q.a,{rowSpan:3}),r.a.createElement(q.a,{colSpan:2},r.a.createElement("b",null,"Total Credits Earned")),r.a.createElement(q.a,{align:"center"},r.a.createElement("b",null,G))))))}var $=t(123),K=t(291),Q=t(292),U=t(293),X=t(294),Z=t(295),_=function(e){Object(b.a)(t,e);var a=Object(v.a)(t);function t(){var e;Object(g.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=a.call.apply(a,[this].concat(r))).saveAndContinue=function(a){a.preventDefault(),e.props.nextStep()},e}return Object(E.a)(t,[{key:"render",value:function(){var e=this.props.values,a=[""," Animal Care Management: ANSC-1003"," Animal Health Skills: ANSC-1010"," Introduction to Animal Science: ANSC-1400"," Small Animal Behavior: ANSC-2100"," College Algebra: MATH-1200.01"," College Algebra: MATH-1200.02"," Chemistry II CHEM-1002"," Introduction to Psychology: PSYC-1001.01"," Introduction to Psychology: PSYC-1001.02"].map((function(e){return r.a.createElement("option",{value:e},e)}));return r.a.createElement(K.a,null,r.a.createElement("h1",null,"Select your courses and Submit"),r.a.createElement(Q.a,{row:!0},r.a.createElement(U.a,{for:"course1",sm:2},"Select first course"),r.a.createElement(X.a,{sm:10},r.a.createElement(Z.a,{type:"select",bsSize:"lg",name:"course1",defaultValue:e.course1,onChange:this.props.handleChange("course1")},a))),r.a.createElement("br",null),r.a.createElement(Q.a,{row:!0},r.a.createElement(U.a,{for:"course2",sm:2},"Select second course"),r.a.createElement(X.a,{sm:10},r.a.createElement(Z.a,{type:"select",bsSize:"lg",name:"course2",defaultValue:e.course2,onChange:this.props.handleChange("course2")},a))),r.a.createElement("br",null),r.a.createElement(Q.a,{row:!0},r.a.createElement(U.a,{for:"course3",sm:2},"Select third course"),r.a.createElement(X.a,{sm:10},r.a.createElement(Z.a,{type:"select",bsSize:"lg",name:"course3",defaultValue:e.course3,onChange:this.props.handleChange("course3")},a))),r.a.createElement("br",null),r.a.createElement(Q.a,{row:!0},r.a.createElement(U.a,{for:"course4",sm:2},"Select fourth course"),r.a.createElement(X.a,{sm:10},r.a.createElement(Z.a,{type:"select",bsSize:"lg",name:"course4",defaultValue:e.course4,onChange:this.props.handleChange("course4")},a))),r.a.createElement("br",null),r.a.createElement(Q.a,{row:!0},r.a.createElement(U.a,{for:"altcourse1",sm:2},r.a.createElement("h2",null,"In the event your preferred course is full, select 2 alternate courses: "),"Select an alternate course"),r.a.createElement(X.a,{sm:10},r.a.createElement(Z.a,{type:"select",bsSize:"lg",name:"altcourse1",defaultValue:e.altcourse1,onChange:this.props.handleChange("altcourse1")},a))),r.a.createElement("br",null),r.a.createElement(Q.a,{row:!0},r.a.createElement(U.a,{for:"altcourse2",sm:2},"Select an alternate course"),r.a.createElement(X.a,{sm:10},r.a.createElement(Z.a,{type:"select",bsSize:"lg",name:"altcourse2",defaultValue:e.altcourse2,onChange:this.props.handleChange("altcourse2")},a))),r.a.createElement("br",null),r.a.createElement(A.a,{color:"primary",variant:"contained",onClick:this.saveAndContinue},"Save And Continue"))}}]),t}(n.Component),ee=t(283),ae=t(296),te=t(297),ne=function(e){Object(b.a)(t,e);var a=Object(v.a)(t);function t(){var e;Object(g.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=a.call.apply(a,[this].concat(r))).saveAndContinue=function(a){a.preventDefault(),e.props.nextStep()},e.back=function(a){a.preventDefault(),e.props.prevStep()},e}return Object(E.a)(t,[{key:"render",value:function(){var e=this.props.values,a=e.course1,t=e.course2,n=e.course3,o=e.course4,l=e.altcourse1,c=e.altcourse2;return r.a.createElement("div",null,r.a.createElement(K.a,null,r.a.createElement("h1",{className:"ui centered"},"Confirm your Selected Courses"),r.a.createElement("p",null,"Click Confirm if the following details have been correctly entered"),r.a.createElement(ee.a,null,r.a.createElement(ae.a,{name:"course1"},r.a.createElement(te.a,{name:"course1",primary:"Course 1:",secondary:a})),r.a.createElement(ae.a,{name:"course2"},r.a.createElement(te.a,{name:"course2",primary:"Course 2:",secondary:t})),r.a.createElement(ae.a,{name:"course3"},r.a.createElement(te.a,{name:"course3",primary:"Course 3: ",secondary:n})),r.a.createElement(ae.a,{name:"course4"},r.a.createElement(te.a,{name:"course4",primary:"Course 4: ",secondary:o})),r.a.createElement(ae.a,{name:"altcourse1"},r.a.createElement(te.a,{name:"altcourse1",primary:"Alternate Course 1: ",secondary:l})),r.a.createElement(ae.a,{name:"altcourse2"},r.a.createElement(te.a,{name:"altcourse2",primary:"Alternate Course 2: ",secondary:c})))),r.a.createElement(A.a,{color:"secondary",variant:"contained",onClick:this.back},"Back"),r.a.createElement("br",null),r.a.createElement(A.a,{color:"primary",variant:"contained",onClick:this.saveAndContinue},"Confirm"))}}]),t}(n.Component),re=t(124),oe=t.n(re),le=function(e){Object(b.a)(t,e);var a=Object(v.a)(t);function t(){var e;Object(g.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=a.call.apply(a,[this].concat(r))).continue=function(a){a.preventDefault(),e.props.nextStep()},e.back=function(a){a.preventDefault(),e.props.prevStep()},e}return Object(E.a)(t,[{key:"render",value:function(){return r.a.createElement(oe.a,null,r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Thank you for your Submission!"),r.a.createElement("p",null,"You will get an email from your Academic Advisor with further instructions")))}}]),t}(n.Component),ce=function(e){Object(b.a)(t,e);var a=Object(v.a)(t);function t(){var e;Object(g.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=a.call.apply(a,[this].concat(r))).state={step:1,course1:"",course2:"",course3:"",course4:"",altcourse1:"",altcourse2:""},e.nextStep=function(){var a=e.state.step;e.setState({step:a+1})},e.prevStep=function(){var a=e.state.step;e.setState({step:a-1})},e.handleChange=function(a){return function(t){e.setState(Object($.a)({},a,t.target.value))}},e}return Object(E.a)(t,[{key:"render",value:function(){var e=this.state.step,a=this.state,t={course1:a.course1,course2:a.course2,course3:a.course3,course4:a.course4,altcourse1:a.altcourse1,altcourse2:a.altcourse2};switch(e){case 1:return r.a.createElement(_,{nextStep:this.nextStep,handleChange:this.handleChange,values:t});case 2:return r.a.createElement(ne,{nextStep:this.nextStep,prevStep:this.prevStep,values:t});case 3:return r.a.createElement(le,null);default:return r.a.createElement("h1",null,"Oops! Something went wrong"," ",r.a.createElement("span",{role:"img","aria-label":"exclamation mark and ponder emoji"},"\u2757\ud83e\udd14"))}}}]),t}(n.Component);function ie(e){var a=e.children,t=e.value,n=e.index,o=Object(i.a)(e,["children","value","index"]);return r.a.createElement("div",Object.assign({role:"tabpanel",hidden:t!==n,id:"wrapped-tabpanel-".concat(n),"aria-labelledby":"wrapped-tab-".concat(n)},o),t===n&&r.a.createElement(s.a,{p:3},r.a.createElement(u.a,null,a)))}function se(e){return{id:"wrapped-tab-".concat(e),"aria-controls":"wrapped-tabpanel-".concat(e)}}function ue(){var e=r.a.useState(0),a=Object(c.a)(e,2),t=a[0],n=a[1];return r.a.createElement("div",{className:"TabsRoot"},r.a.createElement(m.a,{className:"TabsAppBar",position:"static"},r.a.createElement(d.a,null,r.a.createElement(u.a,{variant:"h4"},"My Student Portal: Course Selection ")),r.a.createElement(p.a,{value:t,onChange:function(e,a){n(a)},variant:"scrollable",scrollButtons:"auto","aria-label":"Course Selection"},r.a.createElement(h.a,Object.assign({className:"TabsBar",label:"Descriptions",wrapped:!0},se(0))),r.a.createElement(h.a,Object.assign({className:"TabsBar",label:"Course Selection Form",wrapped:!0},se(1))),r.a.createElement(h.a,Object.assign({className:"TabsBar",label:"Credit Summary",wrapped:!0},se(2))))),r.a.createElement(ie,{className:"TabsLayoutPanel",value:t,index:0},r.a.createElement(T,null)),r.a.createElement(ie,{className:"TabsLayoutPanel",value:t,index:1},r.a.createElement(ce,null)),r.a.createElement(ie,{className:"TabsLayoutPanel",value:t,index:2},r.a.createElement(J,null)))}var me=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(ue,{className:"Layout"}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(me,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[137,1,2]]]);
//# sourceMappingURL=main.ce30e59e.chunk.js.map