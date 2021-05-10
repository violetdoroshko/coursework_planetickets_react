import React from 'react';
import { Button, Form, Table } from 'react-bootstrap';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExchangeAlt, faSearch } from '@fortawesome/free-solid-svg-icons';
// import { useHistory } from 'react-router-dom';
// import './Sign.css';

const SearchBar = () => {
  const [departure, setDeparture] = useState('');
  const [destination, setDestination] = useState('');
  const [date, setDate] = useState('');

  // let history = useHistory();

  function handleSwapClick() {
    const temp = departure;
    setDeparture(destination);
    setDestination(temp);
  }

  const search = () => {
    location.replace(window.location.href.replace('3000', '3004/tickets'));
  };

  // todo: show tickets or error (nothing was found)
  // function handleSearchClick() {
  //   console.log('Search.');
  // }

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
                onChange={(event) => setDeparture(event.target.value)}
              />
            </th>
            <th>
              <Button onClick={handleSwapClick}>
                <FontAwesomeIcon icon={faExchangeAlt} />
              </Button>
            </th>
            <th>
              <Form.Control
                type="text"
                placeholder="Куда"
                name="destination"
                value={departure}
                onChange={(event) => setDestination(event.target.value)}
              />
            </th>
            <th>
              <Form.Control
                type="date"
                placeholder="Когда"
                name="date"
                value={date}
                onChange={(event) => setDate(event.target.value)}
              />
            </th>
            <th>
              <Button onClick={search}>
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
