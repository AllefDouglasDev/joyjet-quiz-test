import styled from 'styled-components'
import { colors } from '../../assets/styles'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 0px;
  padding: 10px;
  border: 1px solid ${colors.primary};
`

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
`

export const Title = styled.span``

export const DeleteButton = styled.a`
  padding: 10px 20px;
  background-color: red;
  color: white;
  text-align: center;
  cursor: pointer;
`

export const Input = styled.input`
  padding: 10px 20px;
  margin: 20px 0;
`

export const AnswersContainer = styled.div``

export const AnswerItem = styled.div`
  display: flex;
  align-items: center;
`

export const RadioButton = styled.input.attrs({ type: 'radio' })`
  margin-right: 10px;
`

export const AnswerInput = styled.input`
  padding: 10px 20px;
  margin: 20px 0;
  width: 100%;
`
