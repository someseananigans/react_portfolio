
import { withStyles } from '@material-ui/core/styles'
import { useState } from 'react'
import styled from 'styled-components'
import TextField from '@material-ui/core/TextField';
// import Button from '@material-ui/core/Button'
import { colorPalette } from '../../Data';
import emailjs from 'emailjs-com'
import { FaTimes } from 'react-icons/fa'


const { colorScheme } = colorPalette

const Form = (colorScheme) => {
  const [isOpen, setOpen] = useState(false)
  const [formState, setFormState] = useState({
    name: {
      value: '',
      error: ''
    },
    email: {
      value: '',
      error: '',
    },
    message: {
      value: '',
      error: ''
    }
  })
  const [dialogue, setDialogue] = useState({
    primary: '',
    secondary: ''
  })
  const submitted = 'Thank you for your submission!'
  const errored = `Looks like there's something missing...`
  const errored2 = `Please try again`

  const handleOpen = (success) => {
    if (success) {
      setDialogue({ primary: submitted, secondary: '' })
    } else {
      setDialogue({ primary: errored, secondary: errored2 })
    }
    setOpen(true)
    setTimeout(() => {
      setOpen(false)
    }, 2000);
  }

  const handleClose = () => {
    setOpen(false)
  }

  const sendEmail = () => {
    emailjs.send("service_ld92v8k", "template_am2pbum", {
      name: formState.name.value,
      email: formState.email.value,
      message: formState.message.value
    }, 'user_MtxWh9NUZ8TCL3fwtGgwM')
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    // Validation
    let eErrText, nErrText, mErrText = ''
    let emailValid = formState.email.value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
    if (!emailValid) { eErrText = `Hmm... I can't find your email` }
    let contName = formState.name.value.length >= 1
    if (!contName) { nErrText = `Sorry, I didn't get your name` }
    let contMessage = formState.message.value.length >= 1
    if (!contMessage) { mErrText = `Don't forget the message~` }
    // for Error notice on form
    setFormState({
      ...formState,
      email: {
        ...formState.email,
        error: eErrText
      },
      name: {
        ...formState.name,
        error: nErrText
      },
      message: {
        ...formState.message,
        error: mErrText
      }
    })
    //if error do not submit and set error
    if (mErrText || nErrText || eErrText) {
      console.log('Form is not complete')
      handleOpen(false)
    }
    // set message and contact info to be an email sent to you
    else {
      sendEmail()
      handleOpen(true)
      setTimeout(() => {
        setFormState({
          name: {
            value: '',
            error: ''
          },
          email: {
            value: '',
            error: '',
          },
          message: {
            value: '',
            error: ''
          }
        })
      }, 500);
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

  const RenderMessage = () => {
    return (
      <Dialogue onClick={((event) => event.stopPropagation())} >
        <DialoguePrimary>{dialogue.primary}</DialoguePrimary>
        <DialogueSecondary>{dialogue.secondary}</DialogueSecondary>
        <Icon onClick={handleClose}>
          <CloseIcon />
        </Icon>
      </Dialogue >
    )
  }

  const { name, message, email } = formState

  return (
    <>
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
            helperText={name.error}
          />
          <InputField
            onChange={handleInputChange}
            error={email.error}
            value={email.value}
            name="email"
            label="Email"
            variant="filled"
            helperText={email.error}
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
            helperText={message.error}
          />
          <FormBtn
            variant='outlined'
            coloroverwrite={colorScheme}
            onClick={handleSubmit}>
            Send
          </FormBtn>
        </FormWrapper>
      </FormBox>
      <DialogueContainer isOpen={isOpen} onClick={handleClose}>
        <RenderMessage />
      </DialogueContainer>
    </>
  )
}

export default Form



const CssTextField = withStyles({
  root: {
    '& .MuiFilledInput-underline:after': {
      borderBottomColor: colorScheme[5],
    },
    '& .MuiFilledInput-root': {
      backgroundColor: 'transparent'
    },
    '& .MuiFilledInput-input': {
      color: colorScheme[4],
    },
    '& .MuiFormLabel-root': {
      color: colorScheme[4],
    },
    '& .MuiFilledInput-underline:before': {
      borderBottomColor: colorScheme[3],
    },
    '& .MuiFormLabel-root.Mui-error': {
      color: '#fff',
    },
    '& .MuiFilledInput-underline.Mui-error:after': {
      borderBottomColor: '#f44336',
    },
    '& .MuiInputLabel-filled.MuiInputLabel-shrink': {
      transform: 'translate(11px, 4px) scale(0.75)',
    },
  },
})(TextField);

const DialogueContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: transparent;
  display: grid;
  align-items: center;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
  /* bottom: ${({ isOpen }) => (isOpen ? '0' : '-100%')}; */
  top: ${({ isOpen }) => (isOpen ? '0' : '100%')};
`

const Dialogue = styled.div`
  border-radius: 10px;
  background: white;
  height: 150px;
  width: 300px;
  place-self: center;
  box-shadow: 0px 2px 10px -1px gray;
  display: flex;
    flex-direction: column;
    place-content: center;
`

const DialoguePrimary = styled.h2`
  font-family: 'Archivo Black',sans-serif;
  font-size: 27px;
  line-height: 25px;
  letter-spacing: -3px;
  font-weight: 800;
  color: #1c242fe8;
  margin-bottom: 10px;
`
const DialogueSecondary = styled.h3`
  color: #12cfc2;
`
const CloseIcon = styled(FaTimes)`
  color: #1c242fe8;
  height: 22px;

  &:hover {
    color: #12cfc2;
  }
`

const Icon = styled.div`
  position: absolute;
  /* top: 1.2rem;
  right: 1.5rem; */
  background: transparent;
  cursor: pointer;
  ontline: none;
  top: 43%;
  left: 59.5%;
`

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
  margin-bottom: 5px !important;
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
  /* max-width: 500px; */
  width: 100%;
  box-shadow: 15px 15px 25px 0px #1f2833;
  background: #1f2833;
  /* background: ${({ color }) => color[1]}; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  /* @media screen and (max-width: 600px) {
    max-width: 100%;
  } */
  @media screen and (max-width: 960px) {
    box-shadow: none;
  }
`

const Heading = styled.h1`
  color: #f7f8fa;
  font-family: 'Archivo Black', sans-serif;
  font-size: 50px;
  line-height: 45px;
  letter-spacing: -3px;
  font-weight: 800;
  margin-bottom: 5px;
`