import React, { useState } from "react";
import PropTypes from "prop-types";
import "./CreateTodo.css";

const CreateTodo = ({ onClickHandler, currentTodoIndex, existingTodoText }) => {
  const [myTodo, setMyTodo] = useState(
    currentTodoIndex === -1 ? "" : existingTodoText
  );

  const onTextChange = (event) => {
    setMyTodo(event.target.value);
  };

  return (
    <div className="create-to-do-container">
      <h1>CreateTodo</h1>
      <textarea value={myTodo} onChange={onTextChange} />
      <div>
        <button onClick={() => onClickHandler(myTodo, currentTodoIndex)}>
          Submit
        </button>
      </div>
    </div>
  );
};

CreateTodo.propTypes = {
  onClickHandler: PropTypes.func,
  currentTodoIndex: PropTypes.number,
  existingTodoText: PropTypes.string,
};

export default CreateTodo;
