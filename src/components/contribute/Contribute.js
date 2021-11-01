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
    setForms(forms.filter(form => form.formId !== id))
  }

  useEffect(() => {
    handleAllCourseStructure()
  }, [])

  return (
    <div className="contribute-container">
      <img src="./img/undraw_Team_re_0bfe.svg" alt="Contributers" className="contributers-ilustration" />

      <button className="create-new-form" onClick={createForm}>Criar Form</button>

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