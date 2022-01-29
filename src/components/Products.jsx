import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

import { popularProducts } from '../config/data';
import Product from './Product';

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
const Products = ({ category, filter, sort }) => {
  const [products, setProducts] = useState([]);
  const [filterProducts, setFilterProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, [category]);

  const getProducts = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/products');
      console.log(response);
    } catch (error) {}
  };

  return (
    <Container>
      {popularProducts.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Products;
