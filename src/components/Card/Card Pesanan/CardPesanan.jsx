import React from "react";
import { Card, Stack } from "react-bootstrap";
import "./CardPesanan.css";
import { TiLocation } from "react-icons/ti";
import { MdArrowForwardIos } from "react-icons/md";

const CardPesanan = () => {
  return (
    <Card className="card-pesanan">
      <Card.Body>
        <div>
          <p className="status">Issued</p>
        </div>
        <Stack direction="horizontal" className="d-flex justify-content-between" gap={3}>
          <div className="text-center">
            <p className="fw-bold">
              <TiLocation />
              Jakarta
            </p>
            <p>5 maret 2023</p>
            <p>19:10</p>
          </div>
          <div>
            <MdArrowForwardIos />
          </div>
          <div className="">
            <p>4h 0m</p>
          </div>
          <div>
            <MdArrowForwardIos />
          </div>
          <div className="text-center">
            <p className="fw-bold">
              <TiLocation />
              Melbeurne
            </p>
            <p>5 maret 2023</p>
            <p>19:10</p>
          </div>
        </Stack>
        <hr className="hr-clr" />
        <Stack direction="horizontal" className="d-flex justify-content-between" gap={3}>
          <div className="">
            <b>Booking Code:</b>
            <p>dasd7adk2</p>
          </div>
          <div className="">
            <b>Class:</b>
            <p>Economy</p>
          </div>
          <div className="">
            <b>IDR 9.850.000</b>
          </div>
        </Stack>
      </Card.Body>
    </Card>
  );
};

export default CardPesanan;
