import React from "react";
import './TicketCard.css';

class TicketCard extends React.Component {
    state = {
        departure: "Moscow",
        departure_date: "24/12/19",
        departure_time: "14:23 ",
        destination: "Minsk",
        destination_date: "24/12/19",
        destination_time: "19:59 ",
        cost: "10"
    }

    render() {

        const {
            departure, departure_date, departure_time,
            destination, destination_date, destination_time,
            cost
        } = this.state;

        return (

            <article className="card fl-left">
                <section className="price">
                    <span>{cost}</span>

                </section>
                <section className="card-cont">
                    <h3>from: {departure}</h3>
                    <div className="ticket-date">
                        <time>
                            <br/>
                            <span>departure:</span>
                            <small>{departure_date}</small>
                            <br/>
                            <small>{departure_time}</small>
                        </time>
                    </div>
                    <h3>to: {destination}</h3>
                    <div className="ticket-date">
                        <time>
                            <br/>
                            <span>destination:</span>
                            <small>{destination_date}</small>
                            <br/>
                            <small>{destination_time}</small>
                        </time>
                    </div>
                </section>
            </article>

        );
    }
}

export default TicketCard;