import { Reducer } from 'redux'

import { QuizState, QuizTypes } from './types'

const INITIAL_STATE: QuizState = {
  quizList: [],
}

const quiz: Reducer<QuizState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case QuizTypes.RESET_QUIZ:
      return INITIAL_STATE
    case QuizTypes.SET_QUIZ_LIST:
      return { ...state, quizList: action.payload.quizList }
    default:
      return state
  }
}

export default quiz
