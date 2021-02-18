import React, { useState } from 'react';
import styled from 'styled-components';

import Logo from '../components/Logo';
import TextInput from '../components/form-controls/TextInput';
import Button from '../components/Button';

const SignupForm = styled.form`
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

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <SignupForm>
      <Logo />

      <TextInput
        type="text"
        name="name"
        label="Nama Lengkap"
        onChange={e => setName(e.target.value)}
        value={name}
      />

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

      <TextInput
        type="password"
        name="password"
        label="Ulangi Password"
        onChange={e => setConfirmPassword(e.target.value)}
        value={confirmPassword}
      />

      <FormAction>
        <Button type="secondary" text="Login Disini" href="/login" />
        <Button type="primary" text="Daftar" />
      </FormAction>
    </SignupForm>
  );
};

export default Signup;