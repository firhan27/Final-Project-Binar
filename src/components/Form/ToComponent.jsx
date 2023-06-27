import React, { useState, useEffect } from "react";
import axios from "axios";
import { Form } from "react-bootstrap";
import Select from "react-select";
import "./FlightBookingForm.css";

const ToComponent = (props) => {
  const [dataTo, setDataTo] = useState([]);
  const URL = "https://skypass-dev.up.railway.app/airports";

  const fetchApi = async () => {
    try {
      const response = await axios.get(URL);
      setDataTo(response.data.data.airports);
    } catch (error) {
      console.error(error);
    }
  };

  const [inputValue, setInputValue] = useState();
  const inputHandleChange = (selectedOption) => {
    setInputValue(selectedOption);
    props.setDataTo(selectedOption);
  };

  const handleClick = (event) => {
    event.preventDefault();
    props.dataSelect(inputValue);
  };

  useEffect(() => {
    fetchApi();
  }, [URL]);

  // Transform the airport data into options array for react-select
  const selectOptions = dataTo.map((airport) => ({
    value: airport.city,
    label: airport.city,
  }));

  return (
    <Form.Group>
      <Form onSubmit={handleClick}>
        <Select options={selectOptions} onChange={inputHandleChange} isClearable={true} />
      </Form>
    </Form.Group>
  );
};

export default ToComponent;
