import Form from'./components/Form'
import './css/contact.css'
import useBodyColor from './hooks/changeBgColor'


const Contact = () => {
  useBodyColor('darkblue')
  return (
    <Form/>
  )
}

export default Contact
