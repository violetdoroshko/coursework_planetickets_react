import React, { useState } from 'react';
import { Button, Container, Form, NavLink } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { useHistory } from 'react-router-dom';
import Header from './Header';
import '../index.css';

const Login = () => {
  const [uname, handleNameChange] = useState('');
  const [psw, handlePasswordChange] = useState('');

  let history = useHistory();

  //todo: send post to LOGIN
  const login = () => {
    alert('login ' + uname + ' password ' + psw);
  };

  return (
    <>
      <Header />
      <Container className="Login">
        <h2>Вход в личный кабинет</h2>
        <br />
        <Container className="Form">
          <Form>
            <Form.Group size="lg" controlId="formBasicEmail">
              <Form.Label>Логин</Form.Label>
              <Form.Control
                autoFocus
                type="text"
                placeholder="Имя пользователя"
                name="uname"
                value={uname}
                onChange={(event) => handleNameChange(event.target.value)}
              />
            </Form.Group>

            <Form.Group size="lg" controlId="formBasicPassword">
              <Form.Label>Пароль</Form.Label>
              <Form.Control
                type="password"
                placeholder="Пароль"
                name="psw"
                value={psw}
                onChange={(event) => handlePasswordChange(event.target.value)}
              />
            </Form.Group>
            <Button variant="primary" onClick={login}>
              Войти
            </Button>
            <br />
            <NavLink name="link" variant="primary" onClick={() => history.push('/register')}>
              <FontAwesomeIcon icon={faSignInAlt} />
              &nbsp;Зарегистрироваться
            </NavLink>
          </Form>
        </Container>
      </Container>
    </>
  );
};

export default Login;
