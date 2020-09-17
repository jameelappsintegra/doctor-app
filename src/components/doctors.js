import React from "react";
import "./doctors.css";
import docimg from "../img/doc-1.jpg";

const Doctors = (data) => {
  console.log(data);
  return (
    <div className="card__main">
      {data.data.map((item) => {
        return (
          <div className="card__layer" key={item.id}>
            <div className="card__left">
              <img src={docimg} alt="doc" className="card__img" />
              <h1 className="card__title">{item.name}</h1>
            </div>
            <div className="card__right">
              <h2>{item.specialist}</h2>
              <p>{item.address}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default Doctors;
