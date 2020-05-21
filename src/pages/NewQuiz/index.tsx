import React, { useState } from 'react'
import { FiPlusCircle } from 'react-icons/fi'
import { useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import { ApplicationState } from '../../store'
import { setQuizList } from '../../store/ducks/quiz/actions'
import { QuestionData } from '../../components/QuestionForm'
import * as QuizStorage from '../../storage/quiz'
import * as QuestionStorage from '../../storage/question'
import * as AnswareStorage from '../../storage/answer'
import Quiz from '../../types/quiz'
import Answer from '../../types/answer'
import Question from '../../types/question'
import validate from './validate'
import {
  useStyles,
  Container,
  Title,
  Input,
  Form,
  CreateButton,
  AddQuestionButton,
  QuestionsContainer,
  QuestionForm,
} from './styles'

const NewQuiz: React.FC = () => {
  const [loading, setLoading] = useState(false)
  const [quizName, setQuizName] = useState('')
  const [questions, setQuestions] = useState([1])
  const [questionsData, setQuestionsData] = useState<QuestionData[]>([] as QuestionData[])

  const { quizList } = useSelector((state: ApplicationState) => state.quiz)
  
  const dispatch = useDispatch()
  const classes = useStyles()
  const history = useHistory()

  function saveQuiz(): Promise<Quiz> {
    return QuizStorage.create(quizName)
  }

  async function saveQuestions(quizId: number): Promise<Question[]> {
    const questions: Question[] = []

    for (const questionData of questionsData) {
      const question = await QuestionStorage.create(questionData.questionTitle, quizId)

      question.answers = await saveAnswares(question.id, questionData)

      questions.push(question)
    }

    return questions
  }

  async function saveAnswares(questionId: number, questionData: QuestionData): Promise<Answer[]> {
    const answare1 = await AnswareStorage.create(
      questionId,
      questionData.answare1,
      questionData.correctAnsware === 1
    )
    const answare2 = await AnswareStorage.create(
      questionId,
      questionData.answare2,
      questionData.correctAnsware === 2
    )
    const answare3 = await AnswareStorage.create(
      questionId,
      questionData.answare3,
      questionData.correctAnsware === 3
    )
    const answare4 = await AnswareStorage.create(
      questionId,
      questionData.answare4,
      questionData.correctAnsware === 4
    )

    return [answare1, answare2, answare3, answare4]
  }

  function saveQuizOnReduxState(quiz: Quiz) {
    quizList.push(quiz)
    dispatch(setQuizList(quizList))
  }

  async function handleCreate() {
    if (loading) return

    const errors = validate(quizName, questionsData)

    if (errors) {
      if (errors.quizName)
        alert(errors.quizName)
      if (errors.questionsData)
        alert(errors.questionsData)

      return
    }

    setLoading(true)
    
    const quiz = await saveQuiz()
    quiz.questions = await saveQuestions(quiz.id)

    saveQuizOnReduxState(quiz)

    setLoading(false)
    history.push('/')
  }

  function handleAddQuestion() {
    setQuestions(prevState => ([...prevState, prevState.length + 1]))
  }

  function handleDeleteQuestion(id: number) {
    setQuestions(prevState => {
      return prevState.filter(questionId => questionId !== id)
    })

    setQuestionsData(prevState => {
      return prevState.filter(value => value.id !== id)
    })
  }

  function handleQuestionChange(data: QuestionData) {
    setQuestionsData(prevState => {
      const questionDataIndex = prevState.findIndex(qd => qd.id === data.id)

      if (questionDataIndex === -1) {
        prevState.push(data)
      } else {
        prevState[questionDataIndex] = data
      }

      return prevState
    })
  }

  return (
    <Container className={classes.root}>
      <Title>Create a new quiz</Title>

      <Form>
        <Input
          label='Quiz name'
          variant='outlined'
          onChange={e => setQuizName(e.target.value)}
        />

        <QuestionsContainer>
          {questions.map((id, index) => (
            <QuestionForm
              key={id}
              id={id}
              position={index + 1}
              onDelete={handleDeleteQuestion}
              onChange={handleQuestionChange}
            />
          ))}
        </QuestionsContainer>

        <AddQuestionButton onClick={handleAddQuestion}>
          <FiPlusCircle color='white' size={24} />
          
          <span>Add Question</span>
        </AddQuestionButton>

        <CreateButton onClick={handleCreate}>
          {!loading ? 'Create' : 'Saving...'}
        </CreateButton>
      </Form>
    </Container>
  )
}

export default NewQuiz