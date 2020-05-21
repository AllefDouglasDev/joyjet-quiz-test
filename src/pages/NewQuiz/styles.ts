import styled from 'styled-components'
import { makeStyles } from '@material-ui/core/styles'
import { TextField, Button } from '@material-ui/core'

import { colors } from '../../assets/styles'
import { QuestionForm as QuestionFormC } from '../../components'

/** MaterialUI styles definition */
export const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiOutlinedInput-root': {
      '&.Mui-focused fieldset': {
        borderColor: colors.primary,
      },
    },
  },
}))

export const Container = styled.div`
  padding: 0 10%;
  margin-top: 50px;
`

export const Title = styled.h1`
  margin-bottom: 50px;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`

export const Input = styled(TextField)`
  padding: 10px 20px;
  margin: 20px 0;
`

export const AddQuestionButton = styled.a`
  width: 140px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
  background-color: ${colors.primary};
  color: white;
  text-align: center;
  cursor: pointer;
  align-self: flex-end;
  border-radius: 5px;

  span {
    margin-left: 16px;
  }
`

export const CreateButton = styled.a`
  padding: 10px 20px;
  background-color: ${colors.primary};
  color: white;
  text-align: center;
  cursor: pointer;
  margin: 50px 0;
  font-size: 22px;
  border-radius: 5px;
`

export const QuestionsContainer = styled.div`
  margin-top: 50px;
`

export const QuestionForm = styled(QuestionFormC)``
