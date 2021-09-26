import AssigmentElement from "./AssigmentElement";

const AssigmentContainer = ({ assigments }) => {
  return (
    <div className="assigment-container">
    {
      assigments.map((assigment, index) => (
        <AssigmentElement assigment={assigment} id={index}></AssigmentElement>
      ))
    }
      
    </div>
  );
}

export default AssigmentContainer;