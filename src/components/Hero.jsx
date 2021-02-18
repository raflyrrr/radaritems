import React, { useState } from "react";
import styled from "styled-components";

import { ReactComponent as VectorImages } from "../images/searchbox.svg";
import Title from "./Title";
import SelectInput from "./form-controls/SelectInput";
import TextInput from "./form-controls/TextInput";
import Button from "./Button";

const HeroWrapper = styled.div`
  background-color: #eff5ff;
  max-width: 1200px;
  border-radius: 5px;
  margin: 60px auto;
  height: 280px;
  position: relative;

  .search-box {
    position: absolute;
    left: 20px;
    top: 50%;
    transform: translateY(-50%);
  }
  > svg {
    position: absolute;
    right: -20px;
    top: -20px;
    width: 500px;
    height: 357px;
    
  }
`;

const Form = styled.form`
  display: flex;
  margin-top: 30px;
  > * {
    margin: 0 10px;
    &:first-child {
      margin-left: 0;
    }
    &:last-child {
      margin-right: 0;
    }
  }
`;

const provinceOptions = [
  {
    value: "Jakarta Timur",
    label: "Jakarta Timur",
  },
  {
    value: "Jakarta Barat",
    label: "Jakarta Barat",
  },
  {
    value: "Jakarta Selatan",
    label: "Jakarta Selatan",
  },
  {
    value: "Jakarta Pusat",
    label: "Jakarta Pusat",
  },
];

const Hero = () => {
  const [textValue, setTextValue] = useState('');
  const [optionValue, setOptionValue] = useState('');

  const handleSubmit = (e) =>{
        e.preventDefault();
        
        alert(`Kamu mencari ${textValue} di lokasi ${optionValue}`)
  };

  return (
    <HeroWrapper>
      <div className="search-box">
        <Title text="Cari barang, tanpa Ribet" size="large" />
        <Form onSubmit={handleSubmit}>
          <SelectInput
            options={provinceOptions}
            placeholder="Pilih lokasi iklan"
            value={optionValue}
            onChange={(e)=>setOptionValue(e.target.value)}
          />
          <TextInput
            placeholder="Temukan barang impianmu disini"
            name="search"
            value={textValue}
            onChange={(e) => setTextValue(e.target.value)}
          />
          <Button text="Cari" type="primary" />
        </Form>
      </div>
      <VectorImages />
    </HeroWrapper>
  );
};

export default Hero;
