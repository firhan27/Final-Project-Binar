import React from "react";
// import "./ItemDateSearch.css";

const ItemDateSearch = ({ type }) => {
  if (type === "active") {
    return (
      <div className="col-2 text-center my-2 rounded-4 btnn btn-purple btn-date">
        <p className="mb-0 fw-bolder text-white">Kamis</p>
        <p className="my-0 text-white">02/2/2021</p>
      </div>
    );
  }
  return (
    <>
      <div className="col-2 text-center my-2 rounded-4 btnn btn-date">
        <p className="mb-0 fw-bolder">Selasa</p>
        <p className="my-0 text-muted">30/1/2021</p>
      </div>
      <hr className="my-auto mx-1 horizontal-line" />
    </>
  );
};

export default ItemDateSearch;
