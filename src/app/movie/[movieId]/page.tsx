
import { fetchMovieDetails } from '@/utils/api';
import { notFound, useParams } from 'next/navigation';
import React from 'react';
import styles from './style.module.scss';
import { FaStar, FaClock, FaFilm, FaGlobe, FaCalendar } from 'react-icons/fa';
import Image from 'next/image';
import Loading from '@/components/Loading';
import { MovieDetails } from '@/types';
import Error from '@/components/Error';
import Head from 'next/head';

const getMovieDetails = async (movieId: string) => {
  try {
    const data = await fetchMovieDetails(movieId);
    if (data.Response === 'False') {
      return notFound();
    }
    return data
  } catch (err) {
    // implement error handling logger
    notFound();
  }
}

const Page = async ({ params }: { params: { movieId: string } }) => {
  const movieDetails: MovieDetails = await getMovieDetails(params.movieId)

  return (
    <React.Fragment>
      {/* Utilized OpenGraph meta tags to improve social media sharing with rich previews, including dynamic page titles and descriptions tailored to each movie. These tags, along with SEO-friendly meta descriptions, help boost search engine visibility and enhance the user experience when sharing links across platforms. */}
      <Head>
        <title>{movieDetails.Title} - Movie Info</title>
        <meta name="description" content={movieDetails.Plot} />
        <meta property="og:title" content={movieDetails.Title} />
        <meta property="og:description" content={movieDetails.Plot} />
        <meta property="og:image" content={movieDetails.Poster} />
      </Head>

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
          <h3>Movie Info</h3>
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
    </React.Fragment>
  );
};

export default Page;
