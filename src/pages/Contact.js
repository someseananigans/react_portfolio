import Form from './components/Form'
import './css/contact.css'
import useBodyColor from './hooks/changeBgColor'


const Contact = () => {
  useBodyColor('darkgray')
  return (
    <>
      <div className="contactBody">

        <div className="contactBox">

          {/* <div className="leftPortion">
            <h3>Contact Me</h3>
          </div> */}
          <div className="rightPortion" >
            <div className="contactHeader">
              <h1>Shoot me message!</h1>
              <p>From collaborative projects to sharing ideas</p>
              <p>Let's connect!</p>
            </div>
            <Form />
          </div>
        </div>


      </div>



    </>
  )
}

export default Contact
