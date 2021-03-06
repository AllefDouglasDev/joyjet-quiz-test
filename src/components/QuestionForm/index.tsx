import React, { useState, useEffect } from 'react'

import {
  useStyles,
  Container,
  Header,
  Title,
  DeleteButton,
  Input,
  AnswersContainer,
  AnswerItem,
  RadioButton,
  AnswerInput,
  AnswersTitle,
} from './styles'

export interface QuestionData {
  id: number;
  questionTitle: string;
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

const QuestionForm: React.FC<Props> = ({ id, position, onDelete, onChange }) => {
  const [questionTitle, setQuestionTitle] = useState('')
  const [answare1, setAnsware1] = useState('')
  const [answare2, setAnsware2] = useState('')
  const [answare3, setAnsware3] = useState('')
  const [answare4, setAnsware4] = useState('')
  const [correctAnsware, setCorrectAnsware] = useState(1)

  const classes = useStyles()

  useEffect(() => {
    if (onChange) {
      onChange({
        id,
        questionTitle,
        answare1,
        answare2,
        answare3,
        answare4,
        correctAnsware,
      })
    }
  }, [id, questionTitle, answare1, answare2, answare3, answare4, correctAnsware, onChange])

  function handleDelete() {
    if (onDelete) onDelete(id)
  }

  return (
    <Container className={classes.root} key={id}>
      <Header>
        <Title>Question {position}</Title>
        
        <DeleteButton onClick={handleDelete}>Delete</DeleteButton>
      </Header>

      <Input
        label='Question title'
        value={questionTitle}
        onChange={e => setQuestionTitle(e.target.value)}
        variant='outlined'
      />
      
      <AnswersContainer>
        <AnswersTitle>Inform the answares for this question</AnswersTitle>

        <AnswerItem>
          <RadioButton
            name={`answer-${id}`}
            value={1}
            checked={correctAnsware === 1}
            onChange={e => setCorrectAnsware(Number(e.target.value))}
          /> 
          <AnswerInput
            label='First Answer'
            value={answare1}
            onChange={e => setAnsware1(e.target.value)}
            variant='outlined'
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
            label='Second Answer'
            value={answare2}
            onChange={e => setAnsware2(e.target.value)}
            variant='outlined'
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
            label='Third Answer'
            value={answare3}
            onChange={e => setAnsware3(e.target.value)}
            variant='outlined'
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
            label='Fourth Answer'
            value={answare4}
            onChange={e => setAnsware4(e.target.value)}
            variant='outlined'
          />
        </AnswerItem>
      </AnswersContainer>
    </Container>
  )
}

export default QuestionForm
