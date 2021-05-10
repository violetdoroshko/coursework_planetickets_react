import React from 'react';
import { useHistory } from 'react-router-dom';
import SearchBar from '../components/SearchBar';
import { Button, Container, Navbar } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlane, faUser } from '@fortawesome/free-solid-svg-icons';

const Aviasales = () => {
  let history = useHistory();

  return (
    <>
      <Navbar>
        <Button variant="default" onClick={() => history.push('/')}>
          <FontAwesomeIcon icon={faPlane} />
        </Button>
        <Button variant="default" onClick={() => history.push('/login')}>
          <FontAwesomeIcon icon={faUser} />
        </Button>
      </Navbar>

      <Container>
        <SearchBar />
      </Container>
    </>
  );
};

export default Aviasales;
