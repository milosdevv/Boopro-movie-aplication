import React, { useRef, useEffect } from "react";
import "./movieCard.scss";

const MovieCard = ({ title, isSelected, popUpVisible }) => {
  const cardRef = useRef(null);
  useEffect(() => {
    if (isSelected && cardRef.current) {
      cardRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    }
  }, [isSelected]);
  return (
    <div className="movieCard" ref={cardRef}>
      <img
        src={`https://image.tmdb.org/t/p/w500/${title.poster_path}`}
        alt={title.original_title}
        className={`${isSelected ? "selected" : ""}`}
      />

      <div
        className={`popUpContainer${
          isSelected && popUpVisible ? " visible" : ""
        }`}
      >
        <div className="popUp">
          <img
            src={`https://image.tmdb.org/t/p/w500/${title.poster_path}`}
            alt={title.original_title}
          />
          <div className=".popUp-wrapper">
            <h1>{title.title}</h1>
            <hr />
            <h3>{title.tagline}</h3>
            <h3>
              Overview <br /> {title.overview}
            </h3>
            <div>
              <h3>Raiting: {title.vote_average}/10</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
