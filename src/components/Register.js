import React, { useState } from 'react';
import './Sign.css';
import { Button, Container, Form } from 'react-bootstrap';

const Register = () => {
  const [uname, handleNameChange] = useState('');
  const [psw, handlePasswordChange] = useState('');
  const [psw_repeat, handleRepeatPasswordChange] = useState('');

  function Register() {
    /*alert(
      'first name ' +
        firstName +
        'second name ' +
        secondName +
        'birth date' +
        birthDate +
        'passport no' +
        passportNo +
        'identification no' +
        identificationNo +
        'login ' +
        uname +
        ' password ' +
        psw,
    );*/
    alert('sosat');
  }

  return (
    <Container className="Log in">
      <Form>
        <div className="container">
          <label htmlFor="uname">
            <b>Username</b>
          </label>

          <input
            type="text"
            placeholder="Enter Username"
            id="uname"
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
            id="psw"
            name="psw"
            value={psw}
            onChange={(event) => handlePasswordChange(event.target.value)}
          />

          <label htmlFor="psw">
            <b>Repeat Password</b>
          </label>
          <input
            type="password"
            placeholder="Repeat Password"
            id="psw_repeat"
            name="psw_repeat"
            value={psw_repeat}
            onChange={(event) => handleRepeatPasswordChange(event.target.value)}
          />

          <Button onClick={Register}>Register</Button>
        </div>
      </Form>
    </Container>
  );
};

export default Register;
