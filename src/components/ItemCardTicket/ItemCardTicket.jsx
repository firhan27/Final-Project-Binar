import React from "react";
import DetailCardTicket from "../DetailCardTicket/DetailCardTicket";
import "./ItemCardTicket.css";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import moment from "moment/moment";
require("moment/locale/id");

const ItemCardTicket = ({ data, isActive, onClick }) => {
  const navigate = useNavigate();
  const handleSelectTicket = () => {
    navigate("/checkout", { state: { id: data.id } });
  };

  const formatCurrency = (amount) => {
    const formattedAmount = new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0, // Mengatur jumlah digit desimal minimum
      maximumFractionDigits: 0,
    }).format(amount);

    // Menghapus angka desimal setelah koma
    const formattedPrice = formattedAmount.replace(/\.00$/, "");

    return formattedPrice;
  };

  const formattedPrice = formatCurrency(data.price);

  return (
    <div className="card p-4 d-flex flex-column gap-1 border-0 shadow">
      <div className="d-flex justify-content-between">
        <p>
          <img src={data.logo_url} alt="logo" className="me-2" width="50" />
          {data.airline_name} - {data.class}
        </p>
        <button className="bg-transparent border-0" onClick={onClick}>
          {isActive !== null && isActive ? <BsChevronUp size={20} /> : <BsChevronDown size={20} />}
        </button>
      </div>
      <div className="d-flex justify-content-between">
        <div className="ms-2 col-7 d-flex justify-content-center align-items-center gap-1 px-2">
          <div className="d-flex flex-column">
            <p className="my-0 fw-bold">{moment(data.departure_time, "HH:mm:ss").format("HH:mm")}</p>
            <p className="my-0 fw-bold">{data.departure_airport_code}</p>
          </div>
          <div className="col-8 text-center">
            <p className="my-0 text-muted">{data.duration}</p>
            <hr className="my-0" />
            <p className="my-0 text-muted">Direct</p>
          </div>
          <div className="d-flex flex-column">
            <p className="my-0 fw-bold">{moment(data.arrival_time, "HH:mm:ss").format("HH:mm")}</p>
            <p className="my-0 fw-bold"> {data.arrival_airport_code}</p>
          </div>
        </div>
        <button className="col d-flex text-center bg-transparent border-0 align-items-center">
          <i className="far fs-5 fa-suitcase-rolling text-purple"></i>
        </button>
        <div className="col-3 d-flex flex-column justify-content-end">
          <p className="h5 fw-bolder text-purple ms-4">{formattedPrice}</p>
          <Button className="btn btn-purple text-white w-75 mx-auto rounded-pill btn-ticket" to="/checkout" onClick={handleSelectTicket}>
            Pilih
          </Button>
        </div>
      </div>
      {isActive !== null && isActive && <DetailCardTicket data={data} />}
    </div>
  );
};

export default ItemCardTicket;
