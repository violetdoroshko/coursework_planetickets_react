import React, { useState } from 'react';
import './Sign.css';
import { Button, Container, Form } from 'react-bootstrap';

const Login = () => {
  const [uname, handleNameChange] = useState('');
  const [psw, handlePasswordChange] = useState('');

  const login = () => {
    alert('login ' + uname + ' password ' + psw);
  };

  return (
    <Container className="Sign in">
      <h2>Login Page Form</h2>

      <Form className="form-horizontal">
        <div className="container">
          <label htmlFor="uname">
            <b>Username</b>
          </label>
          <input
            type="text"
            placeholder="Enter Username"
            name="uname"
            value={uname}
            onChange={(event) => handleNameChange(event.target.value)}
          />
          <label htmlFor="psw">
            <b>Password</b>
          </label>
          <input
            type="password"
            placeholder="Enter Password"
            name="psw"
            value={psw}
            onChange={(event) => handlePasswordChange(event.target.value)}
          />
          <Button onClick={login}>Авторизироваться</Button>
        </div>
      </Form>
    </Container>
  );
};

export default Login;
