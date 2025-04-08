import { useParams, Link } from "react-router-dom";
import movieData from "../../constants/index";
import styles from "../MovieDetail/MovieDetail.module.css";

function MovieDetail() {
    const { movieName } = useParams();
    
    const movie = Object.values(movieData).flat().find((m) => m.name === movieName);

    return (
        <div className={styles.container}>
            {movie ? (
                <div className={styles.movieCard}>
                    <img src={movie.poster} alt={movie.name} className={styles.poster} />
                    <div className={styles.details}>
                        <h1 className={styles.title}>{movie.name}</h1>
                        <p><strong>Release Date:</strong> {movie.released}</p>
                        <p><strong>Rating:</strong> {movie.rating} ⭐</p>
                        <p><strong>Genre:</strong> {movie.genre}</p>
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
