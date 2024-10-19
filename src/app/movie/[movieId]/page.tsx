'use client';
import { fetchMovieDetails } from '@/utils/api';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import styles from './style.module.scss';

interface MovieDetails {
  Poster: string;
  Title: string;
  Plot: string;
  imdbRating: string;
}

const Page = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState<MovieDetails | null>(null); // Initially, it's null

  useEffect(() => {
    if (movieId && typeof movieId === 'string') {  // Ensure movieId is a string
      const getMovieDetails = async () => {
        // Fetching movie details by movieId
        const data = await fetchMovieDetails(movieId);
        setMovieDetails(data);
      };
      getMovieDetails();
    }
  }, [movieId]);

  if (!movieDetails) return <p>Loading...</p>;

  return (
    <div className={styles.movieDetails}>
      <img src={movieDetails.Poster} alt={movieDetails.Title} />
      <h2>{movieDetails.Title}</h2>
      <p>{movieDetails.Plot}</p>
      <div className={styles.rating}>IMDB Rating: {movieDetails.imdbRating}</div>
    </div>
  );
};

export default Page;
