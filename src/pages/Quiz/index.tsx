import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { MdQuestionAnswer } from 'react-icons/md'

import { ApplicationState } from '../../store'
import QuizModel from '../../types/quiz'
import useLoadQuizList from '../../hooks/loadQuizList'
import {
  Container,
  Title,
  QuestionsContainer,
  QuestionCard,
  QuestionTitle,
  AnswaresContainer,
  AnswareItem,
  RadioButton,
  AnswareText,
  QuestionCardHeader,
  ConfirmButton,
} from './styles'

const Quiz: React.FC = () => {
  const { id } = useParams()
  const [quizData, setQuizData] = useState<QuizModel | null>(null)

  const { loading } = useLoadQuizList()

  const { quizList } = useSelector((state: ApplicationState) => state.quiz)

  useEffect(() => {
    for (const quiz of quizList)
      if (quiz.id === Number(id)) {
        setQuizData(quiz)
        break
      }
  }, [id, quizList])

  function handleConfirm() {
    console.log('Confirmated')
  }

  return (
    <Container>
      {loading && <div>carregando...</div>}

      {!loading && quizData !== null && (
        <>
          <Title>{quizData.name} Quiz</Title>

          <QuestionsContainer>
            {quizData.questions?.map(question => (
              <QuestionCard key={question.id}>
                <QuestionCardHeader>
                  <MdQuestionAnswer color='#FFF' size={24} />
                  
                  <QuestionTitle>{question.title}</QuestionTitle>
                </QuestionCardHeader>

                <AnswaresContainer>
                  {question.answers?.map((answare, index) => (
                    <AnswareItem key={index}>
                      <RadioButton
                        name={`answare-${question.id}`}
                        value={index + 1}
                      />
                      <AnswareText>{answare.title}</AnswareText>
                    </AnswareItem>
                  ))}
                </AnswaresContainer>
              </QuestionCard>
            ))}
          </QuestionsContainer>

          <ConfirmButton onClick={handleConfirm}>Confirm</ConfirmButton>
        </>
      )}
    </Container>
  )
}

export default Quiz