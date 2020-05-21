import styled from 'styled-components'
import { makeStyles } from '@material-ui/core/styles'
import { TextField } from '@material-ui/core'

import { colors } from '../../assets/styles'

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
  display: flex;
  flex-direction: column;
  margin: 20px 0px;
  padding: 16px 32px;
  border: 1px solid ${colors.primary};
  border-radius: 8px;
`

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`

export const Title = styled.span`
  font-weight: bold;
  font-size: 22px;
`

export const DeleteButton = styled.a`
  padding: 10px 20px;
  background-color: red;
  color: white;
  text-align: center;
  cursor: pointer;
  border-radius: 5px;
`

export const Input = styled(TextField)``

export const AnswersContainer = styled.div``

export const AnswerItem = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 0;
`

export const RadioButton = styled.input.attrs({ type: 'radio' })`
  cursor: pointer;
  width: 18px;
  height: 18px;
  margin-right: 12px;
`

export const AnswerInput = styled(TextField)`
  width: 100%;
`

export const AnswersTitle = styled.p`
  margin: 20px;
  font-weight: bold;
  font-size: 18px;
  opacity: .6;
`
