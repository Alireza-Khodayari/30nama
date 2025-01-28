import axios from 'axios';

const API_KEY = "020f619244ac86d3d5e2f5f3d198b105";
const BASE_URL = "https://api.themoviedb.org/3/";

const tmdbApi = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: API_KEY,
  },
});

export default tmdbApi;