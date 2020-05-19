import React from 'react'

import {
  Container,
  Header,
  Title,
  DeleteButton,
  Input,
  AnswersContainer,
  AnswerItem,
  RadioButton,
  AnswerInput,
} from './styles'

export interface Props {
  id: number;
  onDelete?: (id: number) => void;
}

const Question: React.FC<Props> = ({ id, onDelete }) => {

  function handleDelete() {
    if (onDelete) onDelete(id)
  }

  return (
    <Container key={id}>
      <Header>
        <Title>Question {id}</Title>
        <DeleteButton onClick={handleDelete}>Delete</DeleteButton>
      </Header>

      <Input placeholder='Question name'/>
      
      <AnswersContainer>
        <AnswerItem>
          <RadioButton name={`answer-${id}`} /> 
          <AnswerInput placeholder='First Answer' />
        </AnswerItem>

        <AnswerItem>
          <RadioButton name={`answer-${id}`} /> 
          <AnswerInput placeholder='Second Answer' />
        </AnswerItem>

        <AnswerItem>
          <RadioButton name={`answer-${id}`} /> 
          <AnswerInput placeholder='Third Answer' />
        </AnswerItem>
        <AnswerItem>
          <RadioButton name={`answer-${id}`} /> 
          <AnswerInput placeholder='Fourth Answer' />
        </AnswerItem>
      </AnswersContainer>
    </Container>
  )
}

export default Question
