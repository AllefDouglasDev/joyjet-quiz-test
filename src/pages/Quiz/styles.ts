import styled from 'styled-components'

import { colors } from '../../assets/styles'
import { QuestionCard as QuestionCardC } from '../../components'

export const Container = styled.div`
  padding: 0 10%;
  margin-top: 50px;
`

export const Title = styled.h1`
  margin-bottom: 50px;
`

export const QuestionsContainer = styled.div``

export const QuestionCard = styled(QuestionCardC)``

export const ConfirmButton = styled.a`
  padding: 10px 20px;
  background-color: ${colors.primary};
  color: white;
  text-align: center;
  font-weight: bold;
  cursor: pointer;
  margin: 50px 0;
`
