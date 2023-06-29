import React, { useEffect, useState } from "react";
import "./SearchPage.css";
import NavbarComponent from "../../components/Header/NavbarComponent";
import ItemDateSearch from "../../components/ItemDateSearch/ItemDateSearch";
import ItemCardFilter from "../../components/ItemCardFilter/ItemCardFilter";
import ItemCardTicket from "../../components/ItemCardTicket/ItemCardTicket";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { useLocation } from "react-router-dom";
import axios from "axios";

const SearchPage = ({ searchData }) => {
  const [isActiveDetail, setIsActiveDetail] = useState(null);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const [flights, setFlights] = useState(null);

  const onClickDetail = (id) => {
    setIsActiveDetail((prevId) => (prevId === id ? null : id));
  };

  useEffect(() => {
    if (!location) return;
    const getData = async () => {
      try {
        const body = {
          from: queryParams.get("from"),
          to: queryParams.get("to"),
          departure: queryParams.get("departure"),
          totalPassenger: queryParams.get("totalPassenger"),
          classId: queryParams.get("classId"),
        };
        const { data } = await axios.post("https://skypass-dev.up.railway.app/flights/oneway", body);
        if (data.status) {
          setFlights(data.data.filter);
        }
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, [location]);

  console.log(flights);

  return (
    <>
      <NavbarComponent />
      <div className="shadow-sm">
        <div className="container d-flex justify-content-center">
          <div className="col-10 mt-4">
            <p className="fs-5 fw-bolder">Pilih Penerbangan</p>
            <div className="d-flex justify-content-between px-3 gap-2">
              <button className="col-8 btn btn-primary text-start my-0 btn btn-lilac text-semibold border-0 py-2" style={{ color: "white" }}>
                <i className="fas fa-arrow-left me-3"></i>JKT MLB - 2 Penumpang - Economy
              </button>
              <button className="col-4 btn btn-primary my-0 btn btn-green-pastel border-0 py-2 text-semibold" style={{ color: "white" }}>
                Ubah Pencarian
              </button>
            </div>
            <div className="scroll-container mt-3">
              <div className="d-flex justify-content-between px-3 gap-1">
                <ItemDateSearch type={"active"} />
                <ItemDateSearch />
                <ItemDateSearch />
                <ItemDateSearch />
                <ItemDateSearch />
                <ItemDateSearch />
                <ItemDateSearch />
                <ItemDateSearch />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container d-flex justify-content-center">
        <div className="col-10 py-4">
          <div className="d-flex justify-content-end">
            <button className="btn btn-transparent rounded-pill ring-purple text-purple btn-transparent-ring-purple" data-bs-toggle="modal" data-bs-target="#sortModal">
              <i className="fas fa-sort-alt me-2"></i>Termurah
            </button>
          </div>
          <div className="d-flex justify-content-between gap-4 my-3">
            <ItemCardFilter />
            <div className="col 8">
              <div className="d-flex flex-column gap-4">
                {flights && flights.length > 0 ? flights.map((item) => <ItemCardTicket key={item.id} data={item} isActive={isActiveDetail === item.id} onClick={() => onClickDetail(item.id)} />) : <p>data kosong</p>}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="modal fade" id="sortModal" tabindex="-1" aria-labelledby="sortModalLabel" aria-hidden="true">
        <div className="modal-dialog border-0 modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header border-0">
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <form action="#">
              <div className="modal-body px-0 py-0">
                <button className="btn-sort w-100 border-0">
                  <div className="py-2 mx-5 d-flex align-items-center justify-content-start gap-2 border-bottom">
                    <p className="my-0 fw-bolder">Harga</p>
                    <p className="my-0">-</p>
                    <p className="my-0">Termurah</p>
                    <hr />
                  </div>
                </button>
                <button className="btn-sort w-100 border-0">
                  <div className="py-2 mx-5 d-flex align-items-center justify-content-start gap-2 border-bottom">
                    <p className="my-0 fw-bolder">Durasi</p>
                    <p className="my-0">-</p>
                    <p className="my-0">Terpendek</p>
                    <hr />
                  </div>
                </button>
                <button className="btn-sort w-100 border-0">
                  <div className="py-2 mx-5 d-flex align-items-center justify-content-start gap-2 border-bottom">
                    <p className="my-0 fw-bolder">Keberangkatan</p>
                    <p className="my-0">-</p>
                    <p className="my-0">Paling Awal</p>
                    <hr />
                  </div>
                </button>
                <button className="btn-sort w-100 border-0">
                  <div className="py-2 mx-5 d-flex align-items-center justify-content-start gap-2 border-bottom">
                    <p className="my-0 fw-bolder">Keberangkatan</p>
                    <p className="my-0">-</p>
                    <p className="my-0">Paling Akhir</p>
                    <hr />
                  </div>
                </button>
                <button className="btn-sort w-100 border-0">
                  <div className="py-2 mx-5 d-flex align-items-center justify-content-start gap-2 border-bottom">
                    <p className="my-0 fw-bolder">Kedatangan</p>
                    <p className="my-0">-</p>
                    <p className="my-0">Paling Awal</p>
                    <hr />
                  </div>
                </button>
                <button className="btn-sort w-100 border-0">
                  <div className="py-2 mx-5 d-flex align-items-center justify-content-start gap-2 border-bottom">
                    <p className="my-0 fw-bolder">Kedatangan</p>
                    <p className="my-0">-</p>
                    <p className="my-0">Paling Akhir</p>
                    <hr />
                  </div>
                </button>
              </div>
              <div className="modal-footer my-0 border-0">
                <button type="submit" className="btn btn-purple rounded-pill px-5 text-white">
                  Pilih
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchPage;
