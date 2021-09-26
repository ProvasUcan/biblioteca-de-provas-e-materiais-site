import AssigmentElement from "./AssigmentElement";

const AssigmentContainer = ({ assigments }) => {
  return (
    <div className="assigment-container">
    {
      assigments.map(assigment => (
        <AssigmentElement assigment={assigment}></AssigmentElement>
      ))
    }
      
    </div>
  );
}

export default AssigmentContainer;