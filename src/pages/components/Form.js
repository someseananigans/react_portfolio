
import '../css/form.css'
import { makeStyles, withStyles, createStyles, Theme } from '@material-ui/core/styles'
import { useState } from 'react'
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button'


const CssTextField = withStyles({
  root: {
    '& label.Mui-focused': {
      // color: 'rgb(59, 216, 255) !important',
    },
    '& .MuiFilledInput-underline:after': {
      borderBottomColor: 'rgba(63, 81, 181, 0.5)',
    },
    '& .MuiFilledInput-root': {
      backgroundColor: '#1c1d25'
    },
    '& .MuiFilledInput-input': {
      color: 'white',
    },
    '& .MuiFormLabel-root': {
      color: 'gray',
    },
    '& .MuiFilledInput-underline:before': {
      borderBottomColor: 'rgb(223, 223, 223)',
    },
    '& .MuiFormLabel-root.Mui-error': {
      color: '#f44336',
    },
    '& .MuiFilledInput-underline.Mui-error:after': {
      borderBottomColor: '#f44336',
    },
    '& input': {
      color: 'white !important',
    },
    '& .MuiInputLabel-filled.MuiInputLabel-shrink': {
      transform: 'translate(11px, 4px) scale(0.75)',
    },
  },
})(TextField);

const useStyles = makeStyles((theme) => ({
  contact: {
    width: '90%',
    marginBottom: '24px'
  },
  message: {
    width: '90%',
    marginBottom: '24px'
  },
  button: {
    width: '150px'
  }
}))

const Form = () => {
  const classes = useStyles()

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


  const handleSubmit = (event) => {
    event.preventDefault()
    handleValidation()
    //if error do not submit and set error
    if (!formState.email.error) {
      console.log(formState.email.error)
    }
    else {
      console.log('error')
    }
  }

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

  console.log(formState)

  return (
    <form onSubmit={handleSubmit} className='contactForm' noValidate autoComplete="off">
      <CssTextField
        className={classes.contact}
        onChange={handleInputChange}
        error={name.error}
        value={name.value}
        name="name"
        label="Name"
        variant="filled"
        helperText={name.text} />
      <CssTextField
        className={classes.contact}
        onChange={handleInputChange}
        error={email.error}
        value={email.value}
        name="email"
        label="Email"
        variant="filled"
        helperText={email.text} />
      <CssTextField
        className={classes.message}
        multiline
        rows={7}
        onChange={handleInputChange}
        error={message.error}
        value={message.value}
        name="message"
        label="Message"
        variant="filled"
        helperText={message.text} />
      <Button
        className={classes.button}
        variant='outlined'
        color='primary'
        onClick={handleSubmit}
      >
        Send
      </Button>
    </form>


  )
}

export default Form
