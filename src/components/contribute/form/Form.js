import { useState, useEffect } from "react";

const Form = ({ id, handleDelete, allCoursesStructure }) => {
  const [avaibleCourses, setAvailableCourses] = useState([]);
  const [avaibleYears, setAvaibleYears] = useState([]);
  const [avaibleSemestres, setAvaibleSemestres] = useState([]);
  const [avaibleSubjects, setAvaibleSubjects] = useState([]);

  const [courseSelected, setCourseSelected] = useState('');
  const [yearSelected, setYearSelected] = useState('');
  const [semestreSelected, setSemestreSelected] = useState('');
  const [subjectSelected, setSubjectSelected] = useState('');
  const [coursesStructure, setCoursesStructure] = useState({});

  const setInitialStateOfForm = async () => {
    const courses = Object.keys(allCoursesStructure);

    if (courses.length !== 0) {
      setCoursesStructure(allCoursesStructure);
      setAvailableCourses(courses);

      const course = courses[0];
      setCourseSelected(course);

      const year = Object.keys(allCoursesStructure[course][course])[0]
      setAvaibleYears(Object.keys(allCoursesStructure[course][course]));
      setYearSelected(year);

      const semestre = Object.keys(allCoursesStructure[course][course][year])[0];
      setSemestreSelected(semestre);
      setAvaibleSemestres(Object.keys(allCoursesStructure[course][course][year]));

      setSubjectSelected(Object.keys(allCoursesStructure[course][course][year][semestre])[0]);
      setAvaibleSubjects(Object.keys(allCoursesStructure[course][course][year][semestre]));
    }
  }

  const handleYearChange = (e) => {
    const year = e.target.value;

    setYearSelected(year);
    setAvaibleSemestres(Object.keys(allCoursesStructure[courseSelected][courseSelected][year]));
    setAvaibleSubjects(Object.keys(allCoursesStructure[courseSelected][courseSelected][year][semestreSelected]));
  }

  const handleSemestre = (e) => {
    const semestre = e.target.value;

    setSemestreSelected(semestre);
    setAvaibleSubjects(Object.keys(allCoursesStructure[courseSelected][courseSelected][yearSelected][semestre]));
  }

  const submitForm = (e, id) => {
    e.preventDefault();
    var form = new FormData();

    const destFolder = `${document.getElementById('course').value},${document.getElementById('year').value},${document.getElementById('semestre').value},${document.getElementById('subject').value},${document.getElementById('documentType').value}`;
    const userEmail = document.getElementById('userEmail').value
    const files = document.getElementById('files').files;

    form.append('destFolder', destFolder);
    form.append('userEmail', userEmail);
    form.append('files', files);

    console.log(form)

    fetch("http://localhost:3000/upload/submission", {
      method: "POST",
      body: form
    })
    .then((res) => {
      console.log(res);
    })
    .catch((error) => {
      console.log(error);
    });
  }

  useEffect(() => {
    setInitialStateOfForm();
  }, [])

  return (
    <form id={id} enctype="multipart/form-data" className="form-container" method="POST" onSubmit={(e) => {
      submitForm(e, id);
    }}>
      <h1 className="subject-form-name">{subjectSelected}</h1>
      <div className="form-row-line">
        <select name="course" id="course" className="search-container--element" >
          {
            avaibleCourses.map(course => (
              <option value={course}> {course} </option>
            ))
          }

        </select>

        <select onChange={handleYearChange} name="year" id="year" className="search-container--element">
          {
            avaibleYears.map(year => (
              <option value={year}> {year} </option>
            ))
          }

        </select>

        <select onChange={handleSemestre} name="semestre" id="semestre" className="search-container--element">
          {
            avaibleSemestres.map(semestre => (
              <option value={semestre}> {semestre} </option>
            ))
          }
        </select>

        <select name="subject" id="subject" className="search-container--element">
          {
            avaibleSubjects.map(subject => (
              <option value={subject}> {subject} </option>
            ))
          }
        </select>

        <select name="documentType" id="documentType" className="search-container--element">
          <option value="Frequências">Frequências</option>
          <option value="Exames">Exames</option>
          <option value="Recursos">Recursos</option>
        </select>
      </div>
      <input type="email" name="userEmail" id="userEmail" placeholder="example@gmail.com"/>
      <button className="delete-button" onClick={() => {
        handleDelete(id);
      }}>Deletar</button>

      <div className="photo-container">
        <input type="file" name="files" id="files" multiple="true" />
      </div>

      <button type="submit">Enviar</button>
    </form>
  );
}

export default Form;