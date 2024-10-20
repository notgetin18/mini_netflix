import React from 'react';
import { useFetchMovies } from '@/customHooks/useFetchMovies';
import MovieCard from './MovieCard';
import styles from "../styles/MovieList.module.scss"
import { useRouter } from 'next/navigation';
import Loading from './Loading';

const MovieList = () => {
    const { movies, loading, error } = useFetchMovies();
    const router = useRouter();

    if (loading) return <Loading />;
    if (error) return <p style={{ color: 'red', textAlign: 'center', }}>{error}</p>;

    const handleCardClick = (movieId: string) => {
        router.push(`/movie/${movieId}`);
    };

    return (
        <div className={styles.movieListPage}>
            <h2 className={styles.heading}>Top Watched Movies</h2>
            <div className={styles.movieList}>
                {movies.map(movie => (
                    <MovieCard
                        key={movie?.imdbID}
                        movie={movie}
                        onClick={() => {
                            handleCardClick(movie.imdbID)
                        }} />
                ))}
            </div>
        </div>
    );
};

export default MovieList;
