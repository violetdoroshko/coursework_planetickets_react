import React, { useState } from 'react';
import './Sign.css';
import { Button, Container } from 'react-bootstrap';

const Sign = () => {
  const [uname, handleNameChange] = useState('');
  const [psw, handlePasswordChange] = useState('');

  const signIn = () => {
    alert('login ' + uname + ' password ' + psw);
  };

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
            <Button onClick={signIn}>Sign in</Button>
          </div>
        </form>
      </body>
    </Container>
  );
};

export default Sign;
