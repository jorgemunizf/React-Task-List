import React, { useState } from "react";

import "./AddTask.css";
import Button from "./Button";

const AddTask = ({ handleTaskAddition }) => {
  const [inputData, setInputData] = useState("");

  const handleInpuChange = (e) => {
    setInputData(e.target.value);
  };

  const handleTaskClick = () => {
    handleTaskAddition(inputData);
    setInputData("");
  };

  return (
    <div className="add-task-container">
      <input
        onChange={handleInpuChange}
        value={inputData}
        className="add-task-input"
        type="text"
      />
      ;
      <div className="add-task-button-container">
        <Button onClick={handleTaskClick}>Adicionar</Button>
      </div>
    </div>
  );
};

export default AddTask;
