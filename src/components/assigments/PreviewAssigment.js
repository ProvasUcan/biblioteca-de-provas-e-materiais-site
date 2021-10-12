import React from 'react'
import ReactDOM from 'react-dom'

function PreviewAssigment({ assigment, closePreviewAssigment, nextAssigment, prevAssigment, quantAssigments, actualAssigment }) {
  return ReactDOM.createPortal(
    <div id="assigment-preview-root">
      <div className="preview-container">
        <div className="top-part-preview">
          <button className="download-button-preview-container">Download</button>
          <button className="close-button-preview-container" onClick={closePreviewAssigment}>Close</button>
        </div>

        <div className="preview-container--main-child">
          <button className="control-button prev-assigment" onClick={prevAssigment}>
            &lt;
          </button>

          <img src={assigment} alt="" className="preview-assigment-img" />

          <button className="control-button prev-assigment" onClick={nextAssigment}>
            &gt;
          </button>
        </div>

        <p className="preview-container-counter">{actualAssigment} de {quantAssigments} </p>
      </div>
    </div>
    ,
    document.getElementById('preview-root')
  )
}

export default PreviewAssigment
