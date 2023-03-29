import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const API_KEY = `abbc06680f95aa51ddd683d2c46a812f`;

const fetchDetailsMovi = async movieId => {
  const response = await axios.get(`movie/${movieId}?api_key=${API_KEY}`);
  return response.data;
};

export default fetchDetailsMovi;
