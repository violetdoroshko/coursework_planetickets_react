import React from 'react';
import { Button, Container, Form, Table } from 'react-bootstrap';
import { useState } from 'react';

const SearchBar = () => {
  const [departure, setDeparture] = useState('');
  const [destination, setDestination] = useState('');
  const [date, setDate] = useState('');

  function handleSwapClick() {
    const temp = departure;
    setDeparture(destination);
    setDestination(temp);
  }

  function handleSearchClick() {
    console.log('Search.');
  }

  return (
    <Container className="Search">
      <h1>Дешёвые авиабилеты онлайн, цены. Поиск билетов на самолёт и сравнение цен — Aviasales.by</h1>
      <p>Aviasales</p>
      <div>
        <Form>
          <Table>
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
                    value={departure}
                    onChange={(event) => setDeparture(event.target.value)}
                  />
                </th>
                <th>
                  <Button onClick={handleSwapClick}> Swap</Button>
                </th>
                <th>
                  <input
                    type="text"
                    name="destination"
                    value={destination}
                    onChange={(event) => setDestination(event.target.value)}
                  />
                </th>
                <th>
                  <input type="date" name="date" value={date} onChange={(event) => setDate(event.target.value)} />
                </th>
                <th>
                  <Button onClick={handleSearchClick}> Search</Button>
                </th>
              </tr>
            </tbody>
          </Table>
        </Form>
      </div>
    </Container>
  );
};

export default SearchBar;
