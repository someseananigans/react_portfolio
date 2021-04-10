
import '../css/form.css'
import { makeStyles, withStyles, createStyles, Theme } from '@material-ui/core/styles'
import { useState } from 'react'
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button'


const CssTextField = withStyles({
  root: {
    '& label.Mui-focused': {
      color: 'rgb(59, 216, 255) !important',
    },
    '& .MuiFilledInput-underline:after': {
      borderBottomColor: 'rgb(59, 216, 255)',
    },
    '& .MuiFilledInput-root': {
      backgroundColor: 'rgb(255 255 255 / 7%)',
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
    '& .MuiInput-underline.Mui-error:after': {
      borderBottomColor: '#f44336 ',
    },
    '& input': {
      color: 'white !important',
    },
  },
})(TextField);

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch'
    },
  },
}));

const Form = () => {
  const classes = useStyles();


  const handleValidation = (fieldName, value) => {
    switch (fieldName) {
      case 'email':
        let emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        let err = !emailValid
        setFormState({ ...formState, emailError:  err  })
        console.log(formState.email.error)
        break;
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    handleValidation('email', formState.email)
    //if error do not submit and set error
    if (!formState.email.error) {
      console.log(formState.email.error)
    }
    else {
      console.log('error')
    }
  }

  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
    containsName: false,
    containsMessage: false,
    emailError: false,
  })

  const handleInputChange = ({ target }) => {
    setFormState({ ...formState, [target.name]:  target.value })
  }
  const { name, message, email, containsName, containsMessage, emailError} = formState
  console.log(formState)
  return (
    <form onSubmit={handleSubmit} className={classes.root} noValidate autoComplete="off">
      <CssTextField
        className="name"
        onChange={handleInputChange}
        error={containsName}
        value={name}
        name="name"
        label="Name" 
        variant="filled"
        helperText="What's Your Name?"/>
      <CssTextField
        onChange={handleInputChange}
        error={emailError}
        value={email}
        name="email"
        label="Email" 
        variant="filled"
        helperText="How Can I Reach You?"/>
      <CssTextField
        multiline
        rows={5}
        onChange={handleInputChange}
        error={containsMessage}
        value={message}
        name="message"
        label="Message" 
        variant="filled"
        helperText="Send a Message~" />
      <Button
        variant='outlined'
        color='primary'
        onClick={handleSubmit}
      >
        Search
      </Button>
    </form>


  )
}

export default Form
