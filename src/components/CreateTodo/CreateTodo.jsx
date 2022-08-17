import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./CreateTodo.css";

const CreateTodo = ({ onClickHandler, currentTodoIndex, existingTodoText }) => {
  const [myTodo, setMyTodo] = useState(
    currentTodoIndex === -1 ? "" : existingTodoText
  );

  const [page, setPage] = useState(1);
  const [news, setNews] = useState([]);

  const pageSize = 10;

  let apiKey = "....your key...";
  // process.env.apiKey
  const onTextChange = (event) => {
    setMyTodo(event.target.value);
  };

  useEffect(() => {
    let link = `https://newsapi.org/v2/everything?q=bitcoin&apiKey=${apiKey}&pageSize=${pageSize}&page=${page}`;

    fetch(link)
      .then((response) => response.json())
      .then((data) => setNews(data.articles));

    return () => {
      console.log("clean up fn");
    };
  }, [page, apiKey]);

  return (
    <div className="create-to-do-container">
      <h1>CreateTodo</h1>
      <textarea value={myTodo} onChange={onTextChange} />
      <div>
        <button onClick={() => onClickHandler(myTodo, currentTodoIndex)}>
          Submit
        </button>
      </div>
      <div>
        <h1>News</h1>
        {news.map((eachNews) => {
          return (
            <div style={{ border: "1px solid black", padding: "20px" }}>
              <p>{eachNews.author}</p>
              <p>{eachNews.title}</p>
              <p>{eachNews.publishedAt}</p>
            </div>
          );
        })}
      </div>
      <button onClick={() => setPage(page + 1)}>Page change +</button>
    </div>
  );
};

CreateTodo.propTypes = {
  onClickHandler: PropTypes.func,
  currentTodoIndex: PropTypes.number,
  existingTodoText: PropTypes.string,
};

export default CreateTodo;
