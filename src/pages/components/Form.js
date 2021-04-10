import 'bootstrap/dist/css/bootstrap.min.css'

import { Form as Frm, Row, Col, FormGroup, Label, Input, FormFeedback, FormText } from 'reactstrap';

import '../css/form.css'



const Form = () => {
  const validcheck = ""
  return (
    <>
    
      <Frm className="contactForm">
        <h1 className="contact">Contact Me</h1>
        <Row form>
          <Col md={6}>
            <FormGroup>
              <Label for="exampleEmail">Email</Label>
              <Input valid={validcheck} type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
              <FormFeedback valid="" >Sweet! that name is available</FormFeedback>
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="examplePassword">Password</Label>
              <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
            </FormGroup>
          </Col>
        </Row>




      </Frm>
    </>
  )
}

export default Form
