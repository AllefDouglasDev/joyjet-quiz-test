import React, { useState } from 'react'
import { MdQuestionAnswer } from 'react-icons/md'

import Question from '../../types/question'
import Answer from '../../types/answer'
import {
  Container,
  Header,
  QuestionTitle,
  AnswaresContainer,
  AnswareItem,
  RadioButton,
  AnswareText,
} from './styles'

export interface Props {
  question: Question;
  showAnswares?: boolean;
  onChange?: (answareId: number, questionId: number) => void; 
}

const QuestionCard: React.FC<Props> = ({ question, onChange, showAnswares = false }) => {
  const [checkedAnsware, setCheckedAnsware] = useState(0)

  function handleRadio(answareId: number) {
    setCheckedAnsware(answareId)

    if (onChange) onChange(answareId, question.id)
  }

  function getColor(answare: Answer): string {
    if ((checkedAnsware === answare.id && answare.isCorrect) ||
      (checkedAnsware !== answare.id && answare.isCorrect))
      return 'green'
    if (checkedAnsware === answare.id && !answare.isCorrect)
      return 'red'

    return 'black'
  }

  return (
    <Container>
      <Header>
        <MdQuestionAnswer color='white' size={24} />
        
        <QuestionTitle>{question.title}</QuestionTitle>
      </Header>

      <AnswaresContainer>
        {question.answers?.map(answare => (
          <AnswareItem key={answare.id}>
            <RadioButton
              name={`answare-${question.id}`}
              value={answare.id}
              onChange={e => handleRadio(Number(e.target.value))}
              disabled={showAnswares}
            />

            <AnswareText color={showAnswares ? getColor(answare) : 'black'}>
              {answare.title}
            </AnswareText>
          </AnswareItem>
        ))}
      </AnswaresContainer>
    </Container>
  )
}

export default QuestionCard
