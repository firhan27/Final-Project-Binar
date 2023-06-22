import React, { useState, useEffect } from "react";
import axios from "axios";
import { Form } from "react-bootstrap";

const SeatClassComponent = ({ dataSelect }) => {
  const [data, setData] = useState();
  const URL = "https://skypass-dev.up.railway.app/class";

  const fetchApi = async () => {
    try {
      const response = await axios.get(URL);
      setData(response.data.data.classes);
    } catch (error) {
      console.error(error);
    }
  };

  const [inputValue, setInputValue] = useState();
  const inputHandleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleClick = (event) => {
    event.preventDefault();
    dataSelect(inputValue);
  };

  useEffect(() => {
    fetchApi();
  }, [URL]);

  return (
    <Form.Group>
      <Form onSubmit={handleClick}>
        <Form.Select onChange={inputHandleChange}>{data && data.map((classes, i) => <option key={i}>{classes.name}</option>)}</Form.Select>
      </Form>
    </Form.Group>
  );
};

export default SeatClassComponent;
