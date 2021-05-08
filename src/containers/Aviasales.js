import React from 'react';
import { useHistory } from 'react-router-dom';
import SearchBar from '../components/SearchBar';
import { Button, ButtonGroup, Col, Container, Form, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';

const Aviasales = () => {
  let history = useHistory();

  return (
    <Container>
      <Form className="form-horizontal">
        <Col>
          <Row>
            <ButtonGroup className="ml-auto">
              <Button variant="default" onClick={() => history.push('login')}>
                <FontAwesomeIcon icon={faSignInAlt} />
                &nbsp;Авторизироваться
              </Button>
              <Button variant="default" onClick={() => history.push('register')}>
                <FontAwesomeIcon icon={faSignInAlt} />
                &nbsp;Зарегистрироваться
              </Button>
            </ButtonGroup>
          </Row>
        </Col>
      </Form>
      <SearchBar />
    </Container>
  );
};

export default Aviasales;
