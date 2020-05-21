import { QuestionData } from '../../components/QuestionForm'

export interface ErrorFields {
  quizName?: string;
  questionsData?: string;
}

export default function validate(quizName: string, questionsData: QuestionData[]): ErrorFields | null {
  const errors: ErrorFields = {}

  if (quizName.length <= 0) {
    errors.quizName = 'Quiz name is required'
  }
  
  validateQuestionData(questionsData, errors)

  return Object.keys(errors).length > 0 ? errors : null
}

function validateQuestionData(questionsData: QuestionData[], errors: ErrorFields): void {
  if (questionsData.length <= 0) {
    errors.questionsData = 'Questions is required'
    return
  }

  for (const qd of questionsData) {
    if (qd.questionTitle.length <= 0) {
      errors.questionsData = 'Question titles is required'
      return
    }

    if (
      qd.answare1.length <= 0 ||
      qd.answare2.length <= 0 ||
      qd.answare3.length <= 0 ||
      qd.answare4.length <= 0
    ) {
      errors.questionsData = 'All answares is required'
      return
    }
  }
}
