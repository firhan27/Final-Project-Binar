import React, { useState, useEffect, useContext } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { FaAngleRight } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import PassengerForm from '../../components/Chekout/PassengerForm';
import Detail from '../../components/Chekout/Detail';
import PassengerContext from '../../utils/passengerContext';
import { toast } from 'react-toastify';
import client from '../../api/axios';

const Checkout1 = () => {
  // config
  const [timeRemaining, setTimeRemaining] = useState(900);
  const [flight, setFlight] = useState();
  const [bookingCode, setBookingCode] = useState();
  const { passengerTypes } = useContext(PassengerContext);
  const [passengers, setPassengers] = useState([]);
  const nav = useNavigate();
  const location = useLocation();
  const [isDataSubmitted, setIsDataSubmitted] = useState(false);
  const [isAllow, setIsAllow] = useState(true);
  const [dataFetched, setDataFetched] = useState(false);

  // protect
  useEffect(() => {
    // validate
    if (typeof passengerTypes === 'undefined' || !location.state) {
      nav(-1); // Redirect ke halaman pencarian jika passengerTypes undefined
      toast.warn('Tiket tidak ditemukan!');
    } else {
      const fetchData = async () => {
        try {
          const response = await client.get(
            `/flights/oneway/${location.state.id}`
          );
          if (response.data.status === true) {
            setDataFetched(true);
            setFlight(response.data.data.flight[0]);
          }
        } catch (error) {
          toast.warn('opps server error!');
        }
      };
      // Fetch data hanya jika isDataFetched adalah false
      if (!dataFetched) {
        fetchData();
      }
    }

    if (timeRemaining <= 0) {
      setIsAllow(false);
    } else {
      const timer = setTimeout(() => {
        setTimeRemaining((prevTime) => prevTime - 1);
      }, 1000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [passengerTypes, nav, location, timeRemaining, dataFetched]);

  // Create a function to update passengers data in state
  const updatePassengerData = (index, passengerData) => {
    setPassengers((prevPassengers) => {
      const updatedPassengers = [...prevPassengers];
      updatedPassengers[index] = passengerData;
      return updatedPassengers;
    });
  };

  const handleFormSubmit = async () => {
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
      if (passengerTypes?.baby > 0 || passengerTypes?.baby === 0) {
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

        // Menghitung total harga
        let totalPrice = 0;
        Object.entries(passengerTypes).forEach(([passengerType, count]) => {
          let price = flight.price * count; // Harga default
          if (passengerType === 'baby') {
            price = 0; // Set harga menjadi 0 untuk tipe "baby"
          }
          totalPrice += price;
        });

        // Menghitung pajak
        const taxRate = 0.11;
        const tax = Math.round(totalPrice * taxRate);
        const finalPrice = totalPrice + tax;

        // Kirim data ke API
        try {
          const token = localStorage.getItem('token');
          const response = await client.post(
            '/booking',
            {
              passengers: [...passengers, ...babyPassengersToAdd],
              information: {
                tax,
                total_price: Math.round(finalPrice),
                flight_id: location.state.id,
              },
            },
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );

          if (response.data.status === true) {
            setIsDataSubmitted(true);
            setIsAllow(false);
            setBookingCode(response.data.data.booking_code);
            toast.success('data booking sudah terkonfirmasi');
          }
        } catch (error) {
          console.log(error.response);
          toast.error('server error');
        }
      } else {
        toast.warn('data ada masalah');
      }
    } else {
      toast.warn('data tidak lengkap');
    }

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

  // condition
  if (!flight) {
    return <p>Loading...</p>;
  }

  const dataPayment = {
    flight,
    bookingCode,
    passengerTypes,
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
              <div
                className='p-3 m-0'
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
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
      <Container>
        <Row>
          <Col sm={8}>
            <Row className='mt-5'>
              <Col>
                {/* looping adults and children */}
                {Array.from({ length: passengerTypes?.adults || 0 }).map(
                  (_, index) => (
                    <Card
                      className='rounded-0'
                      style={{ background: 'none', borderBottom: 'none' }}
                      key={index}
                    >
                      <Card.Body>
                        <PassengerForm
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
                      style={{ background: 'none', borderTop: 'none' }}
                      key={index}
                    >
                      <Card.Body>
                        <PassengerForm
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
                  disabled={!isAllow ? true : false}
                >
                  Simpan
                </Button>
              </Card>
            </Row>
          </Col>

          <Col sm={4}>
            {/* bikin loading cek */}
            <Detail flight={flight} passengerTypes={passengerTypes} />
            {isDataSubmitted ? (
              <Card className='border-0' style={{ background: 'none' }}>
                <Button
                  as={Link}
                  to='/checkout/payment'
                  state={dataPayment}
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
            ) : null}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Checkout1;
