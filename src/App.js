import { useState } from "react";
import "./App.css";
import CreateTodo from "./components/CreateTodo/CreateTodo";
import Profile from "./components/Profile/Profile";
import ToDoList from "./components/ToDoList/ToDoList";
import { UserContext, userData } from "./context/user-context";

function App() {
  const [page, setPage] = useState("create-to-do");
  const [currentTodoIndex, setCurrentTodo] = useState(-1); // 2
  const [todoList, settodoList] = useState([
    {
      text: "buy groceries",
    },
    {
      text: "take session",
    },
    {
      text: "call dad",
    },
  ]);

  const onClickHandler = (myTodo) => {
    // existing
    if (currentTodoIndex !== -1) {
      const updatedTodoList = todoList.map((eachTodo, index) => {
        if (index === currentTodoIndex) {
          return {
            text: myTodo,
          };
        }
        return eachTodo;
      });
      settodoList(updatedTodoList);
    }
    // new
    else {
      settodoList([...todoList, { text: myTodo }]);
    }
    setPage("to-do-list");
  };

  const existingTodoText = () => {
    const findText = todoList.find(
      (eachTodoItem, index) => index === currentTodoIndex
    );
    return findText ? findText.text : "";
  };

  return (
    <UserContext.Provider value={userData}>
      <div className="app-container">
        <Profile />
        {page === "create-to-do" ? (
          <CreateTodo
            onClickHandler={onClickHandler}
            currentTodoIndex={currentTodoIndex}
            existingTodoText={existingTodoText()}
          />
        ) : (
          <ToDoList
            todoList={todoList}
            onAddTodo={() => {
              setCurrentTodo(-1);
              setPage("create-to-do");
            }}
            setCurrentTodo={setCurrentTodo}
            setPage={setPage}
          />
        )}
      </div>
    </UserContext.Provider>
  );
}

export default App;
