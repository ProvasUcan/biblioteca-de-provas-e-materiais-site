import { useState, useContext } from "react";
import { apiBaseUrl } from "../../config/apiConfig";
import { SearchContext } from "../../pages/HomePage/HomePage";

const AssigmentElement = ({ assigment, id, previewAssigment, downloadAssigment }) => {
  const searchContext = useContext(SearchContext)

  return (
    <div className="assigment-item" onClick={() => {
      previewAssigment(id)
    }}>
      <img id={'img-' + id} src={assigment} alt="" className="assigment-item-preview" />

      <div className="assigment-item-hover-container">
        <ul className="hover-container-menu">
          <li className="hover-container-menu--item">
            <img src="./img/fluent_eye-show-24-filled.svg" alt="View assigment" className="hover-container-menu--item-img" onClick={(e) => {
              e.stopPropagation();
              previewAssigment(id)
            }} />
          </li>

          <li onClick={(e) => {
            e.stopPropagation();
            console.log('Assigment ', assigment)
            downloadAssigment(assigment, searchContext.name)
          }} className="hover-container-menu--item">
            <img src="./img/akar-icons_download.svg" alt="Download assigment" className="hover-container-menu--item-img" />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default AssigmentElement;