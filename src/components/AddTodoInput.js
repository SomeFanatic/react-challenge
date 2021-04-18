import React from 'react'
import styled from 'styled-components'
import { IoIosArrowDown } from 'react-icons/io';

export const AddTodoInput = () => {
  return (
    <AddTodoContainer>
      <ArrowDownIcone/>
      <AddTodo placeholder="What needs to be done?" />
    </AddTodoContainer>
  )
}
const AddTodoContainer = styled.div`
  position: relative;
  padding: 16px 16px 16px 0;
  border: none;
  background: rgba(0, 0, 0, 0.003);
  box-shadow: inset 0 -2px 1px rgb(0 0 0 / 3%);
  margin: 0;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`
const ArrowDownIcone = styled(IoIosArrowDown)`
  width: 32px;
  height: 32px;
  margin: 0 24px 0 4px;
  fill: grey;
`

const AddTodo = styled.input`
  border: none;
  background: transparent;
  margin: 0;
  width: 100%;
  font-size: 24px;
  font-family: inherit;
  font-weight: inherit;
  line-height: 1.4em;
  box-sizing: border-box;
`