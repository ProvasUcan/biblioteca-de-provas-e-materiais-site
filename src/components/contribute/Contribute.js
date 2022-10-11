import React, { useState, useEffect } from "react";
import Form from "./form/Form";

const Contribute = ({ getAllCoursesStructure }) => {
  const [forms, setForms] = useState([]);
  const [formId, setFormId] = useState(0);
  const [allCoursesStructure, setAllCoursesStructure] = useState({});

  const handleAllCourseStructure = React.useCallback(
    async function () {
      if (Object.keys(allCoursesStructure).length === 0) {
        const courses = await getAllCoursesStructure();

        setAllCoursesStructure(courses);
      }
    },
    [getAllCoursesStructure, allCoursesStructure]
  );

  const createForm = () => {
    if (Object.keys(allCoursesStructure).length !== 0) {
      const form = {
        formId: "form-" + formId,
        handleDelete: deleteForm,
        allCoursesStructure: allCoursesStructure,
      };

      setForms((prev) => prev.concat(form));
      setFormId((formId) => formId + 1);
    } else {
      //alert("Carrengando estrutura de cursos");
    }
  };

  const deleteForm = (id) => {
    setForms((prev) => prev.filter((form) => form.formId !== id));
  };

  useEffect(() => {
    handleAllCourseStructure();
  }, []);

  return (
    <div className="contribute-container">
      <img
        src="./img/undraw_Team_re_0bfe.svg"
        alt="Error not found"
        className="contributers-ilustration"
      />

      <div className="text-container">
        <h1 className="desc-text">
          Aqui a sua contribuição e ajuda têm valor{" "}
        </h1>
      </div>
      <button className="create-new-form" onClick={createForm}>
        Contribuir
      </button>

      <div className="contribute-form-container">
        {forms.map((form, index) => (
          <Form
            id={form.formId}
            key={form.formId}
            handleDelete={form.handleDelete}
            allCoursesStructure={form.allCoursesStructure}
          ></Form>
        ))}
      </div>
    </div>
  );
};

export default Contribute;
