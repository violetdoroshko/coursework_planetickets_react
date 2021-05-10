import { Button, Nav, Navbar } from 'react-bootstrap';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlane, faUserCircle } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  let history = useHistory();

  return (
    <>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href={'/'}>
          <FontAwesomeIcon icon={faPlane} color={'blue'} /> AviaSales
        </Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto" />
          <Button variant="outline-primary" onClick={() => history.push('/login')}>
            <FontAwesomeIcon icon={faUserCircle} />
          </Button>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};
export default Header;
