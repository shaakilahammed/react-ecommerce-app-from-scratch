import React from 'react';
import styled from 'styled-components';

import { categories } from '../config/data';
import CategoryItems from './CategoryItems';

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
`;

const Categories = () => {
  return (
    <Container>
      {categories.map((item) => (
        <CategoryItems item={item} />
      ))}
    </Container>
  );
};

export default Categories;
