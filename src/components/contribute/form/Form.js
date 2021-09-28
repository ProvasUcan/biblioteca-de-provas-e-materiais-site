const Form = ({ id, handleDelete }) => {

  return ( 
    <form id={id} className="form-container">
      <div className="form-row-line">
      </div>
      <button className="delete-button" onClick={() => {
        handleDelete(id);
      }}>Deletar</button>
      <h1>dmdmsdi</h1>
    </form>
  );
}
 
export default Form;