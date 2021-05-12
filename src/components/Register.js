import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import Header from './Header';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { registerUser } from '../utils/api/TicketApi';

const schema = yup.object().shape({
  firstName: yup.string().required('First name is required'),
  lastName: yup.string().required('Last name is required'),
});

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (newUser) => registerUser(newUser);

  const [gender, setGender] = React.useState(true);

  //todo: change gender only
  const handleGender = () => {
    setGender(!gender);
  };

  return (
    <>
      <Header />
      <Container className="Register">
        <h2>Регистрация</h2>
        <Form className="form" onSubmit={handleSubmit(onSubmit)}>
          <h3>Личные данные</h3>
          {/* todo: gender*/}
          <Form.Group>
            <div className="form-inline" onChange={handleGender}>
              <Form.Check inline label="Женщина" type="radio" />
              <Form.Check inline label="Мужчина" type="radio" />
            </div>
          </Form.Group>

          <Form.Control
            {...register('lastName', { required: true })}
            placeholder="Фамилия"
            isInvalid={errors.lastName}
          />
          <Form.Control.Feedback type={'invalid'}>{errors.lastName?.message}</Form.Control.Feedback>

          <Form.Control
            {...register('firstName', { required: true, maxLength: 20 })}
            placeholder="Имя"
            isInvalid={errors.firstName}
          />
          <Form.Control.Feedback type={'invalid'}>{errors.firstName?.message}</Form.Control.Feedback>

          <Form.Control name="birth" type="date" {...register('idDate')} />
          <br />
          <h3>Паспортные данные</h3>
          <Form.Control as="select" name="checkingPassportValue">
            <option key="blankChoice" hidden value />
            <option value="0">Belarus</option>
          </Form.Control>
          <Form.Control {...register('passport', { required: true })} placeholder="Серия и номер паспорта" />
          <Form.Control name="idDate" type="date" {...register('idDate')} />
          <br />
          <h3>Контактная информация</h3>
          <Form.Control as="select" name="checkingValue">
            <option key="blankChoice" hidden value />
            <option value="0">+375(Belarus)</option>
          </Form.Control>
          <Form.Control {...register('phoneNumber')} placeholder="Номер телефона" />
          <br />
          <h3>Пользовательские данные</h3>
          <Form.Control {...register('email', { required: true })} placeholder="Email" />
          <Form.Control {...register('password', { required: true })} placeholder="Пароль" />
          <Form.Control {...register('repeatedPass')} placeholder="Повторите пароль" />
          <br />
          <Button variant="primary" type="submit">
            Зарегистрироваться
          </Button>
        </Form>
      </Container>
    </>
  );
};

export default Register;
