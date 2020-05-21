import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { ApplicationState } from '../../store'
import QuizModel from '../../types/quiz'
import useLoadQuizList from '../../hooks/loadQuizList'
import {
  Container,
  Title,
  QuestionsContainer,
  QuestionCard,
  ConfirmButton,
} from './styles'

interface AnswareChoice {
  answareId: number;
  questionId: number;
}

const Quiz: React.FC = () => {
  const { id } = useParams()
  const [quizData, setQuizData] = useState<QuizModel | null>(null)
  const [answareChoices, setAnswareChoices] = useState<AnswareChoice[]>([])
  const [checkedAnswares, setCheckedAnswares] = useState(false)

  const { loading } = useLoadQuizList()

  const { quizList } = useSelector((state: ApplicationState) => state.quiz)

  useEffect(() => {
    for (const quiz of quizList)
      if (quiz.id === Number(id)) {
        setQuizData(quiz)
        break
      }
  }, [id, quizList])

  function handleAnswareChange(answareId: number, questionId: number) {
    setAnswareChoices(prevState => {
      const answareChoice = prevState.find(ac => ac.questionId === questionId)

      if (!answareChoice) {
        prevState.push({ answareId, questionId })
      } else {
        answareChoice.answareId = answareId
      }

      return prevState
    })
  }

  function handleConfirm() {
    if (checkedAnswares) {
      setCheckedAnswares(false)
      return
    }
    if (!quizData) return

    const questionsLength = Number(quizData?.questions?.length)

    if (answareChoices.length < questionsLength) {
      alert('All questions must be answered')
      return
    }

    setCheckedAnswares(true)
  }

  return (
    <Container>
      {loading && <div>carregando...</div>}

      {!loading && quizData !== null && (
        <>
          <Title>{quizData.name} Quiz</Title>

          <QuestionsContainer>
            {quizData.questions?.map(question => (
              <QuestionCard
                key={question.id}
                question={question}
                onChange={handleAnswareChange}
                showAnswares={checkedAnswares}
              />
            ))}
          </QuestionsContainer>

          <ConfirmButton onClick={handleConfirm}>
            {checkedAnswares ? 'Hide Response' : 'Confirm'}
          </ConfirmButton>
        </>
      )}
    </Container>
  )
}

export default Quiz