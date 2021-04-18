import React from 'react'
import styled from 'styled-components'

export const Footer = (props) => {
  return (
    <FooterContainer>
      <TodoCount>{props.count} items</TodoCount>
      <TodoCategory>All</TodoCategory>
      <TodoCategory>Active</TodoCategory>
      <TodoCategory>Completed</TodoCategory>
      <ClearTodoBtn>Clear completed</ClearTodoBtn>
    </FooterContainer>
  )
}

const FooterContainer = styled.div`
  /* display: block; */
  display: ${props => props.display ? "block" : "none"};
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr 2fr;
  align-content: space-between;
  padding: 10px;
  font-size: 15px;
`
const TodoCount = styled.span`
  text-align: left;
`
const TodoCategory = styled.span`

`
const ClearTodoBtn = styled.span`
  text-align: right;
  margin-right: 5px;
`