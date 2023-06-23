import React from "react";
import PropTypes from "prop-types";

const ItemCardFilter = () => {
  return (
    <div className="col-3">
      <div className="card rounded-4 border-0 shadow py-3">
        <div className="card-body">
          <h5 className="card-title ms-3">Filter</h5>
          <div className="d-flex flex-column my-3 px-3 gap-2">
            <div className="row align-items-center gap-2">
              <div className="col-1">
                <i className="fal fa-cube me-2"></i>
              </div>
              <a href="#" className="text-decoration-none text-dark col-7 my-1">
                Transit
              </a>
              <i className="col-1 fas fa-chevron-right"></i>
            </div>
            <hr className="my-0" />
            <div className="row align-items-center gap-2">
              <div className="col-1">
                <i className="fal fa-heart me-2"></i>
              </div>
              <a href="#" className="text-decoration-none text-dark col-7 my-1">
                Fasilitas
              </a>
              <i className="col-1 fas fa-chevron-right"></i>
            </div>
            <hr className="my-0" />
            <div className="row align-items-center gap-2">
              <div className="col-1">
                <i className="fal fa-dollar-sign ms-1 me-3"></i>
              </div>
              <a href="#" className="text-decoration-none text-dark col-7 my-1">
                Harga
              </a>
              <i className="col-1 fas fa-chevron-right"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCardFilter;
