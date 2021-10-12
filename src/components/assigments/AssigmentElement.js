import { useState } from "react";
const AssigmentElement = ({ assigment, id, previewAssigment }) => {
  const [isPeding, setPending] = useState(false)

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

          <a href={assigment} className="hover-container-menu--item" download={assigment}>
            <img src="./img/akar-icons_download.svg" alt="Download assigment" className="hover-container-menu--item-img" />
          </a>
        </ul>
      </div>
    </div>
  );
}

export default AssigmentElement;