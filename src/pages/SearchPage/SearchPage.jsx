import React, { useEffect, useState } from 'react';
import './SearchPage.css';
import NavbarComponent from '../../components/Header/NavbarComponent';
import ItemDateSearch from '../../components/ItemDateSearch/ItemDateSearch';
import ItemCardFilter from '../../components/ItemCardFilter/ItemCardFilter';
import ItemCardTicket from '../../components/ItemCardTicket/ItemCardTicket';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { useLocation, useNavigate } from 'react-router-dom';
import client from '../../api/axios';
import { Form } from 'react-bootstrap';

const SearchPage = () => {
    const [isActiveDetail, setIsActiveDetail] = useState(null);
    const location = useLocation();
    const navigate = useNavigate();
    const queryParams = new URLSearchParams(location.search);
    const [flights, setFlights] = useState([]);
    const [filter, setFilter] = useState(['departure', 'asc']);

    const from = queryParams.get('from');
    const to = queryParams.get('to');
    const departure = queryParams.get('departure');
    const totalPassenger = queryParams.get('totalPassenger');
    const classId = queryParams.get('classId');

    const onClickDetail = (id) => {
        setIsActiveDetail((prevId) => (prevId === id ? null : id));
    };

    const handleFilter = (e) => {
        e.preventDefault();
        navigate(
            `/search?from=${from}&to=${to}&departure=${departure}&totalPassenger=${totalPassenger}&classId=${classId}&type=${filter[0]}&sort=${filter[1]}`
        );
    };

    useEffect(() => {
        if (!location) return;
        const getData = async () => {
            try {
                const body = {
                    from: from,
                    to: to,
                    departure: departure,
                    totalPassenger: totalPassenger,
                    classId: classId,
                };
                const { data } = await client.post(`/flights/oneway?type=${filter[0]}&sort=${filter[1]}`, body);
                if (data.status) {
                    setFlights(data.data.filter);
                }
                console.log(data.data.filter);
                console.log(flights);
            } catch (error) {
                console.log(error);
            }
        };

        getData();
    }, [location]);

    return (
        <>
            <NavbarComponent />
            <div className="shadow-sm">
                <div className="container d-flex justify-content-center">
                    <div className="col-10 mt-4">
                        <p className="fs-5 fw-bolder">Pilih Penerbangan</p>
                        <div className="d-flex justify-content-between px-3 gap-2">
                            <button
                                className="col-8 btn btn-primary text-start my-0 btn btn-lilac text-semibold border-0 py-2"
                                style={{ color: 'white' }}
                            >
                                <i className="fas fa-arrow-left me-3"></i>JKT MLB - 2 Penumpang - Economy
                            </button>
                            <button
                                className="col-4 btn btn-primary my-0 btn btn-green-pastel border-0 py-2 text-semibold"
                                style={{ color: 'white' }}
                            >
                                Ubah Pencarian
                            </button>
                        </div>
                        <div className="scroll-container mt-3">
                            <div className="d-flex justify-content-between px-3 gap-1">
                                <ItemDateSearch type={'active'} />
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
                        <button
                            className="btn btn-transparent rounded-pill ring-purple text-purple btn-transparent-ring-purple"
                            data-bs-toggle="modal"
                            data-bs-target="#sortModal"
                        >
                            <i className="fas fa-sort-alt me-2"></i>Termurah
                        </button>
                    </div>
                    <div className="d-flex justify-content-between gap-4 my-3">
                        <ItemCardFilter />
                        <div className="col 8">
                            <div className="d-flex flex-column gap-4">
                                {flights && flights.length > 0 ? (
                                    flights.map((item) => (
                                        <ItemCardTicket
                                            key={item.id}
                                            data={item}
                                            isActive={isActiveDetail === item.id}
                                            onClick={() => onClickDetail(item.id)}
                                        />
                                    ))
                                ) : (
                                    <p>data kosong</p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className="modal fade"
                id="sortModal"
                tabindex="-1"
                aria-labelledby="sortModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog border-0 modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header border-0">
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <Form onSubmit={handleFilter}>
                            <div className="modal-body px-0 py-0">
                                <div className="py-2 mx-5">
                                    <div class="customRadio">
                                        <div class="radioList">
                                            <input
                                                type="radio"
                                                name="filter"
                                                id="hargaTermurah"
                                                onChange={() => setFilter(['price', 'asc'])}
                                            />
                                            <label html htmlFor="hargaTermurah">
                                                <span className="fw-bolder">Harga</span> - Termurah
                                            </label>
                                        </div>
                                        <div class="radioList">
                                            <input
                                                type="radio"
                                                name="filter"
                                                id="durasiTerpendek"
                                                onChange={() => setFilter(['duration', 'asc'])}
                                            />
                                            <label htmlFor="durasiTerpendek">
                                                <span className="fw-bolder">Durasi</span> - Terpendek
                                            </label>
                                        </div>
                                        <div class="radioList">
                                            <input
                                                type="radio"
                                                name="filter"
                                                id="keberangkatanAwal"
                                                onChange={() => setFilter(['departure', 'asc'])}
                                            />
                                            <label htmlFor="keberangkatanAwal">
                                                <span className="fw-bolder">Keberangkatan</span> - Paling Awal
                                            </label>
                                        </div>
                                        <div class="radioList">
                                            <input
                                                type="radio"
                                                name="filter"
                                                id="keberangkatanAkhir"
                                                onChange={() => setFilter(['departure', 'desc'])}
                                            />
                                            <label htmlFor="keberangkatanAkhir">
                                                <span className="fw-bolder">Keberangkatan</span> - Paling Akhir
                                            </label>
                                        </div>
                                        <div class="radioList">
                                            <input
                                                type="radio"
                                                name="filter"
                                                id="kedatanganAwal"
                                                onChange={() => setFilter(['arrival', 'asc'])}
                                            />
                                            <label htmlFor="kedatanganAwal">
                                                <span className="fw-bolder">Kedatangan</span> - Paling Awal
                                            </label>
                                        </div>
                                        <div class="radioList">
                                            <input
                                                type="radio"
                                                name="filter"
                                                id="kedatanganAkhir"
                                                onChange={() => setFilter(['arrival', 'desc'])}
                                            />
                                            <label htmlFor="kedatanganAkhir">
                                                <span className="fw-bolder">Kedatangan</span> - Paling Akhir
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer my-0 border-0">
                                <button
                                    type="submit"
                                    className="btn btn-purple rounded-pill px-5 text-white"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                >
                                    Pilih
                                </button>
                            </div>
                        </Form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SearchPage;
