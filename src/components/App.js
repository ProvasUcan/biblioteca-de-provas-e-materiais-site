import NavBar from "./navbar/NavBar";
import SearchContainer from "./search/SearchContainer";
import AssigmentContainer from "./assigments/AssigmentContainer";
import Contribute from "./contribute/Contribute";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React, { useState, useEffect } from "react";
import { apiBaseUrl } from "../config/apiConfig";
import { download } from "../helpers/downloadHelper";

export const SearchContext = React.createContext({})

const getAssigmentsFetcher = () => Promise.resolve([])

const App = () => {
  const [assigments, setAssigments] = useState([]);
  const [actualCourse, setActualCourse] = useState('');
  const [isAllCoursesStructurePending, setAllCoursesStructurePending] = useState(true);
  const [actualSubject, setActualSubject] = useState('');
  const [actualDocumentType, setActualDocumentType] = useState('');
  const [allCoursesStructure, setAllCoursesStructure] = useState({});
  const [isPedding, setIsPedding] = useState(false);

  const handleGetAssigments = async () => {
    setIsPedding(true);
    try {
      const auxAssigments = await getAssigmentsFetcher();
      setAssigments(auxAssigments);
    } catch (error) {
      console.log(error)
    } finally {
      setIsPedding(false);
    }
  }

  const getAssigments = async () => {
    setIsPedding(true);
    let auxAssigments = await fetch(`${apiBaseUrl}/courses/${actualCourse}/${actualSubject}/${actualDocumentType}`);
    auxAssigments = (await auxAssigments.json()).result.filesUrls;

    setAssigments(auxAssigments);
    setIsPedding(false)
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

  const getAllCoursesStructure = async function () {
    let auxAllCoursesStructure = await fetch(`${apiBaseUrl}/courses/all`);
    auxAllCoursesStructure = await auxAllCoursesStructure.json();

    setAllCoursesStructure(auxAllCoursesStructure.courses);
    setAllCoursesStructurePending(false);
  }

  useEffect(() => {
    getAllCoursesStructure();
  }, []);

  return (
    <Router>

      <div className="main-app-container">
        {
          isAllCoursesStructurePending === false &&
          <>
            <NavBar></NavBar>

            <Switch>
              <Route exact path="/biblioteca-de-provas-e-materiais-site/">
                <SearchContainer
                  handleActualCourseChange={courseChange}
                  handleActualSubjectChange={subjectChange}
                  handleActualDocumentType={documentTypeChange}
                  actualCourse={actualCourse}
                  actualSubject={actualSubject}
                  actualDocumentType={actualDocumentType}
                  allCoursesStructure={allCoursesStructure}
                  handleSearch={searchButton}
                ></SearchContainer>

                <SearchContext.Provider value={
                  { name: `${actualCourse} - ${actualSubject} - ${actualDocumentType}` }
                }>
                  <AssigmentContainer assigments={assigments} isPedding={isPedding} downloadAssigment={download}></AssigmentContainer>

                </SearchContext.Provider>

              </Route>

              <Route exact path="/biblioteca-de-provas-e-materiais-site/contribute">
                <Contribute allCoursesStructure={allCoursesStructure}></Contribute>
              </Route>
            </Switch>
          </>
        }
        {
          isAllCoursesStructurePending === true &&
          <div id={'sending-form-loader-container' + 0} className="sending-form-loader-container"
            style={{ display: 'flex', opacity: '1' }}>
            <>
              <div className="loader-spinner"></div>
              <h2 className="loader-spinner-text">Carregando ...</h2>
            </>
          </div>
        }
      </div>



    </Router>

  );
}

export default App;