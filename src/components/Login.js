import React, { useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { useHistory } from 'react-router-dom';

const Login = () => {
  const [uname, handleNameChange] = useState('');
  const [psw, handlePasswordChange] = useState('');

  let history = useHistory();

  //todo: send post to LOGIN
  const login = () => {
    alert('login ' + uname + ' password ' + psw);
  };

  return (
    <Container className="Sign in">
      <h2>Вход в личный кабинет</h2>

      <Form className="form-horizontal">
        <input
          type="text"
          placeholder="Имя пользователя"
          name="uname"
          value={uname}
          onChange={(event) => handleNameChange(event.target.value)}
        />
        <input
          type="password"
          placeholder="Пароль"
          name="psw"
          value={psw}
          onChange={(event) => handlePasswordChange(event.target.value)}
        />
        <Button variant="default" onClick={login}>
          Авторизироваться
        </Button>
        <Button variant="default" onClick={() => history.push('/register')}>
          <FontAwesomeIcon icon={faSignInAlt} />
          &nbsp;Зарегистрироваться
        </Button>
      </Form>
    </Container>
  );
};

export default Login;
