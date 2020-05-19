import React, { useState, useEffect } from 'react'
import { MdQuestionAnswer } from 'react-icons/md'

import { colors } from '../../assets/styles'
import {
  Container,
  Header,
  Title,
  AddQuizButton,
  QuizzesContainer,
  QuizItem,
  QuizName,
} from './styles'
import Quiz from '../../types/quiz'

const Home: React.FC = () => {
  const [quizzes, setQuizzes] = useState<Quiz[]>([])

  useEffect(() => {
    (() => {
      setQuizzes([
        { id: 1, name: 'Spider Man' },
        { id: 2, name: 'Fortnite' },
      ])
    })()
  }, [])

  return (
    <Container>
      <Header>
        <Title>Your Quizzes</Title>

        <AddQuizButton>Create Quiz</AddQuizButton>
      </Header>

      <QuizzesContainer>
        {quizzes.map(quiz => (
          <QuizItem key={quiz.id}>
            <MdQuestionAnswer color={colors.primary} size={24} />
            <QuizName>{quiz.name}</QuizName>
          </QuizItem>
        ))}
      </QuizzesContainer>
    </Container>
  )
}

export default Home
