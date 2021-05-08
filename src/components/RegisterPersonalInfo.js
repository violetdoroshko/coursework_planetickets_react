import React, { useState } from 'react';
import './Sign.css';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';

const RegisterPersonalInfo = () => {
  const [firstName, handleFirstNameChange] = useState('');
  const [secondName, handleSecondNameChange] = useState('');
  const [birthDate, handleBirthDateChange] = useState('');
  const [citizenship, handleCitizenshipChange] = useState('');
  const [passportNo, handlePassportNoChange] = useState('');
  const [expirationDate, handleExpirationDateChange] = useState('');

  function Next() {
    //Register(firstName, secondName, birthDate, passportNo, identificationNo);
  }

  return (
    <Container>
      <Form className="form-horizontal">
        <h2>Личные данные</h2>
        <Col>
          <Row>
            <div className="gender">
              <input className="form-check-input" type="radio" name="Gender" id="Gender_F" />
              <label className="form-check-label" htmlFor="Gender_F">
                Женщина
              </label>
              <input className="form-check-input" type="radio" name="Gender" id="Gender_M" checked />
              <label className="form-check-label" htmlFor="Gender_M">
                Мужчина
              </label>
            </div>
            <div className="personal-info">
              <input
                type="text"
                placeholder="Фамилия"
                required="'Фамилия' обязательно для заполнения."
                id="second name"
                name="second name"
                value={secondName}
                onChange={(event) => handleSecondNameChange(event.target.value)}
              />
              <input
                type="text"
                placeholder="Имя"
                required="'Имя' обязательно для заполнения."
                id="first name"
                name="first name"
                value={firstName}
                onChange={(event) => handleFirstNameChange(event.target.value)}
              />

              <input
                type="date"
                placeholder="Дата рождения"
                id="birth date"
                name="birth date"
                value={birthDate}
                onChange={(event) => handleBirthDateChange(event.target.value)}
              />
            </div>
            <h2> Паспортные данные</h2>

            <div className="passport-info">
              <input
                type="text"
                placeholder="Гражданство"
                required="'Гражданство' обязательно для заполнения."
                id="citizenship"
                name="citizenship"
                value={citizenship}
                onChange={(event) => handleCitizenshipChange(event.target.value)}
              />
              <input
                type="text"
                placeholder="Серия и номер паспорта"
                required="'Серия и номер паспорта' обязательно для заполнения."
                id="passport no"
                name="passport no"
                value={passportNo}
                onChange={(event) => handlePassportNoChange(event.target.value)}
              />

              <input
                type="date"
                placeholder="Срок действия"
                id="expiration date"
                name="expiration date"
                value={expirationDate}
                onChange={(event) => handleExpirationDateChange(event.target.value)}
              />
            </div>
          </Row>
        </Col>
        <Button onClick={Next}>Next</Button>
      </Form>
    </Container>
  );
};

export default RegisterPersonalInfo;
