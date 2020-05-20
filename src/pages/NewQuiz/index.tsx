import React, { useState } from 'react'

// import * as QuizStorage from '../../storage/quiz'
import { QuestionData } from '../../components/Question'
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
  const [quizName, setQuizName] = useState('')
  const [questions, setQuestions] = useState([1])
  const [questionsData, setQuestionsData] = useState<QuestionData[]>([] as QuestionData[])

  async function handleCreate() {
    // const quiz = await QuizStorage.create(quizName)
    // console.log(quiz)
    console.log(questionsData, quizName)
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

        <CreateButton onClick={handleCreate}>Create</CreateButton>
      </Form>
    </Container>
  )
}

export default NewQuiz