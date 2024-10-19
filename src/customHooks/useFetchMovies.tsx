import { useState, useEffect } from 'react';
import { fetchMovieList } from '@/utils/api';

export const useFetchMovies = () => {
    const [movies, setMovies] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string>('');

    useEffect(() => {
        const getMoviesList = async () => {
            try {
                setLoading(true);
                const data = await fetchMovieList();
                setMovies(data);
            } catch (err) {
                if (err instanceof Error) {
                    setError(err.message);
                } else {
                    setError('An unknown error occurred');
                }
            } finally {
                setLoading(false);
            }
        };

        getMoviesList();
    }, []);

    return { movies, loading, error };
};
