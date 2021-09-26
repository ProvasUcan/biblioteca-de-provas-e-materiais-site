import NavBar from "./navbar/NavBar";
import SearchContainer from "./search/SearchContainer";
import AssigmentContainer from "./assigments/AssigmentContainer";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useState } from "react";


const App = () => {
  const [assigments, setAssigments] = useState([]);
  const [actualCourse, setActualCourse] = useState('');
  const [actualSubject, setActualSubject] = useState('');
  const [actualDocumentType, setActualDocumentType] = useState('');

  const getAssigments = async () => {
    let auxAssigments = await fetch(`http://192.168.0.29:3000/course/${actualCourse}/${actualSubject}/${actualDocumentType}`);
    auxAssigments = (await auxAssigments.json()).result.filesUrls;

    console.log(auxAssigments)
    setAssigments(auxAssigments);
  }

  const searchButton = async () => {
    getAssigments();
  }

  const courseChange = function (value) {
    setActualCourse(value);
  }
  const subjectChange = function (value) {
    setActualSubject(value);
  }
  const documentTypeChange = function (value) {
    setActualDocumentType(value);
  }

  return (
    <Router>
      <div className="main-app-container">
        <NavBar></NavBar>

        <SearchContainer 
        handleActualCourseChange={courseChange}
        handleActualSubjectChange={subjectChange}
        handleActualDocumentType={documentTypeChange}
        actualCourse={actualCourse}
        actualSubject={actualSubject}
        actualDocumentType={actualDocumentType}
        handleSearch={searchButton}></SearchContainer>

        <AssigmentContainer assigments={assigments}></AssigmentContainer>
      </div>
    </Router>

  );
}

export default App;