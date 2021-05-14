import React from 'react';
import { Button, Container, Form, Table } from 'react-bootstrap';
import Header from './Header';
import '../index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faPencilAlt } from '@fortawesome/free-solid-svg-icons';

const Account = () => {
  function editUser() {}

  return (
    <>
      <Header />
      <Container className="Account">
        <h2>Личный кабинет</h2>
        <Form>
          <Table className="UserInfo" borderless="true">
            <tr>
              <th>
                <FontAwesomeIcon className="icon" icon={faUser} size="5x" color="#007bff" />
              </th>
              <th>
                <Form.Group size="lg" controlId="formBasicEmail">
                  <Form.Label>Фамилия</Form.Label>
                  <Form.Control plaintext readOnly value={'Surname'} />
                </Form.Group>
              </th>
              <th>
                <Form.Group size="lg" controlId="formBasicEmail">
                  <Form.Label>Имя</Form.Label>
                  <Form.Control plaintext readOnly value={'Name'} />
                </Form.Group>
              </th>
              <td>
                <div className="edit">
                  <Button variant="primary" onClick={editUser}>
                    <FontAwesomeIcon icon={faPencilAlt} />
                    &nbsp;Редактировать
                  </Button>
                </div>
              </td>
            </tr>
          </Table>
        </Form>
        <h3>Купленные билеты:</h3>
      </Container>
    </>
  );
};

export default Account;
