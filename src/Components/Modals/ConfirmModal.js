import { Container, Row, Col, Modal, Button, Form, ModalBody} from "react-bootstrap";


function ConfirmModal(props) {

  return (
    
    <Modal  {...props} aria-labelledby="contained-modal-title-vcenter" >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Remover Cliente
        </Modal.Title>
      </Modal.Header>
    <ModalBody>
        Deseja remover este cliente?
    </ModalBody>
      <Modal.Footer>
      <Button variant="outline-primary"> Confirmar</Button>

        <Button onClick={props.onHide}>Cancelar</Button>
      </Modal.Footer>
    </Modal>
    

  );
}

export default ConfirmModal;