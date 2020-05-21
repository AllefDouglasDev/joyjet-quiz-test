import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

import * as QuizStorage from '../../storage/quiz'
import * as QuestionStorage from '../../storage/question'
import * as AnswareStorage from '../../storage/answer'
import { QuestionData } from '../../components/QuestionForm'
import Quiz from '../../types/quiz'
import validate from './validate'
import {
  Container,
  Title,
  Input,
  Form,
  CreateButton,
  AddQuestionButton,
  QuestionForm,
} from './styles'

const NewQuiz: React.FC = () => {
  const [loading, setLoading] = useState(false)
  const [quizName, setQuizName] = useState('')
  const [questions, setQuestions] = useState([1])
  const [questionsData, setQuestionsData] = useState<QuestionData[]>([] as QuestionData[])

  const history = useHistory()

  async function saveQuiz(): Promise<Quiz> {
    const quiz = await QuizStorage.create(quizName)
    return quiz
  }

  async function saveQuestions(quizId: number): Promise<void> {
    for (const questionData of questionsData) {
      const question = await QuestionStorage.create(questionData.questionTitle, quizId)

      await saveAnswares(question.id, questionData)
    }
  }

  async function saveAnswares(questionId: number, questionData: QuestionData): Promise<void> {
    await AnswareStorage.create(
      questionId,
      questionData.answare1,
      questionData.correctAnsware === 1
    )
    await AnswareStorage.create(
      questionId,
      questionData.answare2,
      questionData.correctAnsware === 2
    )
    await AnswareStorage.create(
      questionId,
      questionData.answare3,
      questionData.correctAnsware === 3
    )
    await AnswareStorage.create(
      questionId,
      questionData.answare4,
      questionData.correctAnsware === 4
    )
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
    await saveQuestions(quiz.id)
    
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
      let index = -1

      for (let i = 0; i < prevState.length; i++) {
        if (prevState[i].id === data.id) {
          index = i
        }
      }

      if (index === -1) {
        prevState.push(data)
      } else {
        prevState[index] = data
      }

      return prevState
    })
  }

  return (
    <Container>
      <Title>Create a new quiz</Title>

      <Form>
        <Input placeholder='Quiz name?' onChange={e => setQuizName(e.target.value)} />

        <hr />

        {questions.map((id, index) => (
          <QuestionForm
            key={id}
            id={id}
            position={index + 1}
            onDelete={handleDeleteQuestion}
            onChange={handleQuestionChange}
          />
        ))}

        <AddQuestionButton onClick={handleAddQuestion}>Add Question</AddQuestionButton>

        <CreateButton onClick={handleCreate}>
          {!loading ? 'Create' : 'Saving...'}
        </CreateButton>
      </Form>
    </Container>
  )
}

export default NewQuiz