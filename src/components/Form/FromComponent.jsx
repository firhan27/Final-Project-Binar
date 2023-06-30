import React, { useState, useEffect } from "react";
import client from "../../api/axios"
import { Form } from "react-bootstrap";
import Select from "react-select";
import "./FlightBookingForm.css";

const FromComponent = (props) => {
  const [dataFrom, setDataFrom] = useState([]);

  const fetchApi = async () => {
    try {
      const response = await client.get('/airports');
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
    value: airport.airport_code,
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
