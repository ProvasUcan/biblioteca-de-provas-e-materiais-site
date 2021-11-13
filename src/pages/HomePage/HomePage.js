import React, { useState, useEffect } from 'react'
import AssigmentContainer from '../../components/assigments/AssigmentContainer';
import SearchContainer from '../../components/search/SearchContainer'
import { download } from '../../helpers/download/downloadHelper';

export const SearchContext = React.createContext({})


function HomePage({ getAllCoursesStructure, getAssigments }) {
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
      //const auxAssigments = await getAssigmentsFetcher();
      //setAssigments(auxAssigments);
    } catch (error) {
      console.log(error)
    } finally {
      setIsPedding(false);
    }
  }

  const handleGetAssigment = async () => {
    setIsPedding(true);
    const assigments = await getAssigments(actualCourse, actualSubject, actualDocumentType);

    setIsPedding(false);
    setAssigments(assigments)
  }

  const searchButton = async () => {
    await handleGetAssigment();
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

  const handleAllCourseStructure = async function () {
    try {
      const courses = await getAllCoursesStructure();

      setAllCoursesStructure(courses);
      setAllCoursesStructurePending(false);
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    handleAllCourseStructure();
  }, []);


  return (
    <div>
      {isAllCoursesStructurePending === false &&
        <>

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
  )
}

export default HomePage
