
import { withStyles } from '@material-ui/core/styles'
import { useState } from 'react'
import styled from 'styled-components'
import TextField from '@material-ui/core/TextField';
// import Button from '@material-ui/core/Button'
import { colorPalette } from '../../Data';

const { colorScheme } = colorPalette

const Form = (colorScheme) => {

  const [formState, setFormState] = useState({
    name: {
      value: '',
      error: false,
      text: ''
    },
    email: {
      value: '',
      error: false,
      text: '',
    },
    message: {
      value: '',
      error: false,
      text: ''
    }
  })

  const handleValidation = () => {
    let eErrText, nErrText, mErrText = ''
    let emailValid = formState.email.value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
    let errE = !emailValid
    if (errE) { eErrText = `Hmm... I can't find your email` }
    let contName = formState.name.value.length >= 1
    let errN = !contName
    if (errN) { nErrText = `Sorry, I didn't get your name` }
    let contMessage = formState.message.value.length >= 1
    let errM = !contMessage
    if (errM) { mErrText = `Don't forget the message~` }
    if (errE || errN || errM) { setSpacing(false) } else { setSpacing(true) }

    setFormState({
      ...formState,
      email: {
        ...formState.email,
        error: errE,
        text: eErrText
      },
      name: {
        ...formState.name,
        error: errN,
        text: nErrText
      },
      message: {
        ...formState.message,
        error: errM,
        text: mErrText
      }
    })
  }

  const [spacing, setSpacing] = useState(true)

  const handleSubmit = (event) => {
    event.preventDefault()
    handleValidation()
    //if error do not submit and set error
    if (!formState.email.error) {
      console.log(formState.email.error)

    }
    // set message and contact info to be an email sent to you
    else {
      console.log('error')

    }
  }

  const handleInputChange = ({ target }) => {
    switch (target.name) {
      case 'name':
        setFormState({
          ...formState, name: {
            ...formState.name,
            value: target.value
          }
        })
        break;
      case 'email':
        setFormState({
          ...formState, email: {
            ...formState.email,
            value: target.value
          }
        })
        break;
      case 'message':
        setFormState({
          ...formState, message: {
            ...formState.message,
            value: target.value
          }
        })
        break;
    }

  }

  const { name, message, email } = formState

  return (
    <FormBox color={colorScheme}>
      <FormWrapper onSubmit={handleSubmit} className='contactForm' noValidate autoComplete="off">
        <Heading>Contact</Heading>
        <InputField
          onChange={handleInputChange}
          error={name.error}
          value={name.value}
          name="name"
          label="Name"
          variant="filled"
          helperText={name.text}
        // spacing={spacing} 
        />
        <InputField
          onChange={handleInputChange}
          error={email.error}
          value={email.value}
          name="email"
          label="Email"
          variant="filled"
          helperText={email.text}
        // spacing={spacing} 
        />
        <InputField
          multiline
          rows={7}
          onChange={handleInputChange}
          error={message.error}
          value={message.value}
          name="message"
          label="Message"
          variant="filled"
          helperText={message.text}
        // spacing={spacing} 
        />
        <FormBtn
          variant='outlined'
          coloroverwrite={colorScheme}
          onClick={handleSubmit}
        >
          Send
      </FormBtn>
      </FormWrapper>
    </FormBox>


  )
}

export default Form



const CssTextField = withStyles({
  root: {
    '& .MuiFilledInput-underline:after': {
      borderBottomColor: colorScheme[3],
    },
    '& .MuiFilledInput-root': {
      backgroundColor: 'transparent'
    },
    '& .MuiFilledInput-input': {
      color: colorScheme[5],
    },
    '& .MuiFormLabel-root': {
      color: colorScheme[2],
    },
    '& .MuiFilledInput-underline:before': {
      borderBottomColor: colorScheme[2],
    },
    '& .MuiFormLabel-root.Mui-error': {
      color: '#f44336',
    },
    '& .MuiFilledInput-underline.Mui-error:after': {
      borderBottomColor: '#f44336',
    },
    '& .MuiInputLabel-filled.MuiInputLabel-shrink': {
      transform: 'translate(11px, 4px) scale(0.75)',
    },
  },
})(TextField);


const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  width: 90%;
  justify-content: space-around;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  align-items: center;
`

const InputField = styled(CssTextField)`
  width: 90%;
  margin-bottom: ${({ spacing }) => (spacing ? '20px !important' : '10px !important')};
`

const FormBtn = styled.button`
  border-radius: 10px;
  background: transparent;
  white-space: nowrap;
  padding: ${({ big }) => (big ? '14px 48px' : '12px 30px')};
  color: ${({ dark }) => (dark ? '#010606' : '#fff')};
  border: 2px solid #f7f8fa;
  color: #f7f8fa;
  font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
  outline: none;
  /* border: none; */
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-ease-in-out;

  &:hover {
    transition: all 0.2s ease-ease-in-out;
      color: #1f2833;
      border: 2px solid ;

    background: #66fcf1;
  }
`
const FormBox = styled.div`
  height: 520px;
  max-width: 500px;
  width: 100%;
  box-shadow: 15px 15px 0px 0px white;
  background: #1c242fc2;
  /* background: ${({ color }) => color[1]}; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 600px) {
    max-width: 100%
  }
`

const Heading = styled.h1`
  color: #f7f8fa;
`