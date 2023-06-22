import React from "react";

const DetailCardTicket = () => {
  return (
    <div>
      <div className="d-flex flex-column border-top mt-3 mb-0 pt-3 pb-0">
        <p className="fw-bold">Detail Penerbangan</p>
        <div className="row justify-content-between">
          <div className="col fw-bolder">07:00</div>
          <div className="col text-end fw-bolder text-purple">
            Keberangkatan
          </div>
        </div>
        <div className="col">3 Maret 2023</div>
        <div className="col fw-semibold">
          Soekarno Hatta - Terminal 1A Domestik
        </div>
        <div className="border-top w-50 mx-auto my-4"></div>
        <div className="col d-flex align-items-center justify-content-start px-2 gap-3">
          <div className="">
            <i className="fal fa-cube me-2"></i>
          </div>
          <div className="col d-flex flex-column">
            <p className="my-0 fw-bolder">Jet Air - Economy</p>
            <p className="my-0 fw-bolder">JT -203</p>
            <div className="my-1"></div>
            <p className="my-0 fw-bolder">Informasi</p>
            <p className="my-0">Baggage 20 kg</p>
            <p className="my-0">Kabit baggage 20 kg</p>
            <p className="my-0">In Flight Entertainment</p>
          </div>
        </div>
        <div className="border-bottom w-50 mx-auto my-4"></div>
        <div className="row justify-content-between">
          <div className="col fw-bolder">11:00</div>
          <div className="col text-end fw-bolder text-purple">Kedatangan</div>
        </div>
        <div className="col">3 Maret 2023</div>
        <div className="col fw-semibold">Melbourne International Airport</div>
      </div>
    </div>
  );
};

export default DetailCardTicket;
