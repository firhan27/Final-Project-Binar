import React, { useState, useEffect } from "react";
import axios from "axios";
import { Form } from "react-bootstrap";
import Select from "react-select";
import "./FlightBookingForm.css";

const FromComponent = (props) => {
  const [dataFrom, setDataFrom] = useState([]);
  const URL = "https://skypass-dev.up.railway.app/airports";

  const fetchApi = async () => {
    try {
      const response = await axios.get(URL);
      setDataFrom(response.data.data.airports);
    } catch (error) {
      console.error(error);
    }
  };

  const [inputValue, setInputValue] = useState();
  const inputHandleChange = (selectedOption) => {
    setInputValue(selectedOption);
    props.setDataFrom(selectedOption);
  };

  const handleClick = (event) => {
    event.preventDefault();
    props.dataSelect(inputValue);
  };

  useEffect(() => {
    fetchApi();
  }, []);

  // Transform the airport data into options array for react-select
  const selectOptions = dataFrom.map((airport) => ({
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

export default FromComponent;
