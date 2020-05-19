import React, { useState, useEffect } from 'react'

import * as QuizStorage from '../../storage/quiz'
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

  async function handleCreate() {
    const quiz = await QuizStorage.create(quizName)
    console.log(quiz)
  }

  function handleAddQuestion() {
    setQuestions(prevState => ([...prevState, prevState.length + 1]))
  }

  function handleDeleteQuestion(id: number) {
    setQuestions(prevState => {
      return prevState.filter(questionId => questionId !== id)
    })
  }

  function createQuestionForm() {
    return questions.map(id => (
      <QuestionForm key={id} id={id} onDelete={handleDeleteQuestion}/>
    ))
  }

  return (
    <Container>
      <Title>Create a new quiz</Title>

      <Form>
        <Input placeholder='Quiz name?' onChange={e => setQuizName(e.target.value)} />

        <hr />

        {createQuestionForm()}

        <AddQuestionButton onClick={handleAddQuestion}>Add Question</AddQuestionButton>

        <CreateButton onClick={handleCreate}>Create</CreateButton>
      </Form>
    </Container>
  )
}

export default NewQuiz