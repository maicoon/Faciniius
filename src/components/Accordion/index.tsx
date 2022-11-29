import React, { useState } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";

const Accordion = ({ question }: any) => {
  const [clicked, setClicked] = useState(0);

  const toggle = index => {
    if (clicked === index) {
      //if clicked question is already active, then close it
      return setClicked(null);
    }
    setClicked(index);
  };

  return (
    <div className="AccordionSection">
      <div className="containerAccordion">
          {question.map((item, index) => {
            return (
              <React.Fragment key={index}>
                <div className="wrapperAccordion" onClick={() => toggle(index)} key={index}>
                  <h1
                    dangerouslySetInnerHTML={{ __html: item.question }}  
                    style={clicked === index ? { color: "hsl(36, 72%, 48%)" }: null} 
                  />
                  

                  <span>{clicked === index ? <FiMinus color="hsl(36, 72%, 48%)" /> : <FiPlus />}</span>
                </div>
                {clicked === index ? (
                  <div className="dropdown">
                    <p dangerouslySetInnerHTML={{ __html: item.answer }}/>
                  </div>
                ) : null}
              </React.Fragment>
            );
          })}
      </div>
    </div>
  );
};

export default Accordion;