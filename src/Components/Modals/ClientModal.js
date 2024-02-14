import { Container, Row, Col, Modal, Button, Form} from "react-bootstrap";

function ClientModal(props) {
  return (

    <Modal size="xl" {...props} aria-labelledby="contained-modal-title-vcenter" >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Chamado
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="grid-example">
        <Container>
           <Form >
              <Row>
                <Col xs={6} md={4}>
                <Form.Label htmlFor="inputPassword5">Cliente</Form.Label>
                <Form.Select aria-label="Default select example">
                  <option></option>
                  <option value="1">Gorilão</option>
                  <option value="2">Fair Play</option>
                  <option value="3">World Games</option>
                </Form.Select>
                </Col>
                <Col xs={6} md={6}>
                <Form.Label htmlFor="inputPassword5">Nome do chamado</Form.Label>
                  <Form.Control
                    type="text"
                    id="inputPassword5"
                    aria-describedby="passwordHelpBlock"
                  />
                </Col>
                <Col xs={6} md={2}>
                  <Form.Label htmlFor="inputPassword5">Status</Form.Label>
                  <Form.Select aria-label="Default select example">
                    <option></option>
                    <option value="1">Aberto</option>
                    <option value="2">Em Andamento</option>
                    <option value="3">Finalizado</option>
                  </Form.Select>
                </Col>
              </Row>

              <Row>
                <Col xs={6} md={4}>
                  <Form.Label htmlFor="inputPassword5">Suporte</Form.Label>
                  <Form.Select aria-label="Default select example">
                    <option></option>
                    <option value="1">Luiz</option>
                    <option value="2">Ithalu</option>
                    <option value="3">Gabriel</option>
                  </Form.Select>
                </Col>
                <Col xs={12} md={12}>
                  <Form.Label htmlFor="inputPassword5">Descrição</Form.Label>
                  <Form.Control as="textarea"
                    id="inputPassword5"
                    aria-describedby="passwordHelpBlock"
                  />
                </Col>
                
              </Row>
           </Form>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
    
  );
}

export default ClientModal;
