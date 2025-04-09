import React from "react";
import { Link } from "react-router-dom";
import styles from "./watchLater.module.css";

function WatchLater({ watchLater, setWatchLater }) {
  // Handle remove from watch later
  const handleRemoveWatchLater = (movie) => {
    setWatchLater(watchLater.filter((watch) => watch.id !== movie.id)); // Use 'id' for unique identification
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
          {watchLater.map((movie) => (
            <li key={movie.id} className={styles["movie-item"]}> {/* Use 'id' as the key */}
              <div className={styles["movie-content"]}>
                <img
                  src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} // Use poster_path from TMDB
                  alt={movie.title}
                  className={styles["movie-poster"]}
                />
                <div className={styles["movie-details"]}>
                  <h4 className={styles["movie-title"]}>{movie.title}</h4>
                  <span
                    className={styles["watch-later-icon"]}
                    style={{ color: "orange" }}
                    onClick={() => handleRemoveWatchLater(movie)}
                  >
                    ⏰
                  </span>
                  <p className={styles["movie-meta"]}>
                    <strong>Rating:</strong> {movie.vote_average}
                  </p>
                  <p className={styles["movie-meta"]}>
                    <strong>Genre:</strong> {movie.genres ? movie.genres.map(genre => genre.name).join(', ') : 'N/A'}
                  </p>
                  <p className={styles["movie-meta"]}>
                    <strong>Released:</strong> {movie.release_date}
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
