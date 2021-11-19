import { useState, useEffect } from "react";

const SearchContainer = (
  {
    handleSearch,
    handleActualCourseChange,
    handleActualSubjectChange,
    handleActualDocumentType,
    actualCourse,
    actualSubject,
    actualDocumentType,
    allCoursesStructure
  }
) => {

  const [actualYear, setActualYear] = useState('');
  const [actualSemestre, setActualSemestre] = useState('');
  const [courses, setCourses] = useState([]);
  const [years, setYears] = useState([]);
  const [semestres, setSemestres] = useState([]);
  const [subjects, setSubjects] = useState([]);
  const [coursesStructure, setCoursesStructure] = useState({});


  const searchStructure = async (selectedCourse = '', selectedYear = 0, selectedSemestre = 0) => {
    const courses = Object.keys(allCoursesStructure);

    if (courses.length !== 0) {
      setCoursesStructure(allCoursesStructure);
      setCourses(courses);

      const course = courses[0];

      const year = Object.keys(allCoursesStructure[course][course])[0]
      setYears(Object.keys(allCoursesStructure[course][course]));
      setActualYear(year);

      const semestre = Object.keys(allCoursesStructure[course][course][year])[0];
      setActualSemestre(semestre);
      setSemestres(Object.keys(allCoursesStructure[course][course][year]));


      setSubjects(Object.keys(allCoursesStructure[course][course][year][semestre]));

      handleActualCourseChange(course);
      handleActualSubjectChange(Object.keys(allCoursesStructure[course][course][year][semestre])[0]);
      handleActualDocumentType('Frequências');
    }



  }

  const yearChange = function (e) {
    const year = e.target.value;

    setActualYear(year);
    setSemestres(Object.keys(allCoursesStructure[actualCourse][actualCourse][year]));
    setSubjects(Object.keys(allCoursesStructure[actualCourse][actualCourse][year][actualSemestre]));

    setActualSemestre(Object.keys(allCoursesStructure[actualCourse][actualCourse][year])[0])
    handleActualSubjectChange(Object.keys(allCoursesStructure[actualCourse][actualCourse][year][actualSemestre])[0])
  }

  const semestreChange = function (e) {
    const semestre = e.target.value;

    setActualSemestre(semestre);
    setCourses(Object.keys(allCoursesStructure[actualCourse][actualCourse][actualYear][semestre]));

    handleActualSubjectChange(Object.keys(allCoursesStructure[actualCourse][actualCourse][actualYear][semestre])[0])
  }

  const courseChange = function (e) {
    handleActualCourseChange(e.target.value);
    const course = e.target.value;

    try {
      const years = Object.keys(allCoursesStructure[course][course])
      const semestres = Object.keys(allCoursesStructure[course][course][actualYear])
      const subjects = Object.keys(allCoursesStructure[course][course][actualYear][actualSemestre])

      setYears(years);
      setSemestres(semestres);
      setSubjects(subjects);
    } catch (err) {
      setYears([]);
      setSemestres([]);
      setSubjects([]);
    }
  }
  const subjectChange = function (e) {
    console.log(e.target.value)
    handleActualSubjectChange(e.target.value);
  }
  const documentTypeChange = function (e) {
    handleActualDocumentType(e.target.value);
  }



  useEffect(() => {
    searchStructure()
  }, [])

  return (
    <div className="search-container">
      <div className="search-container--top">
        <select onChange={courseChange} name="course" id="course" className="search-container--element" >
          {
            courses.map(course => (
              <option value={course}>{course}</option>
            ))
          }

        </select>

        <select onChange={yearChange} name="ano" id="ano" className="search-container--element">
          {
            years.map(year => (
              <option value={year}>{year} º Ano</option>
            ))
          }
        </select>

        <select onChange={semestreChange} name="semestre" id="semestre" className="search-container--element">
          {
            semestres.map(semestre => (
              <option value={semestre}>{semestre} º Semestre</option>
            ))
          }
        </select>

        <select onChange={subjectChange} name="subject" id="subject" className="search-container--element">
          {
            subjects.map(subject => (
              <option value={subject}>{subject}</option>
            ))
          }
        </select>

        <select onChange={documentTypeChange} name="documentType" id="documentType" className="search-container--element">
          <option value="Frequências">Frequências</option>
          <option value="Exames">Exames</option>
          <option value="Recursos">Recursos</option>
        </select>
      </div>
      <div className="search-container--bottom">
        <button onClick={handleSearch} className="search-button">Pesquisar</button>
      </div>
    </div>
  );
}

export default SearchContainer;