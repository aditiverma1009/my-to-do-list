import React, { useContext } from "react";
import { UserContext } from "../../context/user-context";
// import PropTypes from "prop-types";
import "./ToDoList.css";

const ToDoList = (props) => {
  const { firstName, lastName } = useContext(UserContext);
  return (
    <>
      <div className="to-do-list-container">
        <h1>ToDoList</h1>
        <div>
          <p>First name: {firstName}</p>
          <p>Last name: {lastName}</p>
        </div>
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
