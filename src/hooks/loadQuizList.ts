import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { ApplicationState } from './../store/index'
import * as QuizStorage from '../storage/quiz'
import * as QuestionStorage from '../storage/question'
import * as AnswaresStorage from '../storage/answer'
import { setQuizList } from '../store/ducks/quiz/actions'

export interface Props {
  loading: boolean;
}

export default function useLoadQuizList(): Props {
  const [loading, setLoading] = useState(true)
  const { loaded } = useSelector((state: ApplicationState) => state.quiz)
  const dispatch = useDispatch()

  /** should run only if quizList has not been loaded and saved in redux state */
  useEffect(() => {
    async function loadQuizzes() {
      const quizzes = await QuizStorage.findAll()

      for (const quiz of quizzes) {
        const questions = await QuestionStorage.findAllByQuizId(quiz.id)

        for (const question of questions) {
          const answares = await AnswaresStorage.findAllByQuestionId(question.id)
          question.answers = answares
        }

        quiz.questions = questions
      }

      dispatch(setQuizList(quizzes))
      setLoading(false)
    }

    if (!loaded) {
      loadQuizzes()
    } else {
      setLoading(false)
    }
  }, [dispatch, loaded])

  return { loading }
}