import { useState, useEffect } from "react";

const SearchContainer = (
  {
    handleSearch,
    handleActualCourseChange,
    handleActualSubjectChange,
    handleActualDocumentType,
    actualCourse,
    actualSubject,
    actualDocumentType
  }
) => {

  const [actualYear, setActualYear] = useState(0);
  const [actualSemestre, setActualSemestre] = useState(0);
  const [courses, setCourses] = useState([]);
  const [years, setYears] = useState([]);
  const [semestres, setSemestres] = useState([]);
  const [subjects, setSubjects] = useState([]);

  const searchStructure = async (selectedCourse = '', selectedYear = 0, selectedSemestre = 0) => {
    let auxCourse = await fetch('http://192.168.0.29:3000/courses/');
    auxCourse = (await auxCourse.json()).courses;
    setCourses(auxCourse);

    const course = selectedCourse === '' ? auxCourse[0] : actualCourse;

    let auxYears = await fetch(`http://192.168.0.29:3000/courses/${course}/years`);
    auxYears = (await auxYears.json()).years;
    setYears(auxYears);

    const year = selectedYear === 0 ? auxYears[0] : actualYear;

    let auxSemestres = await fetch(`http://192.168.0.29:3000/courses/${course}/${year}/semestres`);
    auxSemestres = (await auxSemestres.json()).semestres;
    setSemestres(auxSemestres);

    const semestre = selectedSemestre === 0 ? auxSemestres[0] : actualSemestre;
    let auxSubjects = await fetch(`http://192.168.0.29:3000/courses/${course}/${year}/${semestre}/subjects`);
    auxSubjects = (await auxSubjects.json()).subjects;
    setSubjects(auxSubjects);


    setActualYear(year);
    setActualSemestre(semestre);

    handleActualCourseChange(course);
    handleActualSubjectChange(auxSubjects[0]);
    handleActualDocumentType('Frequências');
  }

  const yearChange = function (e) {
    setActualYear(e.target.value);
    searchStructure(actualCourse, e.target.value);
  }
  const semestreChange = function (e) {
    setActualSemestre(e.target.value);
    searchStructure(actualCourse, actualYear, e.target.value);
  }

  const courseChange = function (e) {
    handleActualCourseChange(e.target.value);
    searchStructure(e.target.value);
  }
  const subjectChange = function (e) {
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