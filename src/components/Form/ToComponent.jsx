import React, { useState, useEffect } from "react";
import axios from "axios";
import { Form } from "react-bootstrap";
import planeVector from "../../assets/image/planeVector.png";
import "./FlightBookingForm.css";

const ToComponent = ({ dataSelect }) => {
  const [data, setData] = useState();
  const URL = "https://skypass-dev.up.railway.app/airports";

  const fetchApi = async () => {
    try {
      const response = await axios.get(URL);
      setData(response.data.data.airports);
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
      <img src={planeVector} alt="plane" className="font-button" />
      <Form.Label>To</Form.Label>
      <Form onSubmit={handleClick}>
        <Form.Select onChange={inputHandleChange}>{data && data.map((airport, i) => <option key={i}>{airport.city}</option>)}</Form.Select>
      </Form>
    </Form.Group>
  );
};

export default ToComponent;
