import React from 'react';
import { Button, Container, Form, Table } from 'react-bootstrap';
import Header from './Header';
import '../index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt, faUser } from '@fortawesome/free-solid-svg-icons';
import { getUser, getCartData } from '../utils/api/TicketApi';
import { useHistory } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import TicketCard from './TicketCard';

const Account = () => {
  let history = useHistory();

  const [tickets, setTickets] = React.useState([]);
  const [user, setUser] = React.useState();
  const [isLoading, setLoading] = React.useState(false);

  React.useEffect(() => {
    if (localStorage.getItem('accessToken') === null) {
      history.push('/');
    } else {
      getCurrentUser(localStorage.getItem('accessToken'));
    }
  }, [localStorage.getItem('accessToken')]);

  function getCurrentUser(accessToken) {
    const decoded = jwt_decode(accessToken);
    getUser(accessToken, decoded.sub)
      .then((response) => response.json())
      .then((data) => {
        setUser(data);
        getCart(data?.cart);
        setLoading(false);
      });
  }

  function getCart(cart) {
    getCartData(cart)
      .then((response) => response.json())
      .then((data) => setTickets(data.tickets));
  }

  function editUserData() {
    history.push('/register');
  }

  return (
    <>
      <Header />
      {!isLoading && (
        <Container className="Account">
          <h2>Личный кабинет</h2>
          <Form>
            <Table className="UserInfo" borderless="true">
              <thead>
                <tr>
                  <th>
                    <FontAwesomeIcon className="icon" icon={faUser} size="5x" color="#007bff" />
                  </th>
                  <th>
                    <Form.Group size="lg" controlId="formBasicEmail">
                      <Form.Label>Фамилия</Form.Label>
                      <Form.Control plaintext readOnly value={user?.lastName} />
                    </Form.Group>
                  </th>
                  <th>
                    <Form.Group size="lg" controlId="formBasicEmail">
                      <Form.Label>Имя</Form.Label>
                      <Form.Control plaintext readOnly value={user?.firstName} />
                    </Form.Group>
                  </th>
                  <th>
                    <div className="edit">
                      <Button variant="primary" disabled onClick={editUserData}>
                        <FontAwesomeIcon icon={faPencilAlt} />
                        &nbsp;Редактировать
                      </Button>
                    </div>
                  </th>
                </tr>
              </thead>
            </Table>
          </Form>
          <h3>Купленные билеты:</h3>
          {tickets && (
            <Table borderless="true">
              <tbody>
                {tickets.map((ticket) => {
                  return (
                    <tr key={[ticket.cost, ticket.departure, ticket.destination].join()}>
                      <td style={{ height: '11em' }}>
                        <TicketCard
                          departure={ticket.departure}
                          departure_date={ticket.departure_date}
                          departure_time={ticket.departure_time}
                          destination={ticket.destination}
                          destination_date={ticket.destination_date}
                          destination_time={ticket.destination_time}
                          cost={ticket.cost}
                          buyable={false}
                        />
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          )}
        </Container>
      )}
    </>
  );
};

export default Account;
