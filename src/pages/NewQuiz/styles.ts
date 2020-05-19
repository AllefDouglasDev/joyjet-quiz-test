import styled from 'styled-components'
import { colors } from '../../assets/styles'

import { Question } from '../../components'

export const Container = styled.div`
  padding: 0 10%;
  margin-top: 50px;
`

export const Title = styled.h1``

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`

export const Input = styled.input`
  padding: 10px 20px;
  margin: 20px 0;
`

export const AddQuestionButton = styled.a`
  padding: 10px 20px;
  background-color: ${colors.primary};
  color: white;
  text-align: center;
  cursor: pointer;
`

export const CreateButton = styled.a`
  padding: 10px 20px;
  background-color: ${colors.primary};
  color: white;
  text-align: center;
  cursor: pointer;
  margin-top: 50px;
`

export const QuestionForm = styled(Question)``
