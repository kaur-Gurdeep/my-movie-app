import React from "react";
import { Link } from "react-router-dom";
import styles from "./watchLater.module.css";

function WatchLater({ watchLater, setWatchLater }) {
  // Handle remove from watch later
  const handleRemoveWatchLater = (movie) => {
    setWatchLater(watchLater.filter((watch) => watch !== movie));
  };

  return (
    <div className={styles["watchlater-container"]}>
      <h2>Watch Later</h2>
      {watchLater.length === 0 ? (
        <div className={styles["no-watchlater-container"]}>
          <p>No movies added to Watch Later yet.</p>
          <Link to="/" className={styles["browse-movies-link"]}>
            Browse movies to add to Watch Later
          </Link>
        </div>
      ) : (
        <ul className={styles["movie-list"]}>
          {watchLater.map((movie, index) => (
            <li key={index} className={styles["movie-item"]}>
              <div className={styles["movie-content"]}>
                <img
                  src={movie.poster}
                  alt={movie.name}
                  className={styles["movie-poster"]}
                />
                <div className={styles["movie-details"]}>
                  <h4 className={styles["movie-title"]}>{movie.name}</h4>
                  <span
                    className={styles["watch-later-icon"]}
                    style={{ color: "orange" }}
                    onClick={() => handleRemoveWatchLater(movie)}
                  >
                    ⏰
                  </span>
                  <p className={styles["movie-meta"]}>
                    <strong>Rating:</strong> {movie.rating}
                  </p>
                  <p className={styles["movie-meta"]}>
                    <strong>Genre:</strong> {movie.genre}
                  </p>
                  <p className={styles["movie-meta"]}>
                    <strong>Released:</strong> {movie.released}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default WatchLater;
