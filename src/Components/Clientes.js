import React, { useState } from 'react';
import { Container, Row, Col, Button, Table, InputGroup, Form } from "react-bootstrap";
import ClientModal from "./Modals/ClientModal";
import ConfirmModal from './Modals/ConfirmModal.js';
import {dataClient} from "../data.js";
import { FaSearch } from "react-icons/fa";
import { FaPencil,FaTrash  } from "react-icons/fa6";

function Clientes() {

    const [modalShow, setModalShow] = useState(false);
    const [modalShow2, setModalShow2] = useState(false);
    const [search, setSearch] = useState('');
    const [data, setData] = useState (dataClient);
    const [sorting, setSorting] = useState({ field: 'Loja', order: 'asc'});
    const sort = (field) => {
        const order = field === sorting.field && sorting.order === 'asc' ? 'desc' : 'asc'
        setSorting({ field, order });
    }       

  return (
        <>
        <Container className='Custom_Container'>
        <Row>
            <Col xs={12}>
            <h1 className="Title_custom">Clientes - Suporte</h1>
            </Col>
                <Col xs={2}>
                    <Button variant="dark" className="btn_custom_client" onClick={() => setModalShow(true)}>Novo Cliente</Button>
                    
                 </Col>
            <Col xs={7}>
                <Form>
                
                    <InputGroup>
                    <FaSearch className='search-ico' />
                        <Form.Control className='filter-custom' onChange={(e) => setSearch(e.target.value)} placeholder='Filtro'/>
                    </InputGroup>
                </Form>
            </Col>    
        </Row>
    <Row>    
        <Col>   
            <Table className='table-custom' striped bordered hover >
                <thead> 
                <tr>
                    <th onClick={() => sort('Status')}>Status</th>
                    <th onClick={() => sort('Loja')}>Loja</th>
                    <th>Cidade</th>
                    <th>UF</th>
                </tr>
                </thead>
                <tbody>
                {dataClient.filter((item) => {
                        return search.toLowerCase() === '' 
                        ? item 
                        : item.Loja.toLowerCase().includes(search.toLowerCase());
                }).sort((a, b) => {
                    if (sorting.order === 'asc') {
                        return a[sorting.field] > b[sorting.field] ? 1 : -1;
                    } else {
                        return a[sorting.field] < b[sorting.field] ? 1 : -1;
                    }
                    
                }).map((item) => (
                    <tr key={item.id}>
                        <td>{item.Status}</td>
                        <td>{item.Loja}</td>
                        <td>{item.Cidade}</td>
                        <td>{item.UF}</td>
                        <td className='text-center'>
                        <Button variant="dark" className="btn_custom_client" onClick={() => setModalShow(true)}><FaPencil /></Button>
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