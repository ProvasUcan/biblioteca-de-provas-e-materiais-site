import React, { useState, useEffect } from 'react'
import { createSubject, getSubjects, deleteSubject, updateSubject } from '../../../../services/remote/subject/subjectRemote'
import ContainerItem from '../Components/ContainerItem'

function ManagementSubjectPage({ auth }) {
  const [showCreateForm, setShowCreateForm] = useState(false)
  const [subjectName, setSubjectName] = useState('')
  const [subjects, setSubjects] = useState([])

  const handleCreateSubject = async (e) => {
    e.preventDefault();

    try {
      await createSubject({
        subject: subjectName
      })
    } catch (error) {
      console.log(error)
    }
  }

  const handleGetSubjects = async () => {
    try {
      const res = await getSubjects()

      setSubjects(res)
    } catch (error) {
      console.log(error)
    }
  }

  const handleDeleteSubject = async (id) => {
    try {
      await deleteSubject(id)
    } catch (error) {
      console.log(error)
    }
  }

  const handleUpdateSubject = async (id, value) => {
    try {
      await updateSubject(id, {
        subject: value
      })
    } catch (error) {
      console.log(error)
    }
  }

  const handleShowCreateForm = () => {
    setShowCreateForm(!showCreateForm)
  }

  useEffect(() => {
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
            {!showCreateForm ? 'Criar Disciplina' : 'Ocultar Formulário'}
          </button>
        </ul>
      </div>

      {
        showCreateForm &&
        <>
          <div className="form-container">
            <form onSubmit={handleCreateSubject}>
              <input
                type="text"
                name="Subject-name"
                id="Subject-name"
                className="input-field-text"
                value={subjectName}
                onChange={(e) => {
                  setSubjectName(e.target.value)
                }} />

              <input type="submit" value="Criar" className="create-button" />
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

export default ManagementSubjectPage
