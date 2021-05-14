import React from 'react';
import '../index.css';
import { Button, Container, Table } from 'react-bootstrap';
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
          <Table className="card-table">
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
          </Table>
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
