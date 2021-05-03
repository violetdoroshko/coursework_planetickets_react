import React from 'react';
import './Sign.css';
import { Button, Container } from 'react-bootstrap';

function Sign() {
  return (
    <Container className="Sign in">
      <body>
        <h2>Sign Page Form</h2>

        <form>
          <div className="container">
            <label htmlFor="uname">
              <b>Username</b>
            </label>
            <input type="text" placeholder="Enter Username" name="uname" required></input>

            <label htmlFor="psw">
              <b>Password</b>
            </label>
            <input type="password" placeholder="Enter Password" name="psw" required></input>
            <Button type="submit">Login</Button>
          </div>
        </form>
      </body>
    </Container>
  );
}

export default Sign;
