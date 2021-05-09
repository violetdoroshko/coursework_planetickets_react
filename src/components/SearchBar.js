import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExchangeAlt, faSearch } from '@fortawesome/free-solid-svg-icons';
import './Sign.css';

const SearchBar = () => {
  const [departure, setDeparture] = useState('');
  const [destination, setDestination] = useState('');
  const [date, setDate] = useState('');

  function handleSwapClick() {
    const temp = departure;
    setDeparture(destination);
    setDestination(temp);
  }

  // todo: show tickets or error (nothing was found)
  function handleSearchClick() {
    console.log('Search.');
  }

  return (
    <div className="container">
      <Form>
        <table width={'100%'}>
          <thead>
            <tr>
              <th>
                <label htmlFor="departure">Страна отправления:</label>
              </th>
              <th></th>
              <th>
                <label htmlFor="destination">Страна прибытия:</label>
              </th>
              <th>
                <label htmlFor="date">Дата отправления:</label>
              </th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>
                <input
                  type="text"
                  name="departure"
                  placeholder={'Откуда'}
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
                <input
                  type="text"
                  name="destination"
                  placeholder={'Куда'}
                  value={destination}
                  onChange={(event) => setDestination(event.target.value)}
                />
              </th>
              <th>
                <input
                  type="date"
                  name="date"
                  placeholder={'Когда'}
                  value={date}
                  onChange={(event) => setDate(event.target.value)}
                />
              </th>
              <th>
                <Button onClick={handleSearchClick}>
                  <FontAwesomeIcon icon={faSearch} />
                </Button>
              </th>
            </tr>
          </tbody>
        </table>
      </Form>
    </div>
  );
};

export default SearchBar;
