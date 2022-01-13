import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height: 60px;
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 1;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
`;
const Center = styled.div`
  flex: 1;
`;
const Right = styled.div`
  flex: 1;
`;

const NavBar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
        </Left>
        <Center>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </Center>
        <Right>Right</Right>
      </Wrapper>
    </Container>
  );
};

export default NavBar;
