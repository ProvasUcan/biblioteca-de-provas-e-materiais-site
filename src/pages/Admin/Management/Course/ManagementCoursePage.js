import React, { useState, useEffect } from 'react'
import { createCourse, getCourses, deleteCourse, updateCourse } from '../../../../services/remote/course/courseRemote'
import ContainerItem from '../Components/ContainerItem'

function ManagementCoursePage({ auth }) {
  const [showCreateForm, setShowCreateForm] = useState(false)
  const [courseName, setCourseName] = useState('')
  const [courses, setCourses] = useState([])

  const handleCreateCourse = async (e) => {
    e.preventDefault();

    try {
      await createCourse({
        course: courseName
      })
    } catch (error) {
      console.log(error)
    }
  }

  const handleGetCourses = async () => {
    try {
      const res = await getCourses()

      setCourses(res)
    } catch (error) {
      console.log(error)
    }
  }

  const handleDeleteCourse = async (id) => {
    try {
      await deleteCourse(id)
    } catch (error) {
      console.log(error)
    }
  }

  const handleUpdateCourse = async (id, value) => {
    try {
      await updateCourse(id, {
        course: value
      })
    } catch (error) {
      console.log(error)
    }
  }

  const handleShowCreateForm = () => {
    setShowCreateForm(!showCreateForm)
  }

  useEffect(() => {
    handleGetCourses()
  }, [])
  return (
    <div className="course-controller-main-container">
      <div className="top-container">
        <ul className="course-main-controller-panel">
          <button
            className="create-button"
            onClick={handleShowCreateForm}
          >
            {!showCreateForm ? 'Criar Curso' : 'Ocultar Formulário'}
          </button>
        </ul>
      </div>

      {
        showCreateForm &&
        <>
          <div className="form-container">
            <form onSubmit={handleCreateCourse}>
              <input
                type="text"
                name="course-name"
                id="course-name"
                className="input-field-text"
                value={courseName}
                onChange={(e) => {
                  setCourseName(e.target.value)
                }} />

              <input type="submit" value="Criar" className="create-button" />
            </form>
          </div>
          <hr />
        </>
      }


      <div className="display-container-items">
        {
          courses.map(course => (
            <ContainerItem
              id={course._id}
              name={course.course}
              handleUpdate={handleUpdateCourse}
              handleDelete={handleDeleteCourse}
              key={course._id}
            ></ContainerItem>
          ))
        }
      </div>
    </div>
  )
}

export default ManagementCoursePage
