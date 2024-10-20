import axios from 'axios';

// To show initial movie posters, this function makes API requests in a loop for predefined movie IDs.
// This eliminates the need for any user action or reliance on static data by dynamically fetching from the API.
export const fetchMovieList = async () => {
    const movieIds = [
        'tt3896198', 'tt0848228', 'tt1375666', 'tt0468569', 'tt10872600',
        'tt0120737', 'tt4154796', 'tt0816692'
    ];

    const requests = movieIds.map(id => axios.get(`${process.env.BASE_URL}?i=${id}&apikey=${process.env.API_KEY}`));
    const responses = await Promise.all(requests);
    return responses.map(response => response.data);
};

// Fetches all detailed information about a specific movie using its ID and returns the data from the API.
export const fetchMovieDetails = async (movieId: string) => {
    try {
        const response = await axios.get(`${process.env.BASE_URL}?i=${movieId}&apikey=${process.env.API_KEY}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching movie details:', error);
        throw error;
    }
};