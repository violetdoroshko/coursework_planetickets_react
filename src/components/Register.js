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
    .required("'Имя' обязательно для заполнения.")
    .max(20, 'Имя слишком длинное, максимум {max} символов.'),
  lastName: yup
    .string()
    .trim()
    .required("'Фамилия' обязательно для заполнения.")
    .max(20, 'Фамилия слишком длинная, максимум {max} символов.'),
  passport: yup
    .string()
    .trim()
    .required("'Паспорт' обязательно для заполнения.")
    .max(20, 'Паспорт слишком длинный, максимум {max} символов.'),
  phoneNumber: yup
    .string()
    .trim()
    .required("'Номер телефона' обязательно для заполнения.")
    .min(9, 'Номер телефона слишком короткий, должно быть {min} символов.')
    .max(9, 'Номер телефона слишком длинный, должно быть {max} символов.'),
  email: yup
    .string()
    .trim()
    .required("'Email' обязательно для заполнения.")
    .max(20, 'Email слишком длинный, максимум {max} символов.'),
  password: yup
    .string()
    .trim()
    .required("'Пароль' обязательно для заполнения.")
    .min(7, 'Пароль слишком короткий, минимум {min} символов.')
    .max(20, 'Пароль слишком длинный, максимум {max} символов.'),
  repeatedPass: yup
    .string()
    .trim()
    .required("'Пароль' обязательно для заполнения.")
    .min(7, 'Пароль слишком короткий, минимум {min} символов.')
    .max(20, 'Пароль слишком длинный, максимум {max} символов.'),
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
              <Form.Check inline label="Женщина" type="radio" name="gender" />
              <Form.Check inline label="Мужчина" type="radio" name="gender" />
            </div>

            <Form.Control {...register('lastName')} placeholder="Фамилия" isInvalid={errors.lastName} />
            <Form.Control.Feedback type={'invalid'}>{errors.lastName?.message}</Form.Control.Feedback>
            <Form.Control {...register('firstName')} placeholder="Имя" isInvalid={errors.firstName} />
            <Form.Control.Feedback type={'invalid'}>{errors.firstName?.message}</Form.Control.Feedback>

            <Form.Control
              name="birth"
              type="text"
              onFocus={(e) => (e.target.type = 'date')}
              placeholder="Дата рождения"
              {...register('idDate')}
            />
          </Form.Group>

          <br />

          <Form.Group className="form">
            <h5>Паспортные данные</h5>
            <Form.Control as="select" name="checkingPassportValue">
              <option value="" disabled selected hidden>
                Гражданство
              </option>
              <option value="0">Belarus</option>
            </Form.Control>
            <Form.Control {...register('passport')} placeholder="Серия и номер паспорта" />
            <Form.Control.Feedback type={'invalid'}>{errors.passport?.message}</Form.Control.Feedback>
            <Form.Control
              name="idDate"
              type="text"
              onFocus={(e) => (e.target.type = 'date')}
              placeholder="Срок действия"
              {...register('idDate')}
            />
          </Form.Group>

          <br />

          <Form.Group className="form">
            <h5>Контактная информация</h5>
            <Form.Control as="select" name="checkingValue">
              <option value="" disabled selected hidden>
                Код
              </option>
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
