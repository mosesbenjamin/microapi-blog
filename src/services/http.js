import axios from 'axios';

const baseURL = 'https://cors-anywhere.herokuapp.com/https://morning-falls-61811.herokuapp.com/api';

let http = axios.create({
    baseURL: baseURL
});


export default http;