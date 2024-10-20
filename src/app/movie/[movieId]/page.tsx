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
  Actors: string;
  Awards: string;
  BoxOffice: string;
  Country: string;
  Director: string;
  Genre: string;
  Language: string;
  Released: string;
  Runtime: string;
  Year: string;
  Rated: string;
}


const Page = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState<MovieDetails | null>(null);

  useEffect(() => {
    if (movieId && typeof movieId === 'string') {
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
      <p><strong>Plot:</strong> {movieDetails.Plot}</p>
      <div className={styles.rating}>IMDB Rating: {movieDetails.imdbRating}</div>
      <p><strong>Actors:</strong> {movieDetails.Actors}</p>
      <p><strong>Director:</strong> {movieDetails.Director}</p>
      <p><strong>Genre:</strong> {movieDetails.Genre}</p>
      <p><strong>Language:</strong> {movieDetails.Language}</p>
      <p><strong>Country:</strong> {movieDetails.Country}</p>
      <p><strong>Released:</strong> {movieDetails.Released}</p>
      <p><strong>Runtime:</strong> {movieDetails.Runtime}</p>
      <p><strong>Awards:</strong> {movieDetails.Awards}</p>
      <p><strong>Box Office:</strong> {movieDetails.BoxOffice}</p>
      <p><strong>Rated:</strong> {movieDetails.Rated}</p>
      <p><strong>Year:</strong> {movieDetails.Year}</p>
    </div>
  );
};

export default Page;
