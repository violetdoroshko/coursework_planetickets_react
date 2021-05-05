import React from 'react';
import './TicketCard.css';

function TicketCard(departure, departure_date, departure_time, destination, destination_date, destination_time, cost) {
  return (
    <article className="card">
      <section className="price">
        <span>{cost}</span>
      </section>
      <section className="info">
        <h3>from: {departure}</h3>
        <div className="ticket-date">
          <time>
            <br />
            <span>departure:</span>
            <small>{departure_date}</small>
            <br />
            <small>{departure_time}</small>
          </time>
        </div>
        <h3>to: {destination}</h3>
        <div className="ticket-date">
          <time>
            <br />
            <span>destination:</span>
            <small>{destination_date}</small>
            <br />
            <small>{destination_time}</small>
          </time>
        </div>
      </section>
    </article>
  );
}

export default TicketCard;
