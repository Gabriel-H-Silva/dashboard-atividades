import React, { useState } from 'react';
import { Container, Row, Col, Button, Table, InputGroup, Form } from "react-bootstrap";
import ClientModal from "./Modals/ClientModal";
import ConfirmModal from './Modals/ConfirmModal.js';
import {data} from "../data.js";
import { FaPencil,FaTrash  } from "react-icons/fa6";

function Clientes(){

    const [modalShow, setModalShow] = useState(false);
    const [modalShow2, setModalShow2] = useState(false);
    const [search, setSearch] = useState('');

  return (
        <>
        <Container className='Custom_Container'>
        <Row>
            <Col xs={12}>
            <h1 className="Title_custom">Clientes - Suporte</h1>
            </Col>
                <Col xs={3}>
                    <Button variant="dark" className="btn_custom_client" onClick={() => setModalShow(true)}>Novo Cliente</Button>
                    
                 </Col>
            <Col xs={9}>
                <Form>
                    <InputGroup>
                        <Form.Control onChange={(e) => setSearch(e.target.value)} placeholder='Filtro' />
                    </InputGroup>
                </Form>
            </Col>    
        </Row>
    <Row>    
        <Col>   
            <Table className='table-custom' striped bordered hover >
                <thead> 
                <tr>
                    <th>Status</th>
                    <th>Loja</th>
                    <th>Cidade</th>
                    <th>UF</th>
                </tr>
                </thead>
                <tbody>
                {data.filter((item) => {
                    return search.toLowerCase() === '' 
                    ? item 
                    : item.Loja.toLowerCase().includes(search);
                }).map((item) => (
                <tr key={item.id}>
                    <td>{item.Status}</td>
                    <td>{item.Loja}</td>
                    <td>{item.Cidade}</td>
                    <td>{item.UF}</td>
                    <td className='text-center'>
                    <Button variant="dark" className="btn_custom_client" onClick={() => setModalShow2(true)}><FaTrash /></Button>  
                    </td>
                </tr>
                ))}
                
                </tbody>
            </Table>
            
        </Col>
    </Row>
        </Container>
        <ClientModal show={modalShow} onHide={() => setModalShow(false)} />
        <ConfirmModal show={modalShow2} onHide={() => setModalShow2(false)} />
    </>
  );
};

export default Clientes;