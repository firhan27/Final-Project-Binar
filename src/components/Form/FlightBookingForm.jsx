import React, { useContext, useState } from 'react';
import { Form, Row, Col, Button, Card, Container } from 'react-bootstrap';
import './FlightBookingForm.css';
import dateVector from '../../assets/image/dateVector.png';
import passangerVector from '../../assets/image/passangerVector.png';
import planeVector from '../../assets/image/planeVector.png';
import FromComponent from './FromComponent';
import ToComponent from './ToComponent';
import SeatClassComponent from './SeatClassComponent';
import PassengerComponent from './PassangerComponent';
import { useNavigate } from 'react-router-dom';
import PassengerContext from '../../utils/passengerContext';

const FlightBookingForm = (props) => {
    const [dataFrom, setDataFrom] = useState('');
    const [dataTo, setDataTo] = useState('');
    const [departureDate, setDeparatureDate] = useState('');
    const [returnDate, setReturnDate] = useState('');
    const [selectedPassengers, setSelectedPassengers] = useState();
    const [dataClass, setDataClass] = useState('');
    const { passengerTypes, setPassengerTypes } = useContext(PassengerContext);
    const navigate = useNavigate();

    const buttonClick = (event) => {
        event.preventDefault();
        navigate(
            `/search?from=${dataFrom.value}&to=${
                dataTo.value
            }&departure=${departureDate}&totalPassenger=${totalPassenger(selectedPassengers)}&classId=${
                dataClass.value
            }&type=departure&sort=asc`
        );
    };

    const totalPassenger = (passenger) => {
        return Object.values(passenger).reduce((acc, obj) => acc + obj, 0);
    };

    const [inputValue, setInputValue] = useState();

    const inputHandleChange = (event) => {
        setInputValue(event.target.value);
        props.setDataFrom(event.target.value);
        props.setDataTo(event.target.value);
        props.handlePassangerChange(event.target.value);
        props.setDataClass(event.target.value);
    };

    const handleClick = (event) => {
        event.preventDefault();
        props.dataSelect(inputValue);
    };

    const handleDataSelect = (passengers) => {
        setSelectedPassengers(passengers);
        setPassengerTypes(passengers);
    };
    return (
        <Container className="mt-4 mb-5">
            <Row className="justify-content-center">
                <Col xs={12} md={11}>
                    <Card bg="light" border="light" className="card-size">
                        <h3 className="fw-bold m-4">
                            Pilih Jadwal Penerbangan spesial di <span className="text-color">SkyPass!</span>
                        </h3>
                        <Card.Body>
                            <Form>
                                <Row>
                                    <Col>
                                        <Form.Group className="mb-3">
                                            <img src={planeVector} alt="plane" className="font-button" />
                                            <Form.Label>From</Form.Label>
                                            <FromComponent setDataFrom={setDataFrom} onChange={inputHandleChange} />
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group className="mb-3">
                                            <img src={planeVector} alt="plane" className="font-button" />
                                            <Form.Label>To</Form.Label>
                                            <ToComponent setDataTo={setDataTo} onChange={inputHandleChange} />
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Row className="mt-2">
                                    <Col>
                                        <Form.Group onSubmit={handleClick} className="mb-3">
                                            <img src={dateVector} alt="date" className="font-button font-size" />
                                            <Form.Label>Departure Date</Form.Label>
                                            <Form.Control
                                                type="date"
                                                value={departureDate}
                                                onChange={(e) => setDeparatureDate(e.target.value)}
                                            />
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group onSubmit={handleClick} className="mb-3">
                                            <img src={dateVector} alt="date" className="font-button font-size" />
                                            <Form.Label>Return Date</Form.Label>
                                            <Form.Control
                                                type="date"
                                                value={returnDate}
                                                onChange={(e) => setReturnDate(e.target.value)}
                                            />
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group className="mb-3">
                                            <img src={passangerVector} alt="passanger" className="font-button" />
                                            <Form.Label>Passengers</Form.Label>
                                            <PassengerComponent
                                                setSelectedPassengers={handleDataSelect}
                                                dataSelect={handleDataSelect}
                                                onChange={inputHandleChange}
                                            />
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group className="mb-3">
                                            <img src={passangerVector} alt="passanger" className="font-button" />
                                            <Form.Label>Seat Class</Form.Label>
                                            <SeatClassComponent
                                                setDataClass={setDataClass}
                                                onChange={inputHandleChange}
                                            />
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Col className="p-2 text-center">
                                    <Button
                                        type="button"
                                        className="custom-button mt-4 text-light w-100"
                                        onClick={buttonClick}
                                    >
                                        Cari Penerbangan
                                    </Button>
                                </Col>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default FlightBookingForm;
