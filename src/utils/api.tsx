import axios from 'axios';

export const fetchMovieList = async () => {
    const movieIds = [
        'tt3896198', 'tt0848228', 'tt1375666', 'tt0468569', 'tt0076759',
        'tt0120737', 'tt4154796', 'tt0068646'
    ];

    const requests = movieIds.map(id => axios.get(`${process.env.BASE_URL}?i=${id}&apikey=${process.env.API_KEY}`));
    const responses = await Promise.all(requests);
    console.log("Response", responses);
    return responses.map(response => response.data);
};

export const fetchMovieDetails = async (movieId: string) => {
    try {
        const response = await axios.get(`${process.env.BASE_URL}?i=${movieId}&apikey=${process.env.API_KEY}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching movie details:', error);
        throw error;
    }
};