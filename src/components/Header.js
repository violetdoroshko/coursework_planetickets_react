import { Button, Nav, Navbar } from 'react-bootstrap';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlane, faUserCircle } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  let history = useHistory();

  return (
    <>
      <Navbar bg="primary" variant="dark" expand="lg" fixed="top">
        <Navbar.Brand href={'/'}>
          <FontAwesomeIcon icon={faPlane} color={'white'} /> AviaSales
        </Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto" />
          <Button variant="primary" onClick={() => history.push('/login')}>
            <FontAwesomeIcon icon={faUserCircle} />
          </Button>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};
export default Header;
