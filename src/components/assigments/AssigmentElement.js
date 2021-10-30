import { useState, useContext } from "react";
import { SearchContext } from "../App";

const AssigmentElement = ({ assigment, id, previewAssigment, downloadAssigment }) => {
  const [isPeding, setPending] = useState(false)
  const searchContext = useContext(SearchContext)
  console.log(searchContext.name)

  return (
    <div className="assigment-item">
      <img id={'img-' + id} src={assigment} alt="" className="assigment-item-preview" />

      <div className="assigment-item-hover-container">
        <ul className="hover-container-menu">
          <li className="hover-container-menu--item">
            <img src="./img/fluent_eye-show-24-filled.svg" alt="View assigment" className="hover-container-menu--item-img" onClick={() => {
              previewAssigment(id)
            }} />
          </li>

          <li onClick={() => {
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