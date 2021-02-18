import React from 'react';
import styled from 'styled-components';

const InputSection = styled.section`
  position: relative;
  margin-bottom: 35px;
  &:focus-within label,
  input:not(:placeholder-shown)+label {
    transform: translateY(-45px);
    left: 0;
    color: #1F1F1F;
    font-size: 14px;
  }
  input {
    border: none;
    padding: 12px 20px;
    font-size: 14px;
    border-radius: 5px;
    border: 1px solid #E5E5E5;
    color: #A3A3A3;
    width: 350px;
    position: relative;
    ::placeholder { color: #A3A3A3; }
    &:focus { transition: 100ms; }
  }
  label {
    position: absolute;
    left: 15px;
    top: 50%;
    transform: translateY(-50%);
    transform-origin: 0%;
    transition: transform 100ms, left 100ms;
    font-size: 12px;
    pointer-events: none;
    color: #A3A3A3;
  }
`;


const TextInput = ({
  name,
  placeholder,
  value,
  onChange,
  label,
  type,
}) => {
  return (
    <InputSection>
      <input
        type={type || "text"}
        name={name}
        placeholder={label ? " " : placeholder}
        value={value}
        onChange={onChange}
        autoComplete="off"
      />

      {label &&
        <label>{label}</label>
      }
    </InputSection>
  );
};

export default TextInput;