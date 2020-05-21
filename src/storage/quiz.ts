import localForage from 'localforage'
import Quiz from '../types/quiz'

export const STORAGE_NAME = 'QuizApp@quiz'

/**
 * Get all saved quizzes
 * Increment the length of the array size to create an unique id
 * Add new quiz to the list and update with localforage
 */
export async function create(name: string): Promise<Quiz> {
  const quizzes = await findAll()
  const id = quizzes.length + 1

  const quiz = { id, name }
  quizzes.push(quiz)

  await localForage.setItem(STORAGE_NAME, JSON.stringify(quizzes))
  
  return quiz
}

/** Get all saved quizzes */
export async function findAll(): Promise<Quiz[]> {
  const result = await localForage.getItem(STORAGE_NAME)
  const quizzes = JSON.parse(String(result))

  return result !== null ? quizzes : []
}
