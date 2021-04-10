import Form from './components/Form'
import './css/contact.css'
import useBodyColor from './hooks/changeBgColor'


const Contact = () => {
  useBodyColor('white')
  return (
    <>
      <div className="contactBody">

        <div className="contactBox">

          <div className="leftPortion">
            <h3>Contact Me</h3>
          </div>
          <div className="rightPortion" >
        <Form />
          </div>
        </div>


      </div>



    </>
  )
}

export default Contact
