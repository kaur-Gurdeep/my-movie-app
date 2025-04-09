import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "../MovieList/MovieList.module.css";

function MovieList({ favorites, setFavorites, watchLater, setWatchLater }) {
  const [movies, setMovies] = useState([]);
  const apiKey = import.meta.env.VITE_TMDB_API_KEY;

  // Fetch movies from TMDB
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`
        );
        const data = await response.json();
        setMovies(data.results);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies();
  }, []);

  // Handle add/remove from favorites
  const handleFavorite = (movie) => {
    const isAlreadyFavorite = favorites.some((fav) => fav.id === movie.id);
    if (isAlreadyFavorite) {
      setFavorites(favorites.filter((fav) => fav.id !== movie.id));
    } else {
      setFavorites([...favorites, movie]);
    }
  };

  // Handle add/remove from watch later
  const handleWatchLater = (movie) => {
    const isAlreadyWatchLater = watchLater.some((watch) => watch.id === movie.id);
    if (isAlreadyWatchLater) {
      setWatchLater(watchLater.filter((watch) => watch.id !== movie.id));
    } else {
      setWatchLater([...watchLater, movie]);
    }
  };

  return (
    <div className={styles["movie-list-container"]}>
      <h2>All Movies</h2>
      <ul className={styles["movie-list"]}>
        {movies.map((movie, index) => {
          const isFavorite = favorites.some((fav) => fav.id === movie.id);
          const isWatchLater = watchLater.some((watch) => watch.id === movie.id);

          return (
            <li key={index} className={styles["movie-item"]}>
              <div className={styles["movie-content"]}>
                {/* Movie Poster */}
                <img
                  src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                  alt={movie.title}
                  className={styles["movie-poster"]}
                />
                {/* Movie Details */}
                <div className={styles["movie-details"]}>
                  <h4 className={styles["movie-title"]}>{movie.title}</h4>
                  <p className={styles["movie-meta"]}>
                    <strong>Rating:</strong> {movie.vote_average}
                  </p>
                  <p className={styles["movie-meta"]}>
                    <strong>Released:</strong> {movie.release_date}
                  </p>
                  <p className={styles["view-details"]}>
                    <Link to={`/movie/${movie.id}`}>View Details</Link>
                  </p>

                  {/* Heart Icon - Favorite */}
                  <span
                    className={styles["heart-icon"]}
                    style={{ color: isFavorite ? "red" : "black", cursor: "pointer" }}
                    onClick={() => handleFavorite(movie)}
                  >
                    {isFavorite ? "❤️" : "🤍"}
                  </span>

                  {/* Watch Later Icon */}
                  <span
                    className={styles["watch-later-icon"]}
                    style={{ color: isWatchLater ? "orange" : "black", cursor: "pointer" }}
                    onClick={() => handleWatchLater(movie)}
                  >
                    {isWatchLater ? "⏰" : "🕑"}
                  </span>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default MovieList;
