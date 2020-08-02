(this["webpackJsonpcourse-selector-app"]=this["webpackJsonpcourse-selector-app"]||[]).push([[0],{74:function(e,a,t){e.exports=t(85)},79:function(e,a,t){},80:function(e,a,t){},85:function(e,a,t){"use strict";t.r(a);var n=t(0),i=t.n(n),r=t(11),l=t.n(r),o=(t(79),t(80),t(33)),c=t(62),s=t(142),m=t(136),u=t(137),d=t(138),h=t(144),p=t(139),g=t(20),b=t(21),E=t(18),v=t(27),f=t(26),C=t(127),y=t(140),A=t(129),S=t(143),M=t(124),N=[" Animal Care Management: ANSC-1003"," Animal Health Skills: ANSC-1010"," Introduction to Animal Science: ANSC-1400"," Small Animal Behavior: ANSC-2100"," College Algebra: MATH-1200.01"," College Algebra: MATH-1200.02"," Chemistry II CHEM-1002"," Introduction to Psychology: PSYC-1001.01"," Introduction to Psychology: PSYC-1001.02"],B=(n.Component,Object(n.createContext)()),O=function(e){var a=Object(n.useState)([{id:"ANSC-1003",name:"Animal Care Management ANSC-1003",description:"Animal Care Management is an introductory course focusing on the proper care and husbandry of many animal species commonly kepts as pets. Emphasis is placed on nutrition, feeding, housing, breeding and health maintenance of dogs, cats, ferrets, birds, fish, pocket pets and some exotic pets.",times:"M/W/F 1:00 PM - 1:50 PM",location:"Borger Academic Building, Room 108",limit:"15/25"},{id:"ANSC-1010",name:"Animal Health Skills ANSC-1010",description:"This course introduces the student to more in-depth skills involving animal care and handling, concentrating on the dog and cat. Anatomy and physiology, diseases and conditions affecting these species and entry level skills such as first aid, intramuscular and subcutaneous injections techniques, obtaining vital signs, bandaging and splinting techniques and basic laboratory procedures are taught.",times:"T/TH 9:00 AM - 11:00 AM",location:"Borger Academic Building, Room 210",limit:"10/15"},{id:"ANSC-1400",name:"Introduction to Animal Science ANSC-1400",description:"An introduction to the broad field of animal science. The course develops a basic understanding of each of the major types of domestic animals, with particular attention to nutrition and reproduction",times:"M/W/F 9:00 AM - 9:50 AM",location:"Borger Academic Building, Davis Hall",limit:"20/30"},{id:"ANSC-2100",name:"Small Animal Behavior ANSC-2100",description:"A generalized overview of the fundamental principles of animal behavior, including normal patterns of behavior; the principals of learning theory and behavior modification; nuisance and abnormal behaviors of pet animals; development and socialization of cats and dogs; and pet selection counseling. Students will have the opportunity to work hands-on with various species of domestic animals.",times:"M/W/F 2:00 PM - 2:50 PM",location:"Marsh Hall, Large CR Lecture",limit:"20/30"},{id:"MATH-1200.01",name:"College Algebra MATH-1200.01",description:"The topics covered include properties of number systems, polynomials, linear and quadratic equations and inequalities, radical equations, absolute value equations, systems of equations and inequalities, graphing, and verbal problems. A grade of C or higher is required to advance in the AVMA accredited Veterinary Technology programs.",times:"M/W/F 11:30 AM - 12:20 PM",location:"Borger Academic Building, Room 220",limit:"30/40"},{id:"MATH-1200.02",name:"College Algebra MATH-1200.02",description:"The topics covered include properties of number systems, polynomials, linear and quadratic equations and inequalities, radical equations, absolute value equations, systems of equations and inequalities, graphing, and verbal problems. A grade of C or higher is required to advance in the AVMA accredited Veterinary Technology programs.",times:"TH 6:25 PM - 8:55 PM",location:"Borger Academic Building, Room 108",limit:"25/35"},{id:"CHEM-1002",name:"Chemistry II CHEM-1002",description:"A continuation of Chemistry 1001. The basics of organic chemistry and the fundamentals of biochemistry are covered. The application of biochemistry to the health sciences is emphasized. Some topics include functional groups, nomenclature and reactions of organic compounds, carbohydrates, proteins, lipids, and nucleic acids. Prerequisite: Chemistry 1001",times:"T/TH 1:15 PM - 2:30 PM",location:"Borger Academic Building, Room 108",limit:"6/15"},{id:"PSYC-1001.01",name:"Introduction to Psychology PSYC-1001.01",description:"An introduction to the basic concepts and fundamental principles of human behavior using the historical background of psychology as a foundation, and present theory and research as a tool to explore principles of learning, human development motivation, stress, personality, interpersonal skills and mental health.",times:"W 6:15 PM - 8:45 PM",location:"Borger Academic Building, Room 110",limit:"13/50"},{id:"PSYC-1001.02",name:"Introduction to Psychology PSYC-1001.01",description:"An introduction to the basic concepts and fundamental principles of human behavior using the historical background of psychology as a foundation, and present theory and research as a tool to explore principles of learning, human development motivation, stress, personality, interpersonal skills and mental health.",times:"M/W/F 8:00 AM - 8:50 AM",location:"Borger Academic Building, Room 210",limit:"40/50"}]),t=Object(o.a)(a,2),r=t[0],l=t[1];return i.a.createElement(B.Provider,{value:[r,l]},e.children)},P=function(e){var a=e.name,t=e.description,n=e.times,r=e.location,l=e.limit;return i.a.createElement(M.a,{container:!0,direction:"row",justify:"center",alignItems:"center"},i.a.createElement("div",{className:"courses"},i.a.createElement("h2",null,a),i.a.createElement("h4",null,t),i.a.createElement("h3",null,"Location: ",r,i.a.createElement("br",null),"Times: ",n," ",i.a.createElement("br",null)," Seats: ",l)))},w=function(){var e=Object(n.useContext)(B),a=Object(o.a)(e,1)[0];return i.a.createElement("div",null,a.map((function(e){return i.a.createElement(P,{key:e.id,name:e.name,description:e.description,times:e.times,location:e.location,limit:e.limit})})))},T=function(e){Object(v.a)(t,e);var a=Object(f.a)(t);function t(){return Object(g.a)(this,t),a.apply(this,arguments)}return Object(b.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"CourseList"},i.a.createElement(O,null,i.a.createElement("h2",null," Available Courses:"),i.a.createElement(w,null)))}}]),t}(n.Component),j=function(e){Object(v.a)(t,e);var a=Object(f.a)(t);function t(){return Object(g.a)(this,t),a.apply(this,arguments)}return Object(b.a)(t,[{key:"render",value:function(){return i.a.createElement(M.a,{container:!0,className:"LeftPaneTabGrid"},i.a.createElement("h1",null,"Welcome to your Course Selection Portal!"),i.a.createElement("h2",null,"Please review the courses that are available. You will read through the course descriptions, view the class times and location. On the next section you will select 4 classes that you intend to take."," "),i.a.createElement("h3",null,i.a.createElement("b",null,i.a.createElement("i",null,"You will also be required to choose two alternate classes in the event that your preferred choice has a waitlist at the time your submission is received and reviewed by your Academic Advisor."))))}}]),t}(n.Component),I=function(e){return i.a.createElement(M.a,{container:!0,spacing:2},i.a.createElement(M.a,{item:!0,xs:12,sm:5},i.a.createElement(j,null)),i.a.createElement(M.a,{item:!0,xs:12,sm:7},i.a.createElement(T,{className:"Paper"})))},k=t(4),H=t(133),q=t(135),R=t(130),F=t(132),L=t(134),x=t(131),Y=t(87),W=Object(k.a)((function(e){return{head:{backgroundColor:e.palette.common.black,color:e.palette.common.white},body:{fontSize:16}}}))(R.a),D=Object(k.a)((function(e){return{root:{"&:nth-of-type(odd)":{backgroundColor:e.palette.action.hover}}}}))(x.a);function z(e,a,t,n,i){return{courseNumber:e,courseName:a,semester:t,creditsEarned:n,grade:i}}var G=[z("ENGL-1001","English Composition I","Fall 2019",3,"A-"),z("BIOL-1001","Biology I","Fall 2019",4,"B"),z("BIOL-1005","A & P Domestic Animals I","Fall 2019",4,"B"),z("MGMT-1000","Introduction to Business Model","Fall 2019",3,"A"),z("BIOL-1002"," Biology II","Spring 2020",4,"B"),z("BIOL-1006"," A & P Domestic Animals II","Spring 2020",4,"B"),z("CHEM-1001 ","Chemistry","Spring 2020",4,"B+"),z("ANSC-1005 ","Animal Facilities Design & Mgt","Spring 2020",3,"A")];var V=G.map((function(e){return e.creditsEarned})).reduce((function(e,a){return e+a}),0);function J(){return i.a.createElement(F.a,{component:Y.a},i.a.createElement(H.a,{className:"CreditHistoryTable",size:"size","aria-label":"credit evaluation table"},i.a.createElement(L.a,null,i.a.createElement(x.a,null,i.a.createElement(W,{align:"left"},"Course Number"),i.a.createElement(W,{align:"left"},"Course Name"),i.a.createElement(W,{align:"left"},"Semester"),i.a.createElement(W,{align:"center"},"Credits Earned"),i.a.createElement(W,{align:"center"},"Grade"))),i.a.createElement(q.a,null,G.map((function(e){return i.a.createElement(D,{key:e.name},i.a.createElement(W,{component:"th",scope:"row"},e.courseNumber),i.a.createElement(W,{align:"left"},e.courseName),i.a.createElement(W,{align:"left"},e.semester),i.a.createElement(W,{align:"center"},e.creditsEarned),i.a.createElement(W,{align:"center"},e.grade))})),i.a.createElement(x.a,null,i.a.createElement(R.a,{rowSpan:3}),i.a.createElement(R.a,{colSpan:2},i.a.createElement("b",null,"Total Credits Earned")),i.a.createElement(R.a,{align:"center"},i.a.createElement("b",null,V))))))}var U=t(61),X=function(e){Object(v.a)(t,e);var a=Object(f.a)(t);function t(e){var n;return Object(g.a)(this,t),(n=a.call(this,e)).state={status:""},n.submitForm=n.submitForm.bind(Object(E.a)(n)),n.handleChange=n.handleChange.bind(Object(E.a)(n)),n}return Object(b.a)(t,[{key:"handleChange",value:function(e){this.setState(Object(U.a)({},e.target.name,e.target.value))}},{key:"render",value:function(){var e=this.state.status,a=[" Animal Care Management: ANSC-1003"," Animal Health Skills: ANSC-1010"," Introduction to Animal Science: ANSC-1400"," Small Animal Behavior: ANSC-2100"," College Algebra: MATH-1200.01"," College Algebra: MATH-1200.02"," Chemistry: CHEM-1001"," Introduction to Psychology: PSYC-1001.01"," Introduction to Psychology: PSYC-1001.02"].map((function(e){return i.a.createElement("option",{value:e},e)}));return i.a.createElement(M.a,{container:!0,direction:"row",justify:"center",alignItems:"center"},i.a.createElement("div",{className:"dropdown"},i.a.createElement("form",{onSubmit:this.submitForm,action:"https://formspree.io/mlepzrlb",method:"POST"},i.a.createElement("h1",null,"Select your courses and Submit"),i.a.createElement(M.a,{item:!0},i.a.createElement("select",{placebolder:"select a course",name:"course1",value:this.state.course1,onChange:this.handleChange},a),i.a.createElement("br",null),i.a.createElement("select",{name:"course2",value:this.state.course2,onChange:this.handleChange},a),i.a.createElement("br",null),i.a.createElement("select",{name:"course3",value:this.state.course3,onChange:this.handleChange},a),i.a.createElement("br",null),i.a.createElement("select",{name:"course4",value:this.state.course4,onChange:this.handleChange},a),i.a.createElement("br",null),i.a.createElement("select",{name:"altcourse1",value:this.state.altcourse1,onChange:this.handleChange},a),i.a.createElement("br",null),i.a.createElement("select",{name:"altcourse2",value:this.state.altcourse2,onChange:this.handleChange},a),i.a.createElement("br",null),"SUCCESS"===e?i.a.createElement("p",null,"Thanks!"):i.a.createElement("button",null,"Submit"),"ERROR"===e&&i.a.createElement("p",null,"Ooops! There was an error.")))),i.a.createElement("div",{className:"ListedCourses"},i.a.createElement(M.a,{item:!0,container:!0,direction:"column",justify:"center",alignItems:"center"},i.a.createElement("div",null,i.a.createElement("h1",null,"Your selected courses you submitted:"),i.a.createElement("h2",null,"First Choice Selections:"),i.a.createElement("h4",null,"1. ",this.state.course1),i.a.createElement("h4",null,"2. ",this.state.course2),i.a.createElement("h4",null,"3. ",this.state.course3),i.a.createElement("h4",null,"4. ",this.state.course4)),i.a.createElement("div",null,i.a.createElement("h2",null,"Second Choice Selections:"),i.a.createElement("h4",null,"1. ",this.state.altcourse1),i.a.createElement("h4",null,"2. ",this.state.altcourse2)))))}},{key:"submitForm",value:function(e){var a=this;e.preventDefault();var t=e.target,n=new FormData(t),i=new XMLHttpRequest;i.open(t.method,t.action),i.setRequestHeader("Accept","application/json"),i.onreadystatechange=function(){i.readyState===XMLHttpRequest.DONE&&(200===i.status?(t.reset(),a.setState({status:"SUCCESS"})):a.setState({status:"ERROR"}))},i.send(n)}}]),t}(n.Component);function $(e){var a=e.children,t=e.value,n=e.index,r=Object(c.a)(e,["children","value","index"]);return i.a.createElement("div",Object.assign({role:"tabpanel",hidden:t!==n,id:"wrapped-tabpanel-".concat(n),"aria-labelledby":"wrapped-tab-".concat(n)},r),t===n&&i.a.createElement(s.a,{p:3},i.a.createElement(m.a,null,a)))}function K(e){return{id:"wrapped-tab-".concat(e),"aria-controls":"wrapped-tabpanel-".concat(e)}}function Q(){var e=i.a.useState(0),a=Object(o.a)(e,2),t=a[0],n=a[1];return i.a.createElement("div",{className:"TabsRoot"},i.a.createElement(u.a,{className:"TabsAppBar",position:"static"},i.a.createElement(d.a,null,i.a.createElement(m.a,{variant:"h4"},"My Student Portal: Course Selection ")),i.a.createElement(h.a,{value:t,onChange:function(e,a){n(a)},variant:"scrollable",scrollButtons:"auto","aria-label":"Course Selection"},i.a.createElement(p.a,Object.assign({className:"TabsBar",label:"Descriptions",wrapped:!0},K(0))),i.a.createElement(p.a,Object.assign({className:"TabsBar",label:"Course Selection Form",wrapped:!0},K(1))),i.a.createElement(p.a,Object.assign({className:"TabsBar",label:"Credit Summary",wrapped:!0},K(2))))),i.a.createElement($,{className:"TabsLayoutPanel",value:t,index:0},i.a.createElement(I,null)),i.a.createElement($,{className:"TabsLayoutPanel",value:t,index:1},i.a.createElement(X,null)),i.a.createElement($,{className:"TabsLayoutPanel",value:t,index:2},i.a.createElement(J,null)))}var Z=function(){return i.a.createElement("div",{className:"App"},i.a.createElement(Q,{className:"Layout"}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(Z,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[74,1,2]]]);
//# sourceMappingURL=main.38de90ce.chunk.js.map