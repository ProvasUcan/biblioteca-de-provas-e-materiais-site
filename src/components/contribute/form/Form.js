import React, { useState, useEffect } from "react";
import { generateRemoteDestFolder } from "../../../helpers/form/formHelper";
import { uploadAssigments } from "../../../services/remote/assigments/assigmentsRemote";

const Form = ({ id, handleDelete, allCoursesStructure }) => {
  const [avaibleCourses, setAvailableCourses] = useState([]);
  const [avaibleYears, setAvaibleYears] = useState([]);
  const [avaibleSemestres, setAvaibleSemestres] = useState([]);
  const [avaibleSubjects, setAvaibleSubjects] = useState([]);
  const [filesToSubmitList, setFilesToSubmitList] = useState([]);

  const [formState, setFormState] = useState('sended');

  const [courseSelected, setCourseSelected] = useState('');
  const [yearSelected, setYearSelected] = useState('');
  const [semestreSelected, setSemestreSelected] = useState('');
  const [subjectSelected, setSubjectSelected] = useState('');
  const [coursesStructure, setCoursesStructure] = useState({});

  const setInitialStateOfForm = React.useCallback(async () => {
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
  }, [allCoursesStructure])

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

  const activeLoader = (id) => {
    document.getElementById('sending-form-loader-container' + id).style.display = 'flex';
    document.getElementById('sending-form-loader-container' + id).style.opacity = '1';
  }

  const removeLoader = (id) => {
    document.getElementById('sending-form-loader-container' + id).style.opacity = '0';
    setTimeout(() => {
      document.getElementById('sending-form-loader-container' + id).style.display = 'none';
    }, 1505);
  }

  const submitForm = async (e, id) => {
    e.preventDefault();
    setFormState('sending');
    activeLoader(id);

    const files = document.getElementById('files' + id).files

    if (files.length !== 0) {
      const remoteDestFolder = generateRemoteDestFolder(
        document.getElementById('course').value,
        document.getElementById('year').value,
        document.getElementById('semestre').value,
        document.getElementById('subject').value,
        document.getElementById('documentType').value
      )
  
  
      const response = await uploadAssigments(
        remoteDestFolder,
        files
      )
      
      if (response) {
        setFormState('sended');
        setTimeout(() => {
          handleDelete(id);
        }, 10000);
      } else {
        setFormState('error');
        setTimeout(() => {
          removeLoader(id);
        }, 10000);
      }
    } else {
      
    }
    
  }

  const deleteIndividualFile = (index) => {
    const auxFileList = filesToSubmitList.filter((file, i) => i !== index);
    setFilesToSubmitList(auxFileList);
  }

  const addFiles = (id) => {
    const files = document.getElementById('files' + id).files;
    const auxFilesList = [];

    for (let actualFileIndex = 0; actualFileIndex < files.length; actualFileIndex++) {
      auxFilesList.push(files[actualFileIndex]);
    }

    setFilesToSubmitList(filesToSubmitList.concat(auxFilesList));
  }

  useEffect(() => {
    setInitialStateOfForm();
  }, [setInitialStateOfForm])

  return (
    <form id={id} encType="multipart/form-data" className="form-container" method="POST" onSubmit={(e) => {
      submitForm(e, id);
    }}>
      <span className="delete-button btn-standard" onClick={(e) => {
        e.stopPropagation();
        handleDelete(id);
      }}>Deletar</span>

      <h1 className="subject-form-name">{subjectSelected}</h1>
      <div className="form-row-line">
        <select
          name="course"
          id="course"
          className="search-container--element"
        >
          {
            avaibleCourses.map(course => (
              <option value={course}> {course} </option>
            ))
          }

        </select>

        <select
          name="year"
          id="year"
          className="search-container--element"
          onChange={handleYearChange}
        >
          {
            avaibleYears.map(year => (
              <option value={year}> {year}º Ano</option>
            ))
          }

        </select>

        <select
          name="semestre"
          id="semestre"
          className="search-container--element"
          onChange={handleSemestre}
        >
          {
            avaibleSemestres.map(semestre => (
              <option value={semestre}> {semestre}º Semestre </option>
            ))
          }
        </select>

        <select
          name="subject"
          id="subject"
          className="search-container--element"
          onChange={(e) => {
            setSubjectSelected(e.target.value)
          }}
        >
          {
            avaibleSubjects.map(subject => (
              <option value={subject}> {subject} </option>
            ))
          }
        </select>

        <select
          name="documentType"
          id="documentType"
          className="search-container--element"
        >
          <option value="Frequências">Frequências</option>
          <option value="Exames">Exames</option>
          <option value="Recursos">Recursos</option>
        </select>
      </div>
      <span className="add-more-content btn-standard">
        <input type="file" name="files" id={"files" + id} className="files-input" onChange={(e) => {
          e.stopPropagation();
          addFiles(id);
        }} multiple={true} />
        Adicionar Provas
      </span>


      <div className="photo-container">
        {
          filesToSubmitList.map((file, index) => (
            <div className="individual-file-container">
              <img
                src={URL.createObjectURL(file)}
                alt=""
                className="file-preview-img"
              />

              <button className="individual-file-container-delete-button" onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                deleteIndividualFile(index);
              }}>X</button>
            </div>
          ))
        }
      </div>

      <button type="submit" className="send-form-submission btn-standard">Enviar</button>

      <div id={'sending-form-loader-container' + id} className="sending-form-loader-container">
        {formState === 'sended' &&
          <>
            <div className="sended-signal-container"></div>
            <h2 className="loader-spinner-text">Sua submissão foi enviada &#128151;<br/>Nossos administradores a verificarão</h2>
          </>
        }
        {formState === 'sending' &&
          <>
            <div className="loader-spinner"></div>
            <h2 className="loader-spinner-text">Enviando Submissão...</h2>
          </>
        }

        {formState === 'error' &&
          <>
            <div className="error-signal-container"></div>
            <h2 className="loader-spinner-text error-text">Algum erro aconteceu<br/>Tente mais tarde!</h2>
          </>
        }

      </div>
    </form>
  );
}

export default Form;