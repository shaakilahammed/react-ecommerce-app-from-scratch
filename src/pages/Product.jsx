import React from 'react';
import styled from 'styled-components';
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import Newsletter from '../components/Newsletter';

const Container = styled.div``;

const Product = () => {
  return (
    <Container>
      <NavBar />
      <Announcement />
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Product;
