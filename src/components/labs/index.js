import React from "react";
import { Link } from "react-router-dom";
import Classes from "./classes";
import ConditionalOutput from "./conditional-output";
import Styles from "./styles";
// import TodoItem from "./todo/TodoItem";
import TodoList from "./todo/TodoList";

const Labs = () => {
    return(
        <>
        <h1>Labs</h1>
        <Link to="/hello">
              Hello
          </Link> |
          <Link to="/tuiter/home">
              Tuiter
          </Link>
          {/* <TodoItem /> */}
          <TodoList />
          <ConditionalOutput />
          <Styles/>
          <Classes/>
          </>
    )
};

export default Labs;
