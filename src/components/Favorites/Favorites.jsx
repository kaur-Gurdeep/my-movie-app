import React from "react";
import { Link } from "react-router-dom";
import styles from "./favorites.module.css";

function Favorites({ favorites, setFavorites }) {
  // Handle remove from favorites (only removes the movie)
  const handleRemoveFavorite = (movie) => {
    setFavorites(favorites.filter((fav) => fav.id !== movie.id));  // Use 'id' for unique identification
  };

  return (
    <div className={styles["favorites-container"]}>
      <h2>Favorites</h2>
      {favorites.length === 0 ? (
        <div className={styles["no-favorites-container"]}>
          <p>No favorites added yet.</p>
          <Link to="/" className={styles["browse-movies-link"]}>
            Browse movies to select your favorites
          </Link>
        </div>
      ) : (
        <ul className={styles["movie-list"]}>
          {favorites.map((movie) => (
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
                    className={styles["heart-icon"]}
                    style={{ color: "red" }}
                    onClick={() => handleRemoveFavorite(movie)}
                  >
                    ❤️
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

export default Favorites;
