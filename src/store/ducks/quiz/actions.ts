import { ActionsTypes, QuizTypes } from './types'
import Quiz from '../../../types/quiz'

export const resetQuiz = (): ActionsTypes => ({
  type: QuizTypes.RESET_QUIZ,
  payload: {},
})

export const setQuizList = (quizList: Quiz[]): ActionsTypes => ({
  type: QuizTypes.SET_QUIZ_LIST,
  payload: { quizList },
})
