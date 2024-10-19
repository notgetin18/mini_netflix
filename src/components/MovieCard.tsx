import React from 'react';
import styles from '../styles/MovieCard.module.scss'

const MovieCard = ({ movie, onClick }: any) => {
    // console.log("movie",movie)
    return (
        <div className={styles.movieCard} onClick={onClick}>
            <img src={movie.Poster} alt={movie.Title} className={styles.poster} />
            <h3>{movie.Title}</h3>
            <p>{movie.Year}</p>
            <p>{movie.Genre}</p>
            <p>IMDB Rating: {movie.imdbRating}</p>
        </div>
    );
};

export default MovieCard;
