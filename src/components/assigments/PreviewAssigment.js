import React, {useContext} from 'react'
import ReactDOM from 'react-dom'
import { download } from '../../helpers/download/downloadHelper'
import { SearchContext } from '../../pages/HomePage/HomePage'

function PreviewAssigment({ assigment, closePreviewAssigment, nextAssigment, prevAssigment, quantAssigments, actualAssigment }) {
  const searchContext = useContext(SearchContext)

  return ReactDOM.createPortal(
    <div id="assigment-preview-root" onClick={closePreviewAssigment}>
      <div className="preview-container">
        <div className="top-part-preview">
          <button className="download-button-preview-container preview-button" onClick={(e) => {
            e.stopPropagation()
            download(assigment, searchContext.name)
          }}>Download</button>

          <button className="close-button-preview-container preview-button" onClick={closePreviewAssigment}>Close</button>
        </div>

        <div className="preview-container--main-child">
          <button className="control-button prev-assigment" onClick={prevAssigment}>
            &lt;
          </button>

          <img src={assigment} alt="" className="preview-assigment-img" />

          <button className="control-button next-assigment" onClick={nextAssigment}>
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