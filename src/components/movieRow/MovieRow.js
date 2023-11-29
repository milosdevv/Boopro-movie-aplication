import MovieCard from "../movieCard/MovieCard";
import "./movieRow.scss";

const MovieRow = ({ genreName, selectedTitleIndex, popUpVisible, titles }) => {
  return (
    <div className="movieContainer">
      <h1>{genreName}</h1>
      <div className="movieRow">
        {titles &&
          titles.map((title, index) => (
            <MovieCard
              key={index}
              title={title}
              isSelected={index === selectedTitleIndex}
              popUpVisible={popUpVisible}
            />
          ))}
      </div>
    </div>
  );
};

export default MovieRow;
