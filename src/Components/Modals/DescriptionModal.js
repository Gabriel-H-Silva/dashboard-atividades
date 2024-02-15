import { Container, Row, Col, Modal, Button, Form, ModalBody} from "react-bootstrap";


function DescriptionModal(props) {

  return (
    
    <Modal  {...props} aria-labelledby="contained-modal-title-vcenter" >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Descrição do Chamado
        </Modal.Title>
      </Modal.Header>
      <Form.Group className="mb-3" controlId="formTextDescription">
        <Form.Control as="textarea" rows={3} placeholder="Escreva aqui" />
      </Form.Group>
      <Modal.Footer>
      <Button variant="outline-primary"> Confirmar</Button>

        <Button onClick={props.onHide}>Cancelar</Button>
      </Modal.Footer>
    </Modal>
    

  );
}

export default DescriptionModal;