import React from 'react'
import styled from 'styled-components'
import { GiCircle } from 'react-icons/gi';
import { FcCheckmark } from 'react-icons/fc';

export const Todos = (props) => {
  return (
    <>
    {props.todosArr.map((todo) => 
      <TodoContainer>
        <TodoLabel htmlFor={todo.id}>
          <TodoInput type="checkbox" name={todo.id} id={todo.id}/>
          {todo.checked 
            ? 
            <IconeContainer>
              <CircleIcone/>
              <FcCheckmark/> 
            </IconeContainer>
            :
            <IconeContainer>
              <CircleIcone/>
            </IconeContainer>
          }
          {todo.value}
        </TodoLabel>
      </TodoContainer>
    )}
    </>
  )
}
const TodoContainer = styled.div`
  width: 100%;
`

const TodoLabel = styled.label`
  font-size: 24px;
  padding: 10px 0;
  height: 32px;
  width: 100%;
  border-bottom: 1px solid #ededed;
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: center;
`
const TodoInput = styled.input`
  height: 40px;
  display: none;
`
const IconeContainer = styled.div`
  position: relative;
  width: 40px;
  margin-right: 20px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const CircleIcone = styled(GiCircle)`
  position: absolute;
  top: 0;
  height: 32px;
  width: 32px;
  fill: #80808066;
`