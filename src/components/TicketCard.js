import React from 'react';
import '../index.css';
import { Button, Container, Table } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import { getTicket, getUser, addTicketToCart, getCartData } from '../utils/api/TicketApi';

const TicketCard = ({
  ticketId,
  departure,
  departure_date,
  departure_time,
  destination,
  destination_date,
  destination_time,
  cost,
  buyable = true,
}) => {
  let history = useHistory();

  function buyTicket(ticketId) {
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken === null) {
      history.push('/login');
    } else {
      const decoded = jwt_decode(accessToken);
      getUser(accessToken, decoded.sub)
        .then((response) => response.json())
        .then((data) => {
          getTicket(ticketId)
            .then((response) => response.json())
            .then((ticket) => addTicket(ticket, data?.cart));
        });
      history.push('/account');
    }
  }

  function addTicket(ticket, cartId) {
    getCartData(cartId)
      .then((response) => response.json())
      .then((cart) => addTicketToCart(ticket, cart));
  }

  return (
    <Container className="TicketCard">
      <Container className="cardWrap">
        <div className="card cardLeft">
          <h1>AviaSales</h1>
          <Table className="card-table">
            <tbody>
              <tr>
                <th>
                  <div className="departure">
                    <h2>Откуда: {departure}</h2>
                    <span>
                      {departure_date}&nbsp;
                      {departure_time}
                    </span>
                  </div>
                </th>
                <th>
                  <div className="destination">
                    <h2>Куда: {destination}</h2>
                    <span>
                      {destination_date}&nbsp;
                      {destination_time}
                    </span>
                  </div>
                </th>
              </tr>
            </tbody>
          </Table>
        </div>
        <div className="card cardRight">
          <div className="price">
            <h3>{cost}&nbsp;Br</h3>
            {buyable && (
              <Button variant="danger" onClick={() => buyTicket(ticketId)}>
                Купить
              </Button>
            )}
          </div>
        </div>
      </Container>
    </Container>
  );
};

export default TicketCard;
