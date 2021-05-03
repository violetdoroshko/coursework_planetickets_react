import {Button, Container, Form, Table} from "react-bootstrap";
import {useState} from "react";

function SearchBar() {
    const [departure, setDeparture] = useState('');
    const [destination, setDestination] = useState('');

    function handleSwapClick(e) {
        e.preventDefault();
        const temp = departure;
        setDeparture(destination);
        setDestination(temp);
    }

    function handleSearchClick(e) {
        e.preventDefault();
        console.log('Search.');
    }

    return (
        <Container className="Search">
            <header className="App-header">
                <title>
                    Дешёвые авиабилеты онлайн, цены. Поиск билетов на самолёт и сравнение цен — Aviasales.by
                </title>
                <p>
                    Aviasales
                </p>
            </header>
            <body>
            <Form>
                <Table>
                    <thead>
                    <tr>
                        <th><label htmlFor="departure">Страна отправления:</label></th>
                        <th></th>
                        <th><label htmlFor="destination">Страна прибытия:</label></th>
                        <th><label htmlFor="date">Дата отправления:</label></th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <th><input type="text" id="C" name="departure" value={departure}
                                   onChange={event => setDeparture(event.target.value)}/></th>
                        <th>
                            <Button onClick={handleSwapClick}> Swap</Button>
                        </th>
                        <th><input type="text" id="destination" name="destination" value={destination}
                                   onChange={event => setDestination(event.target.value)}/></th>
                        <th><input type="date" id="date" name="date"/></th>
                        <th>
                            <Button onClick={handleSearchClick}> Search</Button>
                        </th>
                    </tr>
                    </tbody>
                </Table>
            </Form>
            </body>
        </Container>
    );
}

export default SearchBar;
