import { Navbar } from 'react-bootstrap';



function Sidebar() {

  return (
            <Navbar expand="lg" className="bg-body-tertiary">
               
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                            Logado: <a href="#login">user</a>
                        </Navbar.Text>
                                    
                    </Navbar.Collapse>
                  
            </Navbar>
  );

}

export default Sidebar;
