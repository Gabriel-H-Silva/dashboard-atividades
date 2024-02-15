import { Container, Row, Col, Modal, Button, Form, InputGroup} from "react-bootstrap";
import React, { useState } from 'react';


function ContentTemplateModal(props) {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
  
  return (

    <Modal size="xl" {...props} aria-labelledby="contained-modal-title-vcenter" >
      {/* Modals Header */}
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Chamado
        </Modal.Title>
      </Modal.Header>

      {/* Modals Body conteudo */}
      <Modal.Body className="grid-example">
        <Container>

            <Form noValidate validated={validated} onSubmit={handleSubmit}>
              <Row className="mb-3">

                <Form.Group as={Col} md="4" controlId="validationCustom02">
                  <Form.Label>Técnico</Form.Label>

                  <Form.Control
                    required
                    type="text"
                    placeholder="Last name"
                    defaultValue="Otto"
                  />

                </Form.Group>
                
                <Form.Group as={Col} md="4" controlId="validationCustom01">

                  <Form.Label>Clientes</Form.Label>

                  <Form.Select required>
                    <option></option>
                    <option value="1">Fair Play</option>
                    <option value="2">Boliche do Gorilão</option>
                    <option value="3">World Games</option>
                  </Form.Select>

                </Form.Group>

                <Form.Group as={Col} md="4" controlId="validationCustomUsername">
                  <Form.Label>Username</Form.Label>

                  <InputGroup hasValidation>
                    
                    <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>

                    <Form.Control
                      type="text"
                      placeholder="Username"
                      aria-describedby="inputGroupPrepend"
                      required
                    />

                  </InputGroup>

                </Form.Group>
              </Row>

              <Row className="mb-3">

                <Form.Group as={Col} md="6" controlId="validationCustom03">
                  <Form.Label>City</Form.Label>

                  <Form.Control type="text" placeholder="City" required />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid city.
                  </Form.Control.Feedback>

                </Form.Group>

                <Form.Group as={Col} md="3" controlId="validationCustom04">
                  <Form.Label>State</Form.Label>

                  <Form.Control type="text" placeholder="State" required />

                </Form.Group>

                <Form.Group as={Col} md="3" controlId="validationCustom05">

                  <Form.Label>Zip</Form.Label>

                  <Form.Control type="text" placeholder="Zip" required />
                  
                </Form.Group>
              </Row>

            <Form.Group className="mb-3">

              <Form.Check
                required
                label="Agree to terms and conditions"
                feedback="You must agree before submitting."
                feedbackType="invalid"
              />

            </Form.Group>

            <Button type="submit">Submit form</Button>
          </Form>

        </Container>
      </Modal.Body>

      {/* Modals Footer*/}
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
    
  );
}

export default ContentTemplateModal;
