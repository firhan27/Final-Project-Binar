import React, { useState } from 'react';
import { Form, Container } from 'react-bootstrap';

const PassengerForm = ({ type, index = 1, updatePassengerData }) => {
  const [formData, setFormData] = useState({});

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    const updatedFormData = { ...formData, [name]: value };
    setFormData(updatedFormData);

    updatePassengerData(index - 1, {
      name: `${updatedFormData.fullName}`,
      surname: updatedFormData.familyName,
      gender: updatedFormData.gender,
      bod: updatedFormData.dateOfBirth,
      citizenship: updatedFormData.nationality,
      ktp_passport: updatedFormData.idType,
      country_publication: updatedFormData.idIssuer,
      valid_until: updatedFormData.idValidity,
      passenger_type: type,
    });
  };

  return (
    <Container>
      <h4
        className=''
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
        className='mt-3 text-white p-2'
        style={{
          backgroundColor: '#303030',
          borderTopLeftRadius: '10px',
          borderTopRightRadius: '10px',
          fontSize: '16px',
          fontWeight: '500',
          fontHeight: '24px',
        }}
      >
        Data Penumpang {index} - {type}
      </h5>

      <Form>
        <Form.Group controlId='gender' className='p-2'>
          <Form.Label
            style={{ color: '#4B1979', fontSize: '14px', fontWeight: '700' }}
          >
            Title
          </Form.Label>
          <Form.Select name='gender' onChange={handleOnChange} required>
            <option hidden={true}>Select Title</option>
            <option value={true}>Mr.</option>
            <option value={false}>Ms.</option>
          </Form.Select>
        </Form.Group>

        <Form.Group controlId='fullName' className='p-2'>
          <Form.Label
            style={{ color: '#4B1979', fontSize: '14px', fontWeight: '700' }}
          >
            Nama Lengkap
          </Form.Label>
          <Form.Control
            className='rounded-1'
            type='text'
            name='fullName'
            onChange={handleOnChange}
            required
          />
        </Form.Group>

        <Form.Group controlId='familyName' className='p-2'>
          <Form.Label
            style={{ color: '#4B1979', fontSize: '14px', fontWeight: '700' }}
          >
            Nama Keluarga
          </Form.Label>
          <Form.Control
            className='rounded-1'
            type='text'
            name='familyName'
            onChange={handleOnChange}
          />
        </Form.Group>

        <Form.Group controlId='dateOfBirth' className='p-2'>
          <Form.Label
            style={{ color: '#4B1979', fontSize: '14px', fontWeight: '700' }}
          >
            Tanggal Lahir
          </Form.Label>
          <Form.Control
            className='rounded-1'
            type='date'
            name='dateOfBirth'
            onChange={handleOnChange}
          />
        </Form.Group>

        <Form.Group controlId='nationality' className='p-2'>
          <Form.Label
            style={{ color: '#4B1979', fontSize: '14px', fontWeight: '700' }}
          >
            Kewarganegaraan
          </Form.Label>
          <Form.Control
            className='rounded-1'
            type='text'
            name='nationality'
            onChange={handleOnChange}
          />
        </Form.Group>

        <Form.Group controlId='idType' className='p-2'>
          <Form.Label
            style={{ color: '#4B1979', fontSize: '14px', fontWeight: '700' }}
          >
            KTP/Paspor
          </Form.Label>
          <Form.Control
            className='rounded-1'
            type='text'
            name='idType'
            onChange={handleOnChange}
          />
        </Form.Group>

        <Form.Group controlId='idIssuer' className='p-2'>
          <Form.Label
            style={{ color: '#4B1979', fontSize: '14px', fontWeight: '700' }}
          >
            Nama Penerbit
          </Form.Label>
          <Form.Control
            className='rounded-1'
            type='text'
            name='idIssuer'
            onChange={handleOnChange}
          />
        </Form.Group>

        <Form.Group controlId='idValidity' className='p-2'>
          <Form.Label
            style={{ color: '#4B1979', fontSize: '14px', fontWeight: '700' }}
          >
            Berlaku Selajutnya
          </Form.Label>
          <Form.Control
            className='rounded-1'
            type='date'
            name='idValidity'
            onChange={handleOnChange}
          />
        </Form.Group>
      </Form>
    </Container>
  );
};

export default PassengerForm;
