import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burgerbuilder-f8583.firebaseio.com/'
});

export default instance;