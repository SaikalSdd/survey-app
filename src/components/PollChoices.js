import React, {useState} from "react";

const PollChoices = ({optionsImg, optionsText,selected}) => {
  const [optionText, setAnswer] = useState(optionsText);
  return (
    <div className="questionBox">
      
      {/* {optionText.map((text, index) => (
        <button
          key={index}
          className="answerBtn"
          onClick={() => {
            setAnswer([text]);
            selected(text);
          }}
        >
          {text}
        </button> */}
      ))}
    </div>
  );
};

export default PollChoices;
