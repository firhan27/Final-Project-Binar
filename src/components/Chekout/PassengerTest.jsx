import React from 'react';
import { Container, Form } from 'react-bootstrap';

const PassengerTest = (props) => {
    return (
        <Container>
            <h4
                className=""
                style={{
                    color: '#000000',
                    fontSize: '20px',
                    fontWeight: '700',
                    fontHeight: '30px',
                }}
            >
                {' '}
                Isi Data Penumpang
            </h4>
            <h5
                className="mt-3 text-white p-2"
                style={{
                    backgroundColor: '#303030',
                    borderTopLeftRadius: '10px',
                    borderTopRightRadius: '10px',
                    fontSize: '16px',
                    fontWeight: '500',
                    fontHeight: '24px',
                }}
            >
                Data Penumpang 1 - {props.passengerType}
            </h5>

            <Form>
                <Form.Group controlId="title" className="p-2">
                    <Form.Label style={{ color: '#4B1979', fontSize: '14px', fontWeight: '700' }}>Title</Form.Label>
                    <Form.Control className="rounded-1" type="text" name="title" />
                </Form.Group>

                <Form.Group controlId="fullName" className="p-2">
                    <Form.Label style={{ color: '#4B1979', fontSize: '14px', fontWeight: '700' }}>
                        Nama Lengkap
                    </Form.Label>
                    <Form.Control className="rounded-1" type="text" name="fullName" />
                </Form.Group>

                <Form.Group controlId="familyName" className="p-2">
                    <Form.Label style={{ color: '#4B1979', fontSize: '14px', fontWeight: '700' }}>
                        Nama Keluarga
                    </Form.Label>
                    <Form.Control className="rounded-1" type="text" name="familyName" />
                </Form.Group>

                <Form.Group controlId="gender" className="p-2">
                    <Form.Label style={{ color: '#4B1979', fontSize: '14px', fontWeight: '700' }}>Gender</Form.Label>
                    <Form.Select name="gender">
                        <option hidden={true}>Select Gender</option>
                        <option value={true}>Male</option>
                        <option value={false}>Female</option>
                    </Form.Select>
                </Form.Group>

                <Form.Group controlId="dateOfBirth" className="p-2">
                    <Form.Label style={{ color: '#4B1979', fontSize: '14px', fontWeight: '700' }}>
                        Tanggal Lahir
                    </Form.Label>
                    <Form.Control className="rounded-1" type="date" name="dateOfBirth" />
                </Form.Group>

                <Form.Group controlId="nationality" className="p-2">
                    <Form.Label style={{ color: '#4B1979', fontSize: '14px', fontWeight: '700' }}>
                        Kewarganegaraan
                    </Form.Label>
                    <Form.Control className="rounded-1" type="text" name="nationality" />
                </Form.Group>

                <Form.Group controlId="idType" className="p-2">
                    <Form.Label style={{ color: '#4B1979', fontSize: '14px', fontWeight: '700' }}>
                        KTP/Paspor
                    </Form.Label>
                    <Form.Control className="rounded-1" type="text" name="idType" />
                </Form.Group>

                <Form.Group controlId="idIssuer" className="p-2">
                    <Form.Label style={{ color: '#4B1979', fontSize: '14px', fontWeight: '700' }}>
                        Nama Penerbit
                    </Form.Label>
                    <Form.Control className="rounded-1" type="text" name="idIssuer" />
                </Form.Group>

                <Form.Group controlId="idValidity" className="p-2">
                    <Form.Label style={{ color: '#4B1979', fontSize: '14px', fontWeight: '700' }}>
                        Berlaku Selajutnya
                    </Form.Label>
                    <Form.Control className="rounded-1" type="date" name="idValidity" />
                </Form.Group>
            </Form>
        </Container>
    );
};

export default PassengerTest;
