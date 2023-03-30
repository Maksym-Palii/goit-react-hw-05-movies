import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const API_KEY = `abbc06680f95aa51ddd683d2c46a812f`;

const fetchSearchsMovi = async searchQuery => {
  const response = await axios.get(
    `/search/movie?api_key=${API_KEY}&query=${searchQuery}&language=en-US&include_adult=false`
  );
  return response.data;
};

export default fetchSearchsMovi;
