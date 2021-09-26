const AssigmentElement = () => {
  return ( 
    <div className="assigment-item">
      <img src="../../img/" alt="" className="assigment-item-preview" />

      <div className="assigment-item-hover-container">
        <ul className="hover-container-menu">
          <li className="hover-container-menu--item">
            <img src="../../img/fluent_eye-show-24-filled.svg" alt="View assigment" className="hover-container-menu--item-img" />
          </li>

          <li className="hover-container-menu--item">
            <img src="../../img/akar-icons_download.svg" alt="Download assigment" className="hover-container-menu--item-img" />
          </li>
        </ul>
      </div>

      <div className="loading-container">
        <img src="../../img/eos-icons_loading.svg" alt="Loading Item" className="loading-element" />
      </div>
    </div>
   );
}
 
export default AssigmentElement;