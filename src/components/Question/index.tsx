import React, { useState, useEffect } from 'react'

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

export interface QuestionData {
  id: number;
  questionName: string;
  answare1: string;
  answare2: string;
  answare3: string;
  answare4: string;
  correctAnsware: number;
}

export interface Props {
  id: number;
  position: number;
  onDelete?: (id: number) => void;
  onChange?: (data: QuestionData) => void;
}

const Question: React.FC<Props> = ({ id, position, onDelete, onChange }) => {
  const [questionName, setQuestionName] = useState('')
  const [answare1, setAnsware1] = useState('')
  const [answare2, setAnsware2] = useState('')
  const [answare3, setAnsware3] = useState('')
  const [answare4, setAnsware4] = useState('')
  const [correctAnsware, setCorrectAnsware] = useState(1)

  useEffect(() => {
    if (onChange) {
      onChange({
        id,
        questionName,
        answare1,
        answare2,
        answare3,
        answare4,
        correctAnsware,
      })
    }
  }, [id, questionName, answare1, answare2, answare3, answare4, correctAnsware, onChange])

  function handleDelete() {
    if (onDelete) onDelete(id)
  }

  return (
    <Container key={id}>
      <Header>
        <Title>Question {position}</Title>
        <DeleteButton onClick={handleDelete}>Delete</DeleteButton>
      </Header>

      <Input placeholder='Question name' value={questionName} onChange={e => setQuestionName(e.target.value)}/>
      
      <AnswersContainer>
        <AnswerItem>
          <RadioButton
            name={`answer-${id}`}
            value={1}
            checked={correctAnsware === 1}
            onChange={e => setCorrectAnsware(Number(e.target.value))}
          /> 
          <AnswerInput
            placeholder='First Answer'
            value={answare1}
            onChange={e => setAnsware1(e.target.value)}
          />
        </AnswerItem>

        <AnswerItem>
          <RadioButton
            name={`answer-${id}`}
            value={2}
            checked={correctAnsware === 2}
            onChange={e => setCorrectAnsware(Number(e.target.value))}
          />  
          <AnswerInput
            placeholder='Second Answer'
            value={answare2}
            onChange={e => setAnsware2(e.target.value)}
          />
        </AnswerItem>

        <AnswerItem>
          <RadioButton
            name={`answer-${id}`}
            value={3}
            checked={correctAnsware === 3}
            onChange={e => setCorrectAnsware(Number(e.target.value))}
          />  
          <AnswerInput
            placeholder='Third Answer'
            value={answare3}
            onChange={e => setAnsware3(e.target.value)}
          />
        </AnswerItem>
        <AnswerItem>
          <RadioButton
            name={`answer-${id}`}
            value={4}
            checked={correctAnsware === 4}
            onChange={e => setCorrectAnsware(Number(e.target.value))}
          />  
          <AnswerInput
            placeholder='Fourth Answer'
            value={answare4}
            onChange={e => setAnsware4(e.target.value)}
          />
        </AnswerItem>
      </AnswersContainer>
    </Container>
  )
}

export default Question
