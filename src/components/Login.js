import React from 'react';
import { Button, Container, Form, NavLink } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { useHistory } from 'react-router-dom';
import Header from './Header';
import '../index.css';

import { loginUser } from '../utils/api/TicketApi';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object().shape({
  email: yup.string().trim().required("'Email' обязательно для заполнения."),
  password: yup.string().trim().required("'Пароль' обязательно для заполнения."),
});

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm({
    resolver: yupResolver(schema),
  });

  let history = useHistory();

  const login = (user) => {
    loginUser(user)
      .then((response) => response.json())
      .then((data) => {
        if (data.accessToken) {
          localStorage.setItem('accessToken', data.accessToken);
          history.push('/account');
        } else {
          setError('apiError', { type: 'api', message: data });
          localStorage.setItem('accessToken', null);
        }
      });
  };

  return (
    <>
      <Header />
      <Container className="Login">
        <h2>Вход в личный кабинет</h2>
        {/*todo error message UI*/}
        {errors.apiError && <span>{errors.apiError.message}</span>}
        <Container className="Form">
          <Form>
            <Form.Group size="lg" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control autoFocus type="email" placeholder="Email" {...register('email')} />
              <Form.Control.Feedback type={'invalid'}>{errors.email?.message}</Form.Control.Feedback>
            </Form.Group>

            <Form.Group size="lg" controlId="formBasicPassword">
              <Form.Label>Пароль</Form.Label>
              <Form.Control type="password" placeholder="Пароль" {...register('password')} />
              <Form.Control.Feedback type={'invalid'}>{errors.password?.message}</Form.Control.Feedback>
            </Form.Group>
            <Button variant="primary" onClick={handleSubmit(login)}>
              Войти
            </Button>
            <br />
            <NavLink name="link" variant="primary" onClick={() => history.push('/register')}>
              <FontAwesomeIcon icon={faSignInAlt} />
              &nbsp;Зарегистрироваться
            </NavLink>
          </Form>
        </Container>
      </Container>
    </>
  );
};

export default Login;
