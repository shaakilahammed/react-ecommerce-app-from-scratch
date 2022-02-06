import { Send, Update } from '@material-ui/icons';
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { mobile } from '../config/responsive';
import { remove, update } from '../redux/userSlice';

const Container = styled.div`
  height: 60vh;
  background-color: #fcf5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Title = styled.h1`
  font-size: 70px;
  margin: 20px;
`;
const Desc = styled.div`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;

  ${mobile({ textAlign: 'center' })}
`;
const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;
  margin: 10px;

  ${mobile({ width: '80%' })}
`;
const Input = styled.input`
  border: none;
  flex: 8;
  padding-left: 20px;
`;
const Button = styled.button`
  /* flex: 1; */
  padding: 15px;
  margin: 10px;
  border: none;
  background-color: teal;
  color: #fff;
`;

const FormTest = () => {
  const user = useSelector((state) => state.user);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');

  const dispatch = useDispatch();

  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(update({ username, email }));
  };

  const handleDelete = (e) => {
    e.preventDefault();
    dispatch(remove());
  };

  return (
    <Container>
      <Title>FormTest</Title>
      <InputContainer>
        <Input
          placeholder={user.username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </InputContainer>
      <InputContainer>
        <Input
          placeholder={user.email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </InputContainer>
      <Button onClick={handleUpdate}>Update</Button>
      <Button onClick={handleDelete}>Delete</Button>
    </Container>
  );
};

export default FormTest;
