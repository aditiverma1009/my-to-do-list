import React from "react";
// import PropTypes from "prop-types";
import "./ToDoList.css";

const ToDoList = (props) => {
  return (
    <>
      <div className="to-do-list-container">
        <h1>ToDoList</h1>
        {props.todoList.map((eachListItem, index) => {
          return (
            <>
              <p key={index}>{eachListItem.text}</p>
              <button
                onClick={() => {
                  props.setCurrentTodo(index);
                  props.setPage("create-to-do");
                }}
              >
                Edit
              </button>
              <br />
            </>
          );
        })}
        <button onClick={props.onAddTodo}>Add new TODO</button>
      </div>
    </>
  );
};

ToDoList.propTypes = {};

export default ToDoList;
