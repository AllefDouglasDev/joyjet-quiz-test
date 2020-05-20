import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { ApplicationState } from '../../store'
import QuizModel from '../../types/quiz'
import useLoadQuizList from '../../hooks/loadQuizList'
import {
  Container,
  Title,
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

  return (
    <Container>
      {loading && <div>carregando...</div> }
      {!loading && (
        <>
          <Title>Quiz works</Title>
          <Title>{quizData === null ? 'É nulo' : JSON.stringify(quizData)}</Title>
        </>
      )}
    </Container>
  )
}

export default Quiz