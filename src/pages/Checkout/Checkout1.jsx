import React, { useState, useEffect, useContext } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { FaAngleRight } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import CheckoutForm from '../../components/Chekout/ChekoutForm';
import PassengerForm from '../../components/Chekout/PassengerForm';
import Detail from '../../components/Chekout/Detail';
import PassengerContext from '../../utils/passengerContext';
import { toast } from 'react-toastify';

const Checkout1 = () => {
  // config
  const [timeRemaining, setTimeRemaining] = useState(900);
  const { passengerTypes } = useContext(PassengerContext);
  const [passengers, setPassengers] = useState([]);
  const nav = useNavigate();
  const location = useLocation();

  console.log('ini id flights', location.state.id);

  // protect
  useEffect(() => {
    if (typeof passengerTypes === 'undefined') {
      nav('/'); // Redirect ke halaman home jika passengerTypes undefined
    }
  }, [passengerTypes, nav]);

  // Create a function to update passengers data in state
  const updatePassengerData = (index, passengerData) => {
    setPassengers((prevPassengers) => {
      const updatedPassengers = [...prevPassengers];
      updatedPassengers[index] = passengerData;
      return updatedPassengers;
    });
  };

  const handleFormSubmit = () => {
    // Memeriksa setiap objek dalam array passengers
    const isDataValid = passengers.every((passenger) => {
      if (passenger.passenger_type === 'baby') {
        return true; // Melewati pemeriksaan untuk objek dengan passenger_type "baby"
      }

      return (
        passenger.name !== undefined &&
        passenger.surname !== undefined &&
        passenger.gender !== undefined &&
        passenger.bod !== undefined &&
        passenger.citizenship !== undefined &&
        passenger.ktp_passport !== undefined &&
        passenger.country_publication !== undefined &&
        passenger.valid_until !== undefined &&
        passenger.passenger_type !== undefined
      );
    });

    if (isDataValid) {
      // Mengecek dan menambahkan penumpang bayi
      if (passengerTypes?.baby > 0) {
        // Mencari penumpang bayi yang sudah ada
        const existingBabyPassengers = passengers.filter(
          (passenger) => passenger.passenger_type === 'baby'
        );

        // Menentukan berapa banyak penumpang bayi baru yang perlu ditambahkan
        const babyPassengersToAddCount =
          passengerTypes.baby - existingBabyPassengers.length;

        // Menambahkan penumpang bayi baru ke array passengers
        const babyPassengersToAdd = Array.from({
          length: babyPassengersToAddCount,
        }).map(() => ({
          passenger_type: 'baby',
        }));

        setPassengers((prevPassengers) => [
          ...prevPassengers,
          ...babyPassengersToAdd,
        ]);

        // Kirim data ke API
        console.log('valid bro', passengers);
      }
    } else {
      toast.warn('data tidak lengkap');
    }

    setTimeRemaining(900); // Mengatur waktu ulang menjadi 15 menit
  };

  const handleFormChange = (passengerData) => {
    setTimeRemaining(900); // Mengatur waktu ulang menjadi 15 menit
  };

  const formatTime = (time) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;

    return `${hours < 10 ? '0' + hours : hours}:${
      minutes < 10 ? '0' + minutes : minutes
    }:${seconds < 10 ? '0' + seconds : seconds}`;
  };

  return (
    <>
      <Container fluid className='p-0 m-0 shadow py-4'>
        <Container>
          <Row className='mt-5'>
            <Row className='mb-1'>
              <Col className='d-flex align-items-center'>
                <Button
                  className='border-0 fs-5 fw-bold'
                  style={{
                    background: 'none',
                    fontHeight: '30px',
                  }}
                >
                  {' '}
                  Isi Data Diri
                </Button>
                <FaAngleRight
                  size={20}
                  style={{
                    marginLeft: '5px',
                    marginRight: '5px',
                    marginBottom: '-3px',
                  }}
                />
                <Button
                  className='border-0 fs-5 fw-bold'
                  style={{
                    background: 'none',
                    fontHeight: '30px',
                  }}
                >
                  {' '}
                  Bayar
                </Button>
                <FaAngleRight
                  size={20}
                  style={{
                    marginLeft: '5px',
                    marginRight: '5px',
                    marginBottom: '-3px',
                  }}
                />
                <Button
                  className='border-0 fs-5 fw-bold'
                  style={{
                    background: 'none',
                    fontHeight: '30px',
                  }}
                >
                  {' '}
                  Selesai
                </Button>
              </Col>
            </Row>

            <Col>
              <Card
                className='p-0 m-0'
                style={{ backgroundColor: 'red', borderRadius: '12px' }}
              >
                <Card.Body>
                  <p
                    className='text-center text-white p-0 m-0 fs-6 fw-bold '
                    style={{
                      lineHeight: '24px',
                    }}
                  >
                    Selesaikan dalam {formatTime(timeRemaining)}
                  </p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </Container>

      <Container>
        <Row>
          <Col sm={8}>
            <Row className='mt-5'>
              <Col>
                <Card className='rounded-0' style={{ background: 'none' }}>
                  <Card.Body>
                    <CheckoutForm
                      onSubmit={handleFormSubmit}
                      onChange={handleFormChange}
                    />
                  </Card.Body>
                </Card>
              </Col>
            </Row>

            <Row className='mt-5'>
              <Col>
                {/* looping adults and children */}
                {Array.from({ length: passengerTypes?.adults || 0 }).map(
                  (_, index) => (
                    <Card
                      className='rounded-0'
                      style={{ background: 'none' }}
                      key={index}
                    >
                      <Card.Body>
                        <PassengerForm
                          onSubmit={handleFormSubmit}
                          onChange={handleFormChange}
                          type={'adult'}
                          updatePassengerData={updatePassengerData}
                          index={index + 1}
                        />
                      </Card.Body>
                    </Card>
                  )
                )}

                {Array.from({ length: passengerTypes?.children || 0 }).map(
                  (_, index) => (
                    <Card
                      className='rounded-0'
                      style={{ background: 'none' }}
                      key={index}
                    >
                      <Card.Body>
                        <PassengerForm
                          onSubmit={handleFormSubmit}
                          onChange={handleFormChange}
                          type={'kid'}
                          updatePassengerData={updatePassengerData}
                          index={index + 1 + passengerTypes?.adults}
                        />
                      </Card.Body>
                    </Card>
                  )
                )}

                {/* end loop */}
              </Col>
            </Row>

            <Row className='mt-5'>
              <Card className='border-0' style={{ background: 'none' }}>
                <Button
                  className='mt-4 p-3 border-0 text-white fs-5 fw-bold'
                  style={{
                    background: '#7126B5',
                    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                    borderRadius: '12px',
                  }}
                  size='lg'
                  onClick={handleFormSubmit}
                >
                  Simpan
                </Button>
              </Card>
            </Row>
          </Col>

          <Col sm={4}>
            <Detail />
            <Card className='border-0' style={{ background: 'none' }}>
              <Button
                as={Link}
                to='/checkout/payment'
                className='mt-4 p-3 border-0 fs-5 fw-bold text-white'
                style={{
                  background: '#FF0000',
                  borderRadius: '12px',
                }}
                size='lg'
              >
                Lanjut Bayar
              </Button>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Checkout1;
