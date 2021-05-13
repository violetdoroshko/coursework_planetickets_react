import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import Header from './Header';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { registerUser } from '../utils/api/TicketApi';

const schema = yup.object().shape({
  firstName: yup
    .string()
    .trim()
    .required('First name is required')
    .max(20, 'First name is too long, maximum {max} characters can be specified.'),
  lastName: yup
    .string()
    .trim()
    .required('Last name is required')
    .max(20, 'Last name is too long, maximum {max} characters can be specified.'),
  passport: yup
    .string()
    .trim()
    .required('passport is required')
    .max(20, 'Last name is too long, maximum {max} characters can be specified.'),
  phoneNumber: yup.string().trim().required('phoneNumber is required').min(9, 'min').max(9, 'max'),
  email: yup
    .string()
    .trim()
    .required('Last name is required')
    .max(20, 'Last name is too long, maximum {max} characters can be specified.'),
  password: yup
    .string()
    .trim()
    .required('password is required')
    .min(7, 'Last name is too long, minimum {min} characters can be specified.')
    .max(20, 'Last name is too long, maximum {max} characters can be specified.'),
  repeatedPass: yup.string().trim().required('Repeat password'),
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
          {/* todo: gender*/}
          <Form.Group className="form">
            <h5>Личные данные</h5>

            <div className="form-inline" onChange={handleGender}>
              <Form.Check inline label="Женщина" type="radio" />
              <Form.Check inline label="Мужчина" type="radio" />
            </div>

            <Form.Control {...register('lastName')} placeholder="Фамилия" isInvalid={errors.lastName} />
            <Form.Control.Feedback type={'invalid'}>{errors.lastName?.message}</Form.Control.Feedback>
            <Form.Control {...register('firstName')} placeholder="Имя" isInvalid={errors.firstName} />
            <Form.Control.Feedback type={'invalid'}>{errors.firstName?.message}</Form.Control.Feedback>

            <Form.Control name="birth" type="date" {...register('idDate')} />
          </Form.Group>

          <br />

          <Form.Group className="form">
            <h5>Паспортные данные</h5>
            <Form.Control as="select" name="checkingPassportValue">
              <option key="blankChoice" hidden value />
              <option value="0">Belarus</option>
            </Form.Control>
            <Form.Control {...register('passport')} placeholder="Серия и номер паспорта" />
            <Form.Control.Feedback type={'invalid'}>{errors.passport?.message}</Form.Control.Feedback>
            <Form.Control name="idDate" type="date" {...register('idDate')} />
          </Form.Group>

          <br />

          <Form.Group className="form">
            <h5>Контактная информация</h5>
            <Form.Control as="select" name="checkingValue">
              <option key="blankChoice" hidden value />
              <option value="0">+375(Belarus)</option>
            </Form.Control>
            <Form.Control {...register('phoneNumber')} placeholder="Номер телефона" />
            <Form.Control.Feedback type={'invalid'}>{errors.phoneNumber?.message}</Form.Control.Feedback>
          </Form.Group>

          <br />

          <Form.Group className="form">
            <h5>Пользовательские данные</h5>
            <Form.Control {...register('email')} placeholder="Email" />
            <Form.Control.Feedback type={'invalid'}>{errors.email?.message}</Form.Control.Feedback>
            <Form.Control {...register('password')} placeholder="Пароль" />
            <Form.Control.Feedback type={'invalid'}>{errors.password?.message}</Form.Control.Feedback>
            <Form.Control {...register('repeatedPass')} placeholder="Повторите пароль" />
            <Form.Control.Feedback type={'invalid'}>{errors.repeatedPass?.message}</Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="button-form">
            <Button variant="primary" type="submit">
              Зарегистрироваться
            </Button>
          </Form.Group>
        </Form>
      </Container>
    </>
  );
};

export default Register;
