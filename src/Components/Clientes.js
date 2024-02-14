import React, { useState } from 'react';
import { Container, Row, Col, Button, Table, InputGroup, Form } from "react-bootstrap";
import ClientModal from "./Modals/ClientModal";
import {data} from "../data.js";

function Clientes(){

    const [modalShow, setModalShow] = useState(false);
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
                    <Button variant="dark" className="btn_custom_client" onClick={() => setModalShow(true)}>Remover Cliente</Button>
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
            <Table striped bordered hover>
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
                    </td>
                </tr>
                ))}
                
                </tbody>
            </Table>
            
        </Col>
    </Row>
        </Container>
        <ClientModal show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
};

export default Clientes;