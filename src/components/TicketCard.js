import React from 'react';
import '../index.css';
import { Button, Container } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const TicketCard = ({
  departure,
  departure_date,
  departure_time,
  destination,
  destination_date,
  destination_time,
  cost,
}) => {
  let history = useHistory();

  return (
    <Container className="TicketCard">
      <Container className="cardWrap">
        <div className="card cardLeft">
          <h1>AviaSales</h1>
          <div className="ticket-content">
            <div className="departure">
              <h2>Откуда: {departure}</h2>
              <span>
                {departure_date}&nbsp;
                {departure_time}
              </span>
            </div>
            <div className="destination">
              <h2>Куда: {destination}</h2>
              <span>
                {destination_date}&nbsp;
                {destination_time}
              </span>
            </div>
          </div>
        </div>
        <div className="card cardRight">
          <div className="price">
            <h3>{cost}&nbsp;Br</h3>
            <Button variant="danger" onClick={() => history.push('/account')}>
              Купить
            </Button>
          </div>
        </div>
      </Container>
    </Container>
  );
};

export default TicketCard;
