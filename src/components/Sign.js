import React, { useState } from 'react';
import './Sign.css';
import { Button, Container } from 'react-bootstrap';

function Sign() {
  const [uname, handleNameChange] = useState('');
  const [psw, handlePasswordChange] = useState('');

  function signIn(e) {
    e.preventDefault();
    alert('login ' + uname + ' password ' + psw);
  }

  return (
    <Container className="Sign in">
      <body>
        <h2>Sign Page Form</h2>

        <form>
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
            <Button onClick={signIn}>Sign in</Button>
          </div>
        </form>
      </body>
    </Container>
  );
}

export default Sign;
