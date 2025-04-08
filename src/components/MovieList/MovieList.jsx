import React, { useState } from "react";
import { Link } from "react-router-dom";
import movieData from "../../constants/index";
import styles from "../MovieList/MovieList.module.css";

function MovieList({ favorites, setFavorites, watchLater, setWatchLater }) {

  // Handle add/remove from favorites
  const handleFavorite = (movie) => {
    if (favorites.includes(movie)) {
      setFavorites(favorites.filter((fav) => fav !== movie)); // Remove from favorites
    } else {
      setFavorites([...favorites, movie]); // Add to favorites
    }
  };

  // Handle add/remove from watch later
  const handleWatchLater = (movie) => {
    if (watchLater.includes(movie)) {
      setWatchLater(watchLater.filter((watch) => watch !== movie)); // Remove from watch later
    } else {
      setWatchLater([...watchLater, movie]); // Add to watch later
    }
  };

  return (
    <div className={styles["movie-list-container"]}>
      <h2>All Movies</h2>
      {Object.keys(movieData).map((year) => (
        <div key={year}>
          <h3 className={styles["year-section"]}>
            <span className={styles["hyphen"]}>------------------------------</span>
            {year}
            <span className={styles["hyphen"]}>------------------------------</span>
          </h3>

          <ul className={styles["movie-list"]}>
            {movieData[year].map((movie, index) => (
              <li key={index} className={styles["movie-item"]}>
                <div className={styles["movie-content"]}>
                  {/* Movie Poster */}
                  <img
                    src={movie.poster}
                    alt={movie.name}
                    className={styles["movie-poster"]}
                  />
                  {/* Movie Details */}
                  <div className={styles["movie-details"]}>
                    <h4 className={styles["movie-title"]}>{movie.name}</h4>
                    <p className={styles["movie-meta"]}>
                      <strong>Rating:</strong> {movie.rating}
                    </p>
                    <p className={styles["movie-meta"]}>
                      <strong>Genre:</strong> {movie.genre}
                    </p>
                    <p className={styles["movie-meta"]}>
                      <strong>Released:</strong> {movie.released}
                    </p>
                    <p className={styles["view-details"]}>
                      <Link to={`/movie/${movie.name}`}>View Details</Link>
                    </p>

                    {/* Heart Icon - Favorite */}
                    <span
                      className={styles["heart-icon"]}
                      style={{ color: favorites.includes(movie) ? "red" : "black" }}
                      onClick={() => handleFavorite(movie)}
                    >
                      {favorites.includes(movie) ? "❤️" : "🤍"}
                    </span>

                    {/* Watch Later Icon */}
                    <span
                      className={styles["watch-later-icon"]}
                      style={{ color: watchLater.includes(movie) ? "orange" : "black" }}
                      onClick={() => handleWatchLater(movie)}
                    >
                      {watchLater.includes(movie) ? "⏰" : "🕑"} {/* Using clock icons as example */}
                    </span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default MovieList;
