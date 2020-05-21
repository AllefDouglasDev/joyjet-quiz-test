import styled from 'styled-components'
import { colors } from '../../assets/styles'

export const Container = styled.div`
  margin-top: 50px;
  padding: 0 10%;
`

export const Loading = styled.div`
  text-align: center;
  margin-top: 50px;
`

export const Header = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`

export const Title = styled.h1``

export const AddQuizButton = styled.a`
  background-color: ${colors.primary};
  padding: 10px 20px;
  color: white;
  font-weight: bold;
  font-size: 20px;
  cursor: pointer;
`

export const QuizzesContainer = styled.div`
  margin-top: 50px;
  width: 100%;
`

export const QuizItem = styled.a`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  padding: 10px 20px;
  border: 1px solid ${colors.primary};
  cursor: pointer;
`

export const QuizName = styled.p`
  margin-left: 12px;
  font-weight: bold;
  font-size: 20px;
  opacity: .8;
`

export const EmptyQuizList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 150px;
  font-weight: bold;
  font-size: 25px;
  opacity: .6;
`
