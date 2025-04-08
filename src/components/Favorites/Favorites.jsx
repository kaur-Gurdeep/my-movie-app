import React from "react";
import { Link } from "react-router-dom";
import styles from "./favorites.module.css";

function Favorites({ favorites, setFavorites }) {
  // Handle remove from favorites (only removes the movie)
  const handleRemoveFavorite = (movie) => {
    setFavorites(favorites.filter((fav) => fav !== movie));
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
          {favorites.map((movie, index) => (
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
                  className={styles["heart-icon"]}
                  style={{ color: "red" }}
                  onClick={() => handleRemoveFavorite(movie)}
                >
                  ❤️
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

export default Favorites;
