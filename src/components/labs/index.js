import React from "react";
import { Link } from "react-router-dom";
import Classes from "./classes";
import ConditionalOutput from "./conditional-output";
import ReduxExamples from "./redux-examples";
import Styles from "./styles";
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
          <ReduxExamples />
          {/* <TodoItem /> */}
          <TodoList />
          <ConditionalOutput />
          <Styles/>
          <Classes/>
          </>
    )
};

export default Labs;
