import { Container, Row, Col, Modal, Button, Form, ModalBody} from "react-bootstrap";


function ConfirmTrashModal(props) {

  return (
    
    <Modal  {...props} aria-labelledby="contained-modal-title-vcenter" >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Remover Cliente
        </Modal.Title>
      </Modal.Header>
    <ModalBody>
        Deseja remover este Chamado?
    </ModalBody>
      <Modal.Footer>
      <Button variant="outline-primary"> Confirmar</Button>

        <Button onClick={props.onHide}>Cancelar</Button>
      </Modal.Footer>
    </Modal>
    

  );
}

export default ConfirmTrashModal;