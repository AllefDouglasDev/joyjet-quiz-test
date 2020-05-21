import localForage from 'localforage'
import Question from '../types/question'

export const STORAGE_NAME = 'QuizApp@question'

/**
 * Get all saved questions
 * Increment the length of the array size to create an unique id
 * Add new question to the list and update with localforage
 */
export async function create(title: string, quizId: number): Promise<Question> {
  const questions = await findAll()
  const id = questions.length + 1

  const question = { id, quizId, title }
  questions.push(question)

  await localForage.setItem(STORAGE_NAME, JSON.stringify(questions))
  
  return question
}

/** Get all saved questions by quiz id */
export async function findAllByQuizId(quizId: number): Promise<Question[]> {
  const questions = await findAll()

  if (questions === null) return []

  return questions.filter(q => q.quizId === quizId)
}

/** Get all saved questions */
export async function findAll(): Promise<Question[]> {
  const result = await localForage.getItem(STORAGE_NAME)
  const questions = JSON.parse(String(result))

  return result !== null ? questions : []
}
