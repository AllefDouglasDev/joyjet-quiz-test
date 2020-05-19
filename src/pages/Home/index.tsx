import React, { useState, useEffect } from 'react'
import { MdQuestionAnswer } from 'react-icons/md'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'

import { colors } from '../../assets/styles'
import { ApplicationState } from '../../store'
import * as QuizStorage from '../../storage/quiz'
import { setQuizList } from '../../store/ducks/quiz/actions'
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
  const [loading, setLoading] = useState(true)

  const { quizList } = useSelector((state: ApplicationState) => state.quiz)

  const history = useHistory()
  const dispatch = useDispatch()

  useEffect(() => {
    (async () => {
      const quizzes = await QuizStorage.findAll()
      dispatch(setQuizList(quizzes))
      setLoading(false)
    })()
  }, [dispatch])

  function handleAddQuiz() {
    history.push('/quiz/new')
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
            <QuizItem key={quiz.id}>
              <MdQuestionAnswer color={colors.primary} size={24} />
              <QuizName>{quiz.name}</QuizName>
            </QuizItem>
          ))}
        </QuizzesContainer>
      )}

      {!loading && quizList.length <= 0 && (
        <EmptyQuizList>You don't have any quiz</EmptyQuizList>
      )}

    </Container>
  )
}

export default Home
