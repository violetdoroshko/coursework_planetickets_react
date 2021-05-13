import React from 'react';
import { Button, Form, Table } from 'react-bootstrap';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExchangeAlt, faSearch } from '@fortawesome/free-solid-svg-icons';
import { getTickets } from '../utils/api/TicketApi';

const SearchBar = () => {
  const [departure, setDeparture] = useState('');
  const [destination, setDestination] = useState('');
  const [date, setDate] = useState('');

  const [tickets, setTickets] = useState([]);

  // let history = useHistory();

  function handleSwapClick() {
    const temp = departure;
    setDeparture(destination);
    setDestination(temp);
  }

  const search = () => {
    getTickets()
      .then((res) => res.json())
      .then((res) => setTickets(res));
  };

  console.log(tickets);

  return (
    <Form>
      <Table borderless={'true'}>
        <thead>
          <tr>
            <th>
              <Form.Label htmlFor={'departure'}>Страна отправления:</Form.Label>
            </th>
            <th />
            <th>
              <Form.Label htmlFor={'destination'}>Страна прибытия:</Form.Label>
            </th>
            <th>
              <Form.Label htmlFor={'date'}>Дата отправления:</Form.Label>
            </th>
            <th />
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>
              <Form.Control
                type="text"
                placeholder="Откуда"
                name="departure"
                value={departure}
                style={{ height: '40px' }}
                onChange={(event) => setDeparture(event.target.value)}
              />
            </th>
            <th>
              <Button onClick={handleSwapClick} style={{ height: '40px', width: '100%' }}>
                <FontAwesomeIcon icon={faExchangeAlt} />
              </Button>
            </th>
            <th>
              <Form.Control
                type="text"
                placeholder="Куда"
                name="destination"
                value={destination}
                style={{ height: '40px' }}
                onChange={(event) => setDestination(event.target.value)}
              />
            </th>
            <th>
              <Form.Control
                type="text"
                onFocus={(e) => (e.target.type = 'date')}
                onBlur={(e) => (e.target.type = 'text')}
                placeholder="Когда"
                name="date"
                value={date}
                onChange={(event) => setDate(event.target.value)}
              />
            </th>
            <th>
              <Button onClick={search} style={{ height: '40px', width: '100%' }}>
                <FontAwesomeIcon icon={faSearch} />
              </Button>
            </th>
          </tr>
        </tbody>
      </Table>
    </Form>
  );
};

export default SearchBar;
