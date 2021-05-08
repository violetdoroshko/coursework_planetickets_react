import React, { useState } from 'react';
import './Sign.css';
import { Button, Container } from 'react-bootstrap';

const LogPersonalInfo = () => {
  const [firstName, handleFirstNameChange] = useState('');
  const [secondName, handleSecondNameChange] = useState('');
  const [birthDate, handleBirthDateChange] = useState('');
  const [passportNo, handlePassportNoChange] = useState('');
  const [identificationNo, handleIdentificationNoChange] = useState('');

  function Next(e) {
    //LogSignInfo(firstName, secondName, birthDate, passportNo, identificationNo);
  }

  return (
    <Container className="Log in">
      <body>
        <h2>Login Form</h2>
        <h3>Personal Info</h3>

        <form>
          <div className="container">
            <label htmlFor="first name">
              <b>First Name</b>
            </label>

            <input
              type="text"
              placeholder="Enter first name"
              id="first name"
              name="first name"
              value={firstName}
              onChange={(event) => handleFirstNameChange(event.target.value)}
            />

            <label htmlFor="second name">
              <b>Second Name</b>
            </label>
            <input
              type="text"
              placeholder="Enter second name"
              id="second name"
              name="second name"
              value={secondName}
              onChange={(event) => handleSecondNameChange(event.target.value)}
            />

            <label htmlFor="date of ">
              <b>Birth Date</b>
            </label>

            <input
              type="date"
              placeholder="Enter birth date"
              id="birth date"
              name="birth date"
              value={birthDate}
              onChange={(event) => handleBirthDateChange(event.target.value)}
            />

            <label htmlFor="passport no">
              <b>Passport No</b>
            </label>

            <input
              type="text"
              placeholder="Enter passport no"
              id="passport no"
              name="passport no"
              value={passportNo}
              onChange={(event) => handlePassportNoChange(event.target.value)}
            />

            <label htmlFor="identification no">
              <b>Identification No</b>
            </label>

            <input
              type="text"
              placeholder="Enter identification no"
              id="identification no"
              name="identification no"
              value={identificationNo}
              onChange={(event) => handleIdentificationNoChange(event.target.value)}
            />

            <Button onClick={Next}>Next</Button>
          </div>
        </form>
      </body>
    </Container>
  );
};

export default LogPersonalInfo;
