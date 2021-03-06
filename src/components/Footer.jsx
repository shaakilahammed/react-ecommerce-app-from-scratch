import {
  Facebook,
  Instagram,
  LinkedIn,
  MailOutline,
  MailOutlined,
  Phone,
  Pinterest,
  Room,
  Twitter,
  YouTube,
} from '@material-ui/icons';
import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { mobile } from '../config/responsive';

const Container = styled.div`
  display: flex;

  ${mobile({ flexDirection: 'column' })}
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
const Logo = styled.h1``;
const Desc = styled.p`
  margin: 20px 0;
`;
const SocialContainer = styled.div`
  display: flex;
`;
const SocialIcon = styled.div`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  color: #fff;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;

  ${mobile({ marginRight: '7px' })}
`;
const Center = styled.div`
  flex: 1;
  padding: 20px;

  ${mobile({ backgroundColor: '#fcf5f5' })}
`;
const Title = styled.h3`
  margin-bottom: 30px;
`;
const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;
const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;
const Right = styled.div`
  flex: 1;
  padding: 20px;
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
  width: 50%;
`;

const Footer = () => {
  const name = useSelector((state) => state.user.username);
  return (
    <Container>
      <Left>
        <Logo>GFORG</Logo>
        <Desc>
          An ecommerce mobile app should aim at providing an immersive and
          unique experience that makes online shopping a much simpler and
          seamless process. At the same time, it should include features that
          drive sales and boost revenues for your business.
        </Desc>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <Twitter />
          </SocialIcon>
          <SocialIcon color="E60023">
            <Pinterest />
          </SocialIcon>
          <SocialIcon color="0077B7">
            <LinkedIn />
          </SocialIcon>
          <SocialIcon color="F20000">
            <YouTube />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms and Conditions</ListItem>
          <ListItem>Privacy Policy</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact @{name}</Title>
        <ContactItem>
          <Room style={{ marginRight: '10px' }} /> 14/B Board Bazar, Gazipur
          1704
        </ContactItem>
        <ContactItem>
          <Phone style={{ marginRight: '10px' }} /> +8802 123 1234
        </ContactItem>
        <ContactItem>
          <MailOutline style={{ marginRight: '10px' }} /> contact@gforg.com
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  );
};

export default Footer;
