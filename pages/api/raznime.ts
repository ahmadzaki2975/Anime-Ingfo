import axios from "axios";

const baseUrl:string = "https://raznime.herokuapp.com/";

const raznimeApi = axios.create({
  baseURL : 'https://raznime.herokuapp.com/'
});

export default raznimeApi;