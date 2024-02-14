import { useState } from 'react';
import { Container, Nav, Button, Offcanvas, Navbar } from 'react-bootstrap';
import { MdMenu } from "react-icons/md";
import TopNavBar from './Navbar';
import Logo from '../../img/LogoWeb.jpg';


function Sidebar(props) {

  const { onComponentChange } = props;
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (

            <Navbar expand="lg" className="bg-body-tertiary">
                <Container className='Custom_Container'>
                    {/* Botão para abrir e fechar o sidebar menu lateral */}
                    <Button onClick={handleShow}><MdMenu /></Button>

                    {/* Montar Logo */}
                    <Navbar.Brand href="#home" className='Logo_style'>
                        <img alt="" src={Logo} width="45" height="45" className="d-inline-block align-top" />
                    </Navbar.Brand>

                    {/* Menu header */}
                    <TopNavBar />
                            
                    {/* Menu Lateral */}
                    <Offcanvas show={show} onHide={handleClose}>
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title>Menus</Offcanvas.Title>
                        </Offcanvas.Header>

                        <Offcanvas.Body>

                            <Nav className="justify-content-end flex-grow-1 pe-3">

                                {/* Links onComponentChange('TemplateDashbord') - para criar um novo component
                                é só troca o TemplateDashbord para o seu, depois volte para o app e faça a mesma coisa*/}
                                <Nav.Link onClick={() => onComponentChange('TemplateDashbord') + setShow(false)}>
                                        Home
                                </Nav.Link>

                                <Nav.Link onClick={() => onComponentChange('TemplateDashbord') + setShow(false)}>
                                        Meus Chamados
                                </Nav.Link>

                                <Nav.Link onClick={() => onComponentChange('clientes') + setShow(false)}>
                                        Clientes
                                </Nav.Link>
                            
                            </Nav>

                        </Offcanvas.Body>
                    </Offcanvas>

                </Container>
            </Navbar>
  );
}

export default Sidebar;
