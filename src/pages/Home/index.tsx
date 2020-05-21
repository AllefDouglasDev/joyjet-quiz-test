import React from 'react'
import { MdQuestionAnswer } from 'react-icons/md'
import { FcTemplate } from 'react-icons/fc'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

import { colors } from '../../assets/styles'
import { ApplicationState } from '../../store'
import useLoadQuizList from '../../hooks/loadQuizList'
import {
  Container,
  Loading,
  Header,
  Title,
  AddQuizButton,
  QuizzesContainer,
  QuizItem,
  QuizName,
  EmptyQuizList,
} from './styles'

const Home: React.FC = () => {
  const { quizList } = useSelector((state: ApplicationState) => state.quiz)
  const { loading } = useLoadQuizList()

  const history = useHistory()

  function handleAddQuiz() {
    history.push('/quiz/new')
  }

  function handleQuizClicked(quizId: number) {
    return () => history.push(`/quiz/${quizId}`)
  }

  return (
    <Container>
      <Header>
        <Title>Your Quizzes</Title>

        <AddQuizButton onClick={handleAddQuiz}>Create Quiz</AddQuizButton>
      </Header>

      {loading && <Loading>loading...</Loading>}

      {!loading && quizList.length > 0 && (
        <QuizzesContainer>
          {quizList.map(quiz => (
            <QuizItem key={quiz.id} onClick={handleQuizClicked(quiz.id)}>
              <MdQuestionAnswer color={colors.primary} size={24} />
              <QuizName>{quiz.name}</QuizName>
            </QuizItem>
          ))}
        </QuizzesContainer>
      )}

      {!loading && quizList.length <= 0 && (
        <EmptyQuizList>
          You don't have any quiz
          <FcTemplate  color={colors.primary} size={150}/>
        </EmptyQuizList>
      )}
    </Container>
  )
}

export default Home
