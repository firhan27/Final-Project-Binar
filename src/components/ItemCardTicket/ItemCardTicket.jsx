import React from "react";
import DetailCardTicket from "../DetailCardTicket/DetailCardTicket";
import { Thumbnail } from "../../assets";
import "./ItemCardTicket.css";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
const ItemCardTicket = ({ isActive, onClick }) => {
  return (
    <div className="card p-4 d-flex flex-column gap-1 border-0 shadow">
      <div className="d-flex justify-content-between">
        <p>
          <img src={Thumbnail} alt="logo" className="me-2" />
          Jet Air - Economy
        </p>
        <button className="bg-transparent border-0" onClick={onClick}>
          {isActive !== null && isActive ? (
            <BsChevronUp size={20} />
          ) : (
            <BsChevronDown size={20} />
          )}
        </button>
      </div>
      <div className="d-flex justify-content-between">
        <div className="ms-2 col-7 d-flex justify-content-center align-items-center gap-1 px-2">
          <div className="d-flex flex-column">
            <p className="my-0 fw-bold">07:00</p>
            <p className="my-0 fw-bold">JKT</p>
          </div>
          <div className="col-8 text-center">
            <p className="my-0 text-muted">4h 0m</p>
            <hr className="my-0" />
            <p className="my-0 text-muted">Direct</p>
          </div>
          <div className="d-flex flex-column">
            <p className="my-0 fw-bold">11:00</p>
            <p className="my-0 fw-bold">MLB</p>
          </div>
        </div>
        <button className="col d-flex text-center bg-transparent border-0 align-items-center">
          <i className="far fs-5 fa-suitcase-rolling text-purple"></i>
        </button>
        <div className="col-3 d-flex flex-column justify-content-end">
          <p className="h5 fw-bolder text-purple">IDR 4.950.000</p>
          <button className="btn btn-purple text-white w-75 mx-auto rounded-pill btn-ticket">
            Pilih
          </button>
        </div>
      </div>
      {isActive !== null && isActive && <DetailCardTicket />}
    </div>
  );
};

export default ItemCardTicket;
