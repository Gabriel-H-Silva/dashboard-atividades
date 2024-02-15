import React, { useState } from 'react';
import { Container, Row, Col, Button, Table, InputGroup, Form } from "react-bootstrap";
import UsersModal from "./Modals/UsersModal.js";
import ConfirmModal from './Modals/ConfirmModal.js';
import {data} from "../dataUsers.js";
import { FaPencil,FaTrash  } from "react-icons/fa6";

function Users(){

    const [modalShow, setModalShow] = useState(false);
    const [modalShow2, setModalShow2] = useState(false);
    const [search, setSearch] = useState('');

  return (
        <>
        <Container className='Custom_Container'>
        <Row>
            <Col xs={12}>
            <h1 className="Title_custom">Usuarios</h1>
            </Col>
                <Col xs={3}>

                    <Button variant="dark" className="btn_custom_client" onClick={() => setModalShow(true)}>Novo</Button>
                    
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
                    <th>Id</th>
                    <th>Técnico</th>
                    <th>Cargo</th>
                    <th>Eventos</th>
                </tr>
                </thead>
                <tbody>
                {data.filter((item) => {
                    return search.toLowerCase() === '' 
                    ? item 
                    : item.Tecnico.toLowerCase().includes(search);
                }).map((item) => (
                <tr>
                    <td>{item.Id}</td>
                    <td>{item.Tecnico}</td>
                    <td>{item.Cargo}</td>
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
        <UsersModal show={modalShow} onHide={() => setModalShow(false)} />
        <ConfirmModal show={modalShow2} onHide={() => setModalShow2(false)} />
    </>
  );
};

export default Users;