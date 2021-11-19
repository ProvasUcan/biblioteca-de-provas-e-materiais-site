import { useState, useEffect } from "react";
import Form from "./form/Form";

const Contribute = ({ getAllCoursesStructure }) => {
  const [forms, setForms] = useState([]);
  const [formId, setFormId] = useState(0);
  const [allCoursesStructure, setAllCoursesStructure] = useState({});


  const handleAllCourseStructure = async function () {
    const courses = await getAllCoursesStructure();

    setAllCoursesStructure(courses);
  }

  function createForm() {
    if (Object.keys(allCoursesStructure).length !== 0) {
      const auxForms = forms;

      auxForms.push({
        formId: 'form-' + formId,
        handleDelete: deleteForm,
        allCoursesStructure: allCoursesStructure
      })
      setForms(auxForms);
      setFormId(formId + 1);
    } else {
      alert('Carrengando estrutura de cursos');
    }

  }

  function deleteForm(id) {
    setForms((prev) => {
      const auxForms = [];

      const deleteIndex = Number(id.split('-')[1]);

      for (let i = 0; i < forms.length; i++) {
        const deleteIndexForm = Number(forms[i].formId.split('-')[1]);

        if (deleteIndexForm !== deleteIndex) {
          auxForms.push(forms[i])
        }
      }

      return auxForms;
    })
  }

  useEffect(() => {
    handleAllCourseStructure()
  }, [])

  return (
    <div className="contribute-container">
      <img src="./img/undraw_Team_re_0bfe.svg" alt="Error not found" className="contributers-ilustration" />

      <div className="text-container">
        <h1 className="desc-text">Aqui a sua contribuição e ajuda têm valor </h1>
      </div>
      <button className="create-new-form" onClick={createForm}>Contribuir</button>

      <div className="contribute-form-container">
        {
          forms.map((form, index) => (
            <Form id={form.formId} key={form.formId} handleDelete={form.handleDelete} allCoursesStructure={form.allCoursesStructure}></Form>
          ))
        }
      </div>
    </div>
  );
}

export default Contribute;