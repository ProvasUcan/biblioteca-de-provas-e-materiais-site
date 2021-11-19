import React, { useState, useEffect } from 'react'
import { Link, Switch } from 'react-router-dom'
import AdminGuard from '../../../../services/security/guards/adminGuard'
import { getSubjects } from '../../../../services/remote/subject/subjectRemote'
import { getCourses } from '../../../../services/remote/course/courseRemote'

import { createCourseSubject, getCoursesSubjects, deleteCourseSubject, updateCourseSubject } from '../../../../services/remote/courseSubject/courseSubject.js'
import ContainerItem from '../Components/ContainerItem'

function ManagementCourseSubjectPage({ auth }) {
  const [showCreateForm, setShowCreateForm] = useState(false)
  const [courseName, setCourseName] = useState('')
  const [courses, setCourses] = useState([])
  const [subjectName, setSubjectName] = useState('')
  const [subjects, setSubjects] = useState([])
  const [year, setYear] = useState(1)
  const [years, setYears] = useState([1, 2, 3, 4, 5, 6])
  const [semestre, setSemestre] = useState(1)
  const [semestres, setSemestres] = useState([1, 2])


  const handleCreateCourseSubject = async (e) => {
    e.preventDefault();

    try {
      const res = await createCourseSubject({
        course: courseName,
        subject: subjectName,
        year,
        semestre
      })
      console.log(res)
    } catch (error) {
      console.log(error)
    }
  }

  const handleGetCoursesSubjects = async () => {
    try {
      const res = await getCoursesSubjects()

      setSubjects(res)
    } catch (error) {
      console.log(error)
    }
  }

  const handleDeleteSubject = async (id) => {
    try {
      const res = await deleteCourseSubject(id)
    } catch (error) {
      console.log(error)
    }
  }

  const handleUpdateSubject = async (id, value) => {
    try {
      const res = await updateCourseSubject(id, {
        subject: value
      })
    } catch (error) {
      console.log(error)
    }
  }

  const handleShowCreateForm = () => {
    setShowCreateForm(!showCreateForm)
  }

  const handleGetSubjects = async () => {
    try {
      const res = await getSubjects()

      setSubjectName(res[0].subject)
      setSubjects(res)
    } catch (error) {
      console.log(error)
    }
  }

  const handleGetCourses = async () => {
    try {
      const res = await getCourses()

      setCourseName(res[0].course)
      setCourses(res)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    handleGetCourses()
    handleGetSubjects()
  }, [])
  return (
    <div className="Subject-controller-main-container">
      <div className="top-container">
        <ul className="Subject-main-controller-panel">
          <button
            className="create-button"
            onClick={handleShowCreateForm}
          >
            {!showCreateForm ? 'Criar Associação' : 'Ocultar Formulário'}
          </button>
        </ul>
      </div>

      {
        showCreateForm &&
        <>
          <div className="form-container">
            <form onSubmit={handleCreateCourseSubject}>
              <p>Curso: <select
                name="course"
                id="course"
                onChange={(e) => {
                  setCourseName(e.target.value)
                }}
                className="search-container--element"
              >
                {
                  courses.map(course => (
                    <option value={course.course}>{course.course}</option>
                  ))
                }
              </select></p>


              <p>Ano: <select
                name="year"
                id="year"
                className="search-container--element"
                onChange={(e) => {
                  setYear(Number(e.target.value))
                }}
              >
                {
                  years.map(year => (
                    <option value={year}>{year}</option>
                  ))
                }
              </select></p>

              <p>Semestre: <select
                name="semestre"
                id="semestre"
                className="search-container--element"
                onChange={(e) => {
                  setSemestre(Number(e.target.value))
                }}
              >
                {
                  semestres.map(semestre => (
                    <option value={semestre}>{semestre}</option>
                  ))
                }
              </select></p>

              <p>Disciplina: <select
                name="subject"
                id="subject"
                className="search-container--element"
                onChange={(e) => {
                  setSubjectName(e.target.value)
                }}
              >
                {
                  subjects.map(subject => (
                    <option value={subject.subject}>{subject.subject}</option>
                  ))
                }
              </select></p>


              <input type="submit" value="Criar Associação" className="create-button" />
            </form>
          </div>
          <hr />
        </>
      }


      <div className="display-container-items">
        {
          subjects.map(subject => (
            <ContainerItem
              id={subject._id}
              name={subject.subject}
              handleUpdate={handleUpdateSubject}
              handleDelete={handleDeleteSubject}
              key={subject._id}
            ></ContainerItem>
          ))
        }
      </div>
    </div>
  )
}

export default ManagementCourseSubjectPage
