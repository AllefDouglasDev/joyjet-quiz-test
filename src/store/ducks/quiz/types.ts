import Quiz from "../../../types/quiz"

export interface ActionsTypes {
  type: QuizTypes;
  payload: Object;
}

export interface QuizState {
  quizList: Quiz[];
}

export enum QuizTypes {
  RESET_QUIZ = 'quiz/RESET_QUIZ',
  SET_QUIZ_LIST = 'quiz/SET_QUIZ_LIST',
}