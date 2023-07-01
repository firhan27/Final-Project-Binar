import React from "react";

const DetailCardTicket = ({ data }) => {
  return (
    <div>
      <div className="d-flex flex-column border-top mt-3 mb-0 pt-3 pb-0">
        <p className="fw-bold">Detail Penerbangan</p>
        <div className="row justify-content-between">
          <div className="col fw-bolder">{data.departure_time}</div>
          <div className="col text-end fw-bolder text-purple">Keberangkatan</div>
        </div>
        <div className="col">{data.departure_date}</div>
        <div className="col fw-semibold">
          {data.departure_airport} - {data.departure_terminal_name}
        </div>
        <div className="border-top w-50 mx-auto my-4"></div>
        <div className="col d-flex align-items-center justify-content-start px-2 gap-3">
          <div className="">
            <i className="fal fa-cube me-2"></i>
          </div>
          <div className="col d-flex flex-column">
            <p className="my-0 fw-bolder">
              {data.airline_name} - {data.class}
            </p>
            <p className="my-0 fw-bolder">{data.flight_number}</p>
            <div className="my-1"></div>
            <p className="my-0 fw-bolder">Informasi</p>
            <p className="my-0">{data.baggage_capacity} kg</p>
            <p className="my-0">{data.cabin_capacity} kg</p>
            <p className="my-0">In Flight Entertainment</p>
          </div>
        </div>
        <div className="border-bottom w-50 mx-auto my-4"></div>
        <div className="row justify-content-between">
          <div className="col fw-bolder">{data.arrival_time}</div>
          <div className="col text-end fw-bolder text-purple">Kedatangan</div>
        </div>
        <div className="col">{data.arrival_date}</div>
        <div className="col fw-semibold">{data.arrival_airport}</div>
      </div>
    </div>
  );
};

export default DetailCardTicket;
