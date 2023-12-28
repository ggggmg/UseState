import React from "react";
import { Link } from "react-router-dom";

const Kino = ({ el }) => {
  return (
    <>
      <div className="col-4">
        <Link to={`/kinopoisk/details/${el.filmId}`}>
          <div className="box">
            <img src={el.posterUrl} alt="" />
            <h3>{el ? el.nameRu : el.nameEn}</h3>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Kino;
