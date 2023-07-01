import React from "react";
import moment from "moment/moment";
require('moment/locale/id');

const DetailCardTicket = ({data}) => {
  return (
    <div>
      <div className="d-flex flex-column border-top mt-3 mb-0 pt-3 pb-0">
        <p className="fw-bold">Detail Penerbangan</p>
        <div className="row justify-content-between">
          <div className="col fw-bolder">{moment(data.departure_time, 'HH:mm:ss').format("HH:mm")}</div>
          <div className="col text-end fw-bolder text-purple">
            Keberangkatan
          </div>
        </div>
        <div className="col">{moment(data.departure_date).format("DD MMMM YYYY")}</div>
        <div className="col fw-semibold mt-1">
          {`${data.departure_airport} - ${data.departure_terminal_name}`}
        </div>
        <div className="border-top w-50 mx-auto my-4"></div>
        <div className="col d-flex align-items-center justify-content-start px-2 gap-3">
          <div className="">
            <i className="fal fa-cube me-2"></i>
          </div>
          <div className="col d-flex flex-column">
            <p className="my-0 fw-bolder">{`${data.airline_name} - ${data.class}`}</p>
            <p className="my-0 fw-bolder">{data.flight_number}</p>
            <div className="my-1"></div>
            <p className="my-0 fw-bolder">Informasi</p>
            <p className="my-0">{`Baggage ${data.baggage_capacity} kg`}</p>
            <p className="my-0">{`Cabin ${data.cabin_capacity} kg`}</p>
            {data.flight_entertainment?<p className="my-0">In Flight Entertainment</p>:null}
            
          </div>
        </div>
        <div className="border-bottom w-50 mx-auto my-4"></div>
        <div className="row justify-content-between">
          <div className="col fw-bolder">{moment(data.arrival_time, 'HH:mm:ss').format("HH:mm")}</div>
          <div className="col text-end fw-bolder text-purple">Kedatangan</div>
        </div>
        <div className="col">{moment(data.arrival_date).format("DD MMMM YYYY")}</div>
        <div className="col fw-semibold">{data.arrival_airport}</div>
      </div>
    </div>
  );
};

export default DetailCardTicket;
