import { useState } from "react";
const AssigmentElement = ({ assigment, id }) => {
  const [isPeding, setPending] = useState(false)

  return (
    <div className="assigment-item">
      <img id={'img-' + id} src={assigment} alt="" className="assigment-item-preview" />

      <div className="assigment-item-hover-container">
        <ul className="hover-container-menu">
          <li className="hover-container-menu--item">
            <img src="./img/fluent_eye-show-24-filled.svg" alt="View assigment" className="hover-container-menu--item-img" />
          </li>

          <a href={assigment} className="hover-container-menu--item" download>
            <img src="./img/akar-icons_download.svg" alt="Download assigment" className="hover-container-menu--item-img" />
          </a>
        </ul>
      </div>

      {isPeding &&
        <div className="loading-container">
          <img src="./img/eos-icons_loading.svg" alt="Loading Item" className="loading-element" />
        </div>
      }

    </div>
  );
}

export default AssigmentElement;