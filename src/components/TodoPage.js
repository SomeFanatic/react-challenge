import React from "react";
import styled from "styled-components";
import { Footer } from "./Footer";
import { AddTodoInput } from "./AddTodoInput";
import { Todos } from "./Todos";

export const TodoPage = () => {
  const todos = [
    {id: 1, complete: false, value: "nové todo", category: "nákup", checked: true},
    {id: 2, complete: false, value: "Chlieb", category: "nákup", checked: true},
    {id: 3, complete: false, value: "Mlieko", category: "nákup", checked: false},
  ];
  const visible = true;
  return (
    <TodoPageContainer>
      <PageTitle>todos</PageTitle>
      <TodoForm>
        <AddTodoInput />
        <Todos todosArr={todos}/>
        <Footer 
          display={false} 
          count="2"
        />
      </TodoForm>
    </TodoPageContainer>
  );
};

// ---- STYLES ----

const TodoPageContainer = styled.div`
  width: 100%;
  height: 100vh;
  min-height: 100%;
  font: 14px "Helvetica Neue", Helvetica, Arial, sans-serif;
  line-height: 1.4em;
  background: #f5f5f5;
  color: #111111;
  font-weight: 300;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const PageTitle = styled.h1`
  width: 100%;
  font-size: 80px;
  font-weight: 200;
  text-align: center;
  color: #b83f45;
  text-rendering: optimizeLegibility;
`;

const TodoForm = styled.div`
  background: #fff;
  margin: 130px 0 40px 0;
  position: relative;
  box-shadow: 0 2px 4px 0 rgb(0 0 0 / 20%), 0 25px 50px 0 rgb(0 0 0 / 10%);
  font: 14px "Helvetica Neue", Helvetica, Arial, sans-serif;
  line-height: 1.4em;
  background: #f5f5f5;
  color: #111111;
  width: 100%;
  max-width: 550px;
  margin: 0 auto;
  font-weight: 300;
`;
