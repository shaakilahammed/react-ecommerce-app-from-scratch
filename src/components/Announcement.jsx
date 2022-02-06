import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const Container = styled.div`
  height: 30px;
  background-color: teal;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  font-weight: 500;
`;

const Announcement = () => {
  const name = useSelector((state) => state.user.username);
  return <Container>Super Deal! Free Shipping - {name}</Container>;
};

export default Announcement;
