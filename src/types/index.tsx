export interface MovieDetails {
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

interface Movie {
    imdbID: string;
    Title: string;
    Poster: string;
    Year: string;
    Genre: string;
    imdbRating: string;
}

export interface MovieCardProps {
    movie: Movie;
    onClick: (movieId: string) => void;
}