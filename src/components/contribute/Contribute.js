import { useState } from "react";
import Form from "./form/Form";

const Contribute = () => {
  const [forms, setForms] = useState([]);
  const [formId, setFormId] = useState(0);

  function createForm() {
    setForms(forms.concat([<Form id={'form-' + formId} handleDelete={deleteForm}></Form>]));
    setFormId(formId + 1);
  }

  function deleteForm(id) {
    setForms(forms.filter(form => form.id !== id))
  }

  return ( 
    <div className="contribute-container">
      <img src="./img/undraw_Team_re_0bfe.svg" alt="Contributers" className="contributers-ilustration" />

      <button className="create-new-form" onClick={createForm}>Criar Form</button>

      <div className="contribute-form-container">
      {
        forms.map(form => (
          form
        ))
      }
      </div>
    </div>
   );
}
 
export default Contribute;