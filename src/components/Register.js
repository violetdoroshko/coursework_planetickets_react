import React from 'react';
import { ButtonGroup, Col, Container, Form, Row, Button } from 'react-bootstrap';

const Register = () => {
  const [birth, setBirth] = React.useState('');
  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');

  const [gender, setGender] = React.useState(true);

  const [id, setId] = React.useState('');
  const [idDate, setIdDate] = React.useState('');

  const [email, setEmail] = React.useState('');
  const [phoneNumber, setPhoneNumber] = React.useState('');

  const [password, setPassword] = React.useState('');
  const [repeatedPass, setRepeatedPass] = React.useState('');

  const handleSubmit = () => {};

  //todo: change gender only
  const handleGender = () => {
    setGender(!gender);
    setBirth('');
    setFirstName('');
    setId('');
    setIdDate('');
    setPhoneNumber('');
    setEmail('');
    setPassword('');
    setRepeatedPass('');
  };

  const inputHandler = (e) => {
    setLastName(e.target);
  };

  return (
    // <Container>
    //   <h2>Регистрация</h2>
    //   <Form className="form-horizontal">
    //     <h3>Личные данные</h3>
    //     <Col>
    //       <Row>
    //         <div className="gender">
    //           <input className="form-check-input" type="radio" name="Gender" id="Gender_F" />
    //           <label className="form-check-label" htmlFor="Gender_F">
    //             Женщина
    //           </label>
    //           <input className="form-check-input" type="radio" name="Gender" id="Gender_M" checked />
    //           <label className="form-check-label" htmlFor="Gender_M">
    //             Мужчина
    //           </label>
    //         </div>
    //         <div className="personal-info">
    //           <input
    //             type="text"
    //             placeholder="Фамилия"
    //             required="'Фамилия' обязательно для заполнения."
    //             id="second name"
    //             name="second name"
    //             // value={secondName}
    //             // onChange={(event) => handleSecondNameChange(event.target.value)}
    //           />
    //           <input
    //             type="text"
    //             placeholder="Имя"
    //             required="'Имя' обязательно для заполнения."
    //             id="first name"
    //             name="first name"
    //             // value={firstName}
    //             // onChange={(event) => handleFirstNameChange(event.target.value)}
    //           />
    //
    //           <input
    //             type="date"
    //             placeholder="Дата рождения"
    //             id="birth date"
    //             name="birth date"
    //             // value={birthDate}
    //             // onChange={(event) => handleBirthDateChange(event.target.value)}
    //           />
    //         </div>
    //       </Row>
    //     </Col>
    //   </Form>
    //   <Form>
    //     <Col>
    //       <Row>
    //         <h3> Паспортные данные</h3>
    //
    //         <div className="passport-info">
    //           <input
    //             type="text"
    //             placeholder="Гражданство"
    //             required="'Гражданство' обязательно для заполнения."
    //             id="citizenship"
    //             name="citizenship"
    //             // value={citizenship}
    //             // onChange={(event) => handleCitizenshipChange(event.target.value)}
    //           />
    //           <input
    //             type="text"
    //             placeholder="Серия и номер паспорта"
    //             required="'Серия и номер паспорта' обязательно для заполнения."
    //             id="passport no"
    //             name="passport no"
    //             // value={passportNo}
    //             // onChange={(event) => handlePassportNoChange(event.target.value)}
    //           />
    //
    //           <input
    //             type="date"
    //             placeholder="Срок действия"
    //             id="expiration date"
    //             name="expiration date"
    //             // value={expirationDate}
    //             // onChange={(event) => handleExpirationDateChange(event.target.value)}
    //           />
    //         </div>
    //       </Row>
    //     </Col>
    //   </Form>
    //   <Form>
    //     <Col>
    //       <Row>
    //         <h3>Данные для входа</h3>
    //
    //         <div className="sign-in-info">
    //           <input
    //             type="text"
    //             placeholder="Имя пользователя"
    //             id="uname"
    //             name="uname"
    //             // value={uname}
    //             // onChange={(event) => handleNameChange(event.target.value)}
    //           />
    //
    //           <input
    //             type="password"
    //             placeholder="Пароль"
    //             id="psw"
    //             name="psw"
    //             // value={psw}
    //             // onChange={(event) => handlePasswordChange(event.target.value)}
    //           />
    //
    //           <input
    //             type="password"
    //             placeholder="Подтвердить"
    //             id="psw_repeat"
    //             name="psw_repeat"
    //             // value={psw_repeat}
    //             // onChange={(event) => handleRepeatPasswordChange(event.target.value)}
    //           />
    //         </div>
    //       </Row>
    //     </Col>
    //   </Form>
    //
    // </Container>
    <Container>
      <h1>Регистрация</h1>
      <Form className="form-horizontal" onSubmit={handleSubmit}>
        <Col>
          <h3>Личные данные</h3>
          <Row>
            {/* todo: do form control*/}
            <Form.Group as={Col}>
              <Form.Label column md="3">
                Пол
              </Form.Label>
              <ButtonGroup toggle vertical name="gender" onChange={handleGender}>
                <Form.Control value="female" type="radio" label="Female" />
                <Form.Control value="male" type="radio" label="Male" />
              </ButtonGroup>
            </Form.Group>
          </Row>
          <Row>
            <Col md="9" className="pl-0">
              <Form.Control
                name="lastName"
                value={lastName || ''}
                placeholder="Last name"
                disabled={gender}
                onChange={inputHandler}
              />
              <Form.Control
                name="firstName"
                value={firstName || ''}
                placeholder="First name"
                disabled={gender}
                onChange={inputHandler}
              />
              <Form.Control
                name="birth"
                type="date"
                value={birth || ''}
                placeholder="Birth date"
                onChange={inputHandler}
              />
            </Col>
          </Row>
        </Col>

        <Form.Group as={Row}>
          <h3>Паспортные данные</h3>
          <Col>
            <Form.Control as="select" name="checkingValue" maxLength="100">
              <option key="blankChoice" hidden value />
              <option value="0">Belarus</option>
            </Form.Control>
            <Form.Control
              name="id"
              value={id || ''}
              placeholder="Серия и номер паспорта"
              disabled={gender}
              onChange={inputHandler}
            />
            <Form.Control
              name="idDate"
              type="date"
              value={idDate || ''}
              placeholder="Дата действия"
              onChange={inputHandler}
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row}>
          <h3>Контактная информация</h3>
          <Col>
            <Form.Control as="select" name="checkingValue" maxLength="100">
              <option key="blankChoice" hidden value />
              <option value="0">+375(Belarus)</option>
            </Form.Control>
            <Form.Control
              name="phoneNumber"
              value={phoneNumber || ''}
              placeholder="Номер"
              disabled={gender}
              onChange={inputHandler}
            />
          </Col>
        </Form.Group>

        <Form.Group>
          <h3>Пользовательские данные</h3>
          <Col>
            <Form.Control name="email" value={email || ''} placeholder="Email" onChange={inputHandler} />
          </Col>
          <Col>
            <Form.Control name="pass" value={password || ''} placeholder="Password" onChange={inputHandler} />
          </Col>
          <Col>
            <Form.Control
              name="rpass"
              value={repeatedPass || ''}
              placeholder="Repeat passwrod"
              onChange={inputHandler}
            />
          </Col>
        </Form.Group>
        <Form.Group>
          <Button variant="primary" type="submit">
            Зарегистрироваться
          </Button>
        </Form.Group>
      </Form>
    </Container>
  );
};

export default Register;
