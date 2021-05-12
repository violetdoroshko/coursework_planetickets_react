import React from 'react';
import SearchBar from '../components/SearchBar';
import Header from '../components/Header';
import { Container } from 'react-bootstrap';

const Aviasales = () => {
  return (
    <>
      <Header />
      <Container className="Search">
        <SearchBar />
      </Container>
    </>
  );
};

export default Aviasales;
