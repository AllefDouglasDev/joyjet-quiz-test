import localForage from 'localforage'
import Answare from '../types/answer'

export const STORAGE_NAME = 'QuizApp@answare'

/**
 * Get all saved answares
 * Increment the length of the array size to create an unique id
 * Add new answare to the list and update with localforage
 */
export async function create(questionId: number, title: string, isCorrect: boolean): Promise<Answare> {
  const answares = await findAll()
  const id = answares.length + 1

  const answare = { id, questionId, title, isCorrect }
  answares.push(answare)

  await localForage.setItem(STORAGE_NAME, JSON.stringify(answares))
  
  return answare
}

export async function findOne(id: number): Promise<Answare> {
  return {} as Answare
}

/** Get all saved answares by question id */
export async function findAllByQuestionId(questionId: number): Promise<Answare[]> {
  const answares = await findAll()

  if (answares === null) return []

  return answares.filter(a => a.questionId === questionId)
}

/** Get all saved answares */
export async function findAll(): Promise<Answare[]> {
  const result = await localForage.getItem(STORAGE_NAME)
  const answares = JSON.parse(String(result))

  return result !== null ? answares : []
}
