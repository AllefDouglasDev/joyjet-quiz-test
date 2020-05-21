import styled from 'styled-components'

import { colors } from '../../assets/styles'

export const Container = styled.div`
  margin-bottom: 50px;
`

export const Header = styled.div`
  display: flex;
  background-color: ${colors.primary};
  padding: 10px 20px;
  align-items: center;
`

export const QuestionTitle = styled.div`
  color: white;
  font-weight: bold;
  margin-left: 10px;
`

export const AnswaresContainer = styled.div``

export const AnswareItem = styled.div`
  display: flex;
  padding: 10px 20px;
  border-bottom: 1px solid ${colors.primary};
  background-color: ${({ color }) => color ? color : 'white'};
`

export const RadioButton = styled.input.attrs({ type: 'radio' })`
  margin-right: 16px;
  cursor: pointer;
  width: 18px;
  height: 18px;
`

export const AnswareText = styled.div`
  font-weight: bold;
  color: ${({ color }) => color ? color : 'black'};
`
