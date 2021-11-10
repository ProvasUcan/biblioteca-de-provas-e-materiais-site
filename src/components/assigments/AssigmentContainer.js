import AssigmentElement from "./AssigmentElement";
import PreviewAssigment from "./PreviewAssigment";
import { useState } from 'react';

const Loader = () => {

  return (
    <div className="volume-div">
      <div className="volume-bar" id="volume-bar-1">

      </div>
      <div className="volume-bar" id="volume-bar-1">

      </div>
      <div className="volume-bar" id="volume-bar-1">

      </div>
      <div className="volume-bar" id="volume-bar-1">

      </div>
      <div className="volume-bar" id="volume-bar-1">

      </div>
      <div className="volume-bar" id="volume-bar-1">

      </div>
    </div>
  )
}


const AssigmentContainer = ({ assigments, isPedding, downloadAssigment }) => {
  const [actualAssigment, setActualAssigment] = useState(0);
  const [isPreviewAssigmentShowing, setIsPreviewAssigmentShowing] = useState(false)

  const previewAssigment = (id) => {
    id = Number(id.replace('assigment-', ''));
    setActualAssigment(id)
    setIsPreviewAssigmentShowing(true);
  }

  const closePreviewAssigment = () => {
    setIsPreviewAssigmentShowing(false);
  }

  const nextAssigment = (e) => {
    e.stopPropagation();

    if (actualAssigment + 1 < assigments.length) {
      setActualAssigment(actualAssigment + 1);
    }
  }

  const prevAssigment = (e) => {
    e.stopPropagation();

    if (actualAssigment > 0) {
      setActualAssigment(actualAssigment - 1);
    }
  }

  return (
    <div className="assigment-container">
      {(!isPedding && assigments.length > 0) &&
        assigments.map((assigment, index) => (
          <AssigmentElement assigment={assigment} id={'assigment-' + index} previewAssigment={previewAssigment} downloadAssigment={downloadAssigment}></AssigmentElement>
        ))
      }
      {(!isPedding && assigments.length === 0) &&
        <h2 className="no-assigments-text">Sem resultados!</h2>
      }
      {isPedding &&
        Loader()
      }
      {isPreviewAssigmentShowing &&
        <PreviewAssigment assigment={assigments[actualAssigment]} closePreviewAssigment={closePreviewAssigment} nextAssigment={nextAssigment} prevAssigment={prevAssigment} quantAssigments={assigments.length} actualAssigment={actualAssigment + 1}></PreviewAssigment>
      }
    </div>
  );
}

export default AssigmentContainer;