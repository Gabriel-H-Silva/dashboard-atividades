import { Container, Row, Col, Button, InputGroup, Form } from "react-bootstrap";
import Table from 'react-bootstrap/Table';
import { FaPencil,FaTrash  } from "react-icons/fa6";
import TemplateModal from "./Modals/TemplateModal";
import React, { useState } from 'react';
import { dataChamado } from "../dataChamado";
import ConfirmTrashModal from "./Modals/TemplateConfirmTrashModal";
import DescriptionModal from "./Modals/DescriptionModal";
import { MdOutlineDescription } from "react-icons/md";
import { FaSearch } from "react-icons/fa";

function AllRequests() {
  // Variavel do modal para alternar a sua exibição 
  const [modalShow, setModalShow] = useState(false);
  const [modalShowTrash, setModalShowTrash] = useState(false);
  const [search, setSearch] = useState('');
  const [modalDescription, setModalDescription] = useState(false);

  return (
    <>
    <Container className='Custom_Container'>
      <Row>
        <Col xs={12}>
          <h1 className="Title_custom">Todos os Chamados</h1>
        </Col>
        <Col xs={2}>
        <Button variant="info" onClick={() => (true)}>Gerar Relatório</Button>
        </Col>
        <Col xs={10}>
          <Form>
            <InputGroup>
            <FaSearch className='search-ico' />
              <Form.Control className='filter-custom' onChange={(e) => setSearch(e.target.value)} placeholder='Filtro' />
            </InputGroup>
          </Form>
        </Col>    
      </Row>
      <Row>
        <Col>
          {/* Content Page */}
          <Table className='table-custom' striped bordered hover>
            <thead>
              <tr>
                <th>Cliente</th>
                <th>Atividade</th>
                <th>Profissional</th>
                <th>Status</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {/* Cada tr desse vai ser um component que vai ser preenchido com o retorno da API */}
                {dataChamado.filter((item) => {
                    return search.toLowerCase() === '' 
                    ? item 
                    : item.Loja.toLowerCase().includes(search);
                }).map((item) => (
                <tr key={item.id}>
                    <td>{item.Loja}</td>
                    <td>{item.Atividade}</td>
                    <td>{item.Profissional}</td>
                    <td>{item.Status}</td>
                    <td className='text-center'>
                      <Button variant="info" onClick={() => setModalDescription(true)}> <MdOutlineDescription /> </Button>{' '}
                      <Button variant="dark" onClick={() => setModalShow(true)}><FaPencil /></Button>{' '}
                      <Button variant="outline-dark" onClick={() => setModalShowTrash(true)}><FaTrash /></Button>{' '}                    
                    </td> 
                </tr>
                ))}
                
                </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
    {/* Modal de edição ou criação de chamado | localizado na pasta Componentents/Modals/TemplateModal */}
    <TemplateModal show={modalShow} onHide={() => setModalShow(false)} />
    <ConfirmTrashModal show={modalShowTrash} onHide={() => setModalShowTrash(false)} />
    <DescriptionModal show={modalDescription} onHide={() => setModalDescription(false)} />
    </>
  );
}

export default AllRequests;
