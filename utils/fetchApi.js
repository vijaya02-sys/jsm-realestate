import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
    headers: {
      'x-rapidapi-host': 'bayut.p.rapidapi.com',
      'x-rapidapi-key': '4ff0c15734mshbc4a64b39b1cf9bp1cc7e9jsnf710cd0ad682'
    }
  });
    
  return data;
}