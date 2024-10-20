'use client';
import { fetchMovieDetails } from '@/utils/api';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import styles from './style.module.scss';
import { FaStar, FaClock, FaFilm, FaGlobe, FaCalendar } from 'react-icons/fa';
import Image from 'next/image';
import Loading from '@/components/Loading';
import { MovieDetails } from '@/types';

const Page = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState<MovieDetails | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (movieId && typeof movieId === 'string') {
      setLoading(true);
      const getMovieDetails = async () => {
        const data = await fetchMovieDetails(movieId);
        setMovieDetails(data);
        setLoading(false);
      };
      getMovieDetails();
    }
  }, [movieId]);

  if (loading) return <Loading />;
  if (!movieDetails) return <p style={{ color: 'red', textAlign: 'center', }}>No movie details found.</p>;

  return (
    <div className={styles.movieDetailsPage}>
      <div className={styles.movieHeader} style={{ backgroundImage: `url(${movieDetails.Poster})` }}>
        <div className={styles.overlay}>
          <div className={styles.posterWrapper}>
            <Image width={1680} height={450} src={movieDetails.Poster} alt={movieDetails.Title} className={styles.poster} />
          </div>
          <div className={styles.movieInfo}>
            <h2>{movieDetails.Title}</h2>
            <p>{movieDetails.Plot}</p>
            <div className={styles.movieStats}>
              <div>
                <FaStar className={styles.icon} /> {movieDetails.imdbRating} / 10
              </div>
              <div>
                <FaClock className={styles.icon} /> {movieDetails.Runtime}
              </div>
              <div>
                <FaFilm className={styles.icon} /> {movieDetails.Genre}
              </div>
              <div>
                <FaGlobe className={styles.icon} /> {movieDetails.Language}
              </div>
              <div>
                <FaCalendar className={styles.icon} /> {movieDetails.Released}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* movie Info */}
      <div className={styles.movieDetails}>
        <h3>Movie Info.</h3>
        <div className={styles.detailsWrapper}>
          <div>
            <p><strong>Actors:</strong> {movieDetails.Actors}</p>
            <p><strong>Awards:</strong> {movieDetails.Awards}</p>
            <p><strong>Box Office:</strong> {movieDetails.BoxOffice}</p>
            <p><strong>Year:</strong> {movieDetails.Year}</p>
          </div>
          <div>
            <p><strong>Director:</strong> {movieDetails.Director}</p>
            <p><strong>Country:</strong> {movieDetails.Country}</p>
            <p><strong>Rated:</strong> {movieDetails.Rated}</p>
          </div>
        </div>
      </div>

      {/* action buttons */}
      <div className={styles.actions}>
        <button className={styles.trailerButton}>Watch Trailer</button>
        <button className={styles.watchlistButton}>Add to Watchlist</button>
      </div>
    </div>
  );
};

export default Page;
