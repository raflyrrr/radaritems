  
import React, { useState } from 'react';
import styled from 'styled-components';

import Logo from '../components/Logo';
import TextInput from '../components/form-controls/TextInput';
import Button from '../components/Button';

const LoginForm = styled.form`
  max-width: 400px;
  margin: 120px auto;
  padding: 40px 20px 20px;
  border-radius: 5px;
  border: 1px solid #E5E5E5;
  background-color: #FFFFFF;
  > h1 {
    text-align: center;
    margin-bottom: 40px;
  }
  input {
    width: 100%;
    box-sizing: border-box;
  }
`;

const FormAction = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <LoginForm>
      <Logo />

      <TextInput
        type="email"
        name="email"
        label="Email"
        onChange={e => setEmail(e.target.value)}
        value={email}
      />

      <TextInput
        type="password"
        name="password"
        label="Password"
        onChange={e => setPassword(e.target.value)}
        value={password}
      />

      <FormAction>
        <Button type="secondary" text="Daftar Disini" href="/daftar" />
        <Button type="primary" text="Login" />
      </FormAction>
    </LoginForm>
  );
};

export default Login;