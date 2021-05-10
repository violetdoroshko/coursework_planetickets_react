import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';

const register = () => {
  // const [firstName, handleFirstNameChange] = useState('');
  // const [secondName, handleSecondNameChange] = useState('');
  // const [birthDate, handleBirthDateChange] = useState('');
  // const [citizenship, handleCitizenshipChange] = useState('');
  // const [passportNo, handlePassportNoChange] = useState('');
  // const [expirationDate, handleExpirationDateChange] = useState('');
  // const [uname, handleNameChange] = useState('');
  // const [psw, handlePasswordChange] = useState('');
  // const [psw_repeat, handleRepeatPasswordChange] = useState('');

  const register = () => {};

  return (
    <Container>
      <h2>Регистрация</h2>
      <Form className="form-horizontal">
        <h3>Личные данные</h3>
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
                // value={secondName}
                // onChange={(event) => handleSecondNameChange(event.target.value)}
              />
              <input
                type="text"
                placeholder="Имя"
                required="'Имя' обязательно для заполнения."
                id="first name"
                name="first name"
                // value={firstName}
                // onChange={(event) => handleFirstNameChange(event.target.value)}
              />

              <input
                type="date"
                placeholder="Дата рождения"
                id="birth date"
                name="birth date"
                // value={birthDate}
                // onChange={(event) => handleBirthDateChange(event.target.value)}
              />
            </div>
          </Row>
        </Col>
      </Form>
      <Form>
        <Col>
          <Row>
            <h3> Паспортные данные</h3>

            <div className="passport-info">
              <input
                type="text"
                placeholder="Гражданство"
                required="'Гражданство' обязательно для заполнения."
                id="citizenship"
                name="citizenship"
                // value={citizenship}
                // onChange={(event) => handleCitizenshipChange(event.target.value)}
              />
              <input
                type="text"
                placeholder="Серия и номер паспорта"
                required="'Серия и номер паспорта' обязательно для заполнения."
                id="passport no"
                name="passport no"
                // value={passportNo}
                // onChange={(event) => handlePassportNoChange(event.target.value)}
              />

              <input
                type="date"
                placeholder="Срок действия"
                id="expiration date"
                name="expiration date"
                // value={expirationDate}
                // onChange={(event) => handleExpirationDateChange(event.target.value)}
              />
            </div>
          </Row>
        </Col>
      </Form>
      <Form>
        <Col>
          <Row>
            <h3>Данные для входа</h3>

            <div className="sign-in-info">
              <input
                type="text"
                placeholder="Имя пользователя"
                id="uname"
                name="uname"
                // value={uname}
                // onChange={(event) => handleNameChange(event.target.value)}
              />

              <input
                type="password"
                placeholder="Пароль"
                id="psw"
                name="psw"
                // value={psw}
                // onChange={(event) => handlePasswordChange(event.target.value)}
              />

              <input
                type="password"
                placeholder="Подтвердить"
                id="psw_repeat"
                name="psw_repeat"
                // value={psw_repeat}
                // onChange={(event) => handleRepeatPasswordChange(event.target.value)}
              />
            </div>
          </Row>
        </Col>
      </Form>

      <Button onClick={register}>Зарегистрироваться</Button>
    </Container>
  );
};

export default register;
