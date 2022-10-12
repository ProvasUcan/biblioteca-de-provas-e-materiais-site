import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import AssigmentContainer from "../../components/assigments/AssigmentContainer";
import SearchContainer from "../../components/search/SearchContainer";
import { download } from "../../helpers/download/downloadHelper";
export const SearchContext = React.createContext({});

function HomePage({ getAllCoursesStructure, getAssigments }) {
  const courseStructure = useSelector((state) => state.search);

  const [assigments, setAssigments] = useState([]);
  const [actualCourse, setActualCourse] = useState("");
  const [isAllCoursesStructurePending, setAllCoursesStructurePending] =
    useState(true);
  const [actualSubject, setActualSubject] = useState("");
  const [actualDocumentType, setActualDocumentType] = useState("");
  const [allCoursesStructure, setAllCoursesStructure] = useState({});
  const [
    errorWhileGettingAllCourseStructure,
    setErrorWhileGettingAllCourseStructure,
  ] = useState(false);
  const [isPedding, setIsPedding] = useState(false);

  const handleGetAssigment = async () => {
    setIsPedding(true);

    const actualCourseId = actualCourse.split("#")[0].trim();
    const actualSubjectId = actualSubject.split("#")[0].trim();

    try {
      const assigments = await getAssigments(
        actualCourseId,
        actualSubjectId,
        actualDocumentType
      );

      setIsPedding(false);
      setAssigments(assigments);
    } catch (error) {
      setIsPedding(false);
    }
  };

  const searchButton = async () => {
    await handleGetAssigment();
  };

  const courseChange = function (value) {
    setActualCourse(value);
  };
  const subjectChange = function (value) {
    setActualSubject(value);
  };
  const documentTypeChange = function (value) {
    setActualDocumentType(value);
  };

  const handleAllCourseStructure = React.useCallback(
    async function () {
      try {
        const courses = await getAllCoursesStructure();

        console.log(courses)

        setAllCoursesStructure(courses);
        setAllCoursesStructurePending(false);
        setErrorWhileGettingAllCourseStructure(false);
        setAllCoursesStructurePending(false);
      } catch (error) {
        console.log(error);
        setErrorWhileGettingAllCourseStructure(true);
        setAllCoursesStructurePending(false);
      }
    },
    [getAllCoursesStructure]
  );

  useEffect(() => {
    handleAllCourseStructure();
  }, [handleAllCourseStructure]);

  return (
    <div>
      {isAllCoursesStructurePending === false &&
        errorWhileGettingAllCourseStructure === false && (
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
          </>
        )}

      {isAllCoursesStructurePending === true &&
        !errorWhileGettingAllCourseStructure && (
          <div>
            <>
              <div className="loader-spinner"></div>
            </>
          </div>
        )}

      {errorWhileGettingAllCourseStructure && (
        <div>
          <p style={{ fontSize: "2rem" }}>
            Um erro aconteceu, lamentamos, contacte{" "}
            <b>provasucan01@gmail.com</b> para suporte e ajuda.
          </p>
        </div>
      )}

      <SearchContext.Provider
        value={{
          name: `${actualCourse} - ${actualSubject} - ${actualDocumentType}`,
        }}
      >
        <AssigmentContainer
          assigments={assigments}
          isPedding={isPedding}
          downloadAssigment={download}
        ></AssigmentContainer>
      </SearchContext.Provider>
    </div>
  );
}

export default HomePage;
