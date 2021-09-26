import { useState, useEffect } from "react";
const SearchContainer = () => {
  const [actualCourse, setActualCourse] = useState('Curso');
  const [courses, setCourses] = useState(['Curso']);
  const [year, setYear] = useState([]);
  const [semestre, setSemestre] = useState([]);
  const [subjects, setSubjects] = useState([]);

  const getAllCourses = () => {
    let courseNames = [];

    fetch('./academicStructure.json')
    .then((res) => res.json())
    .then((data) => {
      console.log('ASSASA')
      console.log(data)

    })
    .catch(err => {
      console.log(err);
    })
  }

  useEffect(() => {
    getAllCourses()
  }, [])

  return (
    <div className="search-container">
      <div className="search-container--top">
        <select name="course" id="course" className="search-container--element" >
          <option>Curso</option>
        </select>

        <select name="ano" id="ano" className="search-container--element">
          <option>Ano</option>
        </select>

        <select name="semestre" id="semestre" className="search-container--element">
          <option>Semestre</option>
        </select>

        <select name="subject" id="subject" className="search-container--element">
          <option>Curso</option>
        </select>

        <select name="documentType" id="documentType" className="search-container--element">
          <option>Curso</option>
        </select>
      </div>

      <button className="search-button">Pesquisar</button>
    </div>
  );
}

export default SearchContainer;