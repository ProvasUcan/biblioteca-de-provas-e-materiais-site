import React, { useState } from 'react'

function ContainerItem({ id, name, handleUpdate, handleDelete }) {
  const [submitValue, setSubmitValue] = useState(name)
  const [textInputDisable, setTextInputDisable] = useState(true)

  return (
    <div className="management-container-element">
      {
        !textInputDisable &&
        <p className="info-text">Clique <strong>ENTER</strong> ao final da edição</p>
      }
      <div className="management-container-element-top">
        <input type="text"
          name="course-name"
          className="management-input-field-text" id="course-name-item" onKeyUp={(e) => {
            if (e.keyCode === 13) {
              handleUpdate(id, submitValue)
              setTextInputDisable(true)
            }
          }}
          value={submitValue}
          disabled={textInputDisable}
          onChange={(e) => {
            setSubmitValue(e.target.value)
          }}
        />
        <button className="management-edit-button" onClick={() => {
          if (!textInputDisable) {
            setSubmitValue(name)
          }
          setTextInputDisable(!textInputDisable)
        }}>{textInputDisable ? 'Editar' : 'Cancelar'}</button>
      </div>
      <button className="management-delete-button-course-element" onClick={() => {
        handleDelete(id)
      }}>Deletar</button>
    </div>
  )
}

export default ContainerItem
