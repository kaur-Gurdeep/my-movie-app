import { useParams, Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import styles from "../MovieDetail/MovieDetail.module.css";

function MovieDetail() {
    const { movieName } = useParams(); // Movie name from URL parameter
    const [movie, setMovie] = useState(null);
    const apiKey = import.meta.env.VITE_TMDB_API_KEY; // Your API key

    useEffect(() => {
        const fetchMovieDetail = async () => {
            try {
                // Fetch movie details based on movie name
                const response = await fetch(
                    `https://api.themoviedb.org/3/movie/${movieName}?api_key=${apiKey}&language=en-US`
                );
                const data = await response.json();
                setMovie(data); // Store movie data in state
            } catch (error) {
                console.error("Error fetching movie details:", error);
            }
        };

        if (movieName) {
            fetchMovieDetail();
        }
    }, [movieName]);

    return (
        <div className={styles.container}>
            {movie ? (
                <div className={styles.movieCard}>
                    <img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt={movie.title} className={styles.poster} />
                    <div className={styles.details}>
                        <h1 className={styles.title}>{movie.title}</h1>
                        <p><strong>Release Date:</strong> {movie.release_date}</p>
                        <p><strong>Rating:</strong> {movie.vote_average} ⭐</p>
                        <p><strong>Genre:</strong> {movie.genres ? movie.genres.map(genre => genre.name).join(', ') : 'N/A'}</p>
                        <p className={styles.overview}><strong>Overview:</strong> {movie.overview}</p>
                    </div>
                </div>
            ) : (
                <p className={styles.notFound}>Movie not found.</p>
            )}
            <Link to="/" className={styles.backButton}>&lt; Back to List</Link>
        </div>
    );
}

export default MovieDetail;
