import axios from 'axios';

export default axios.create({
    baseURL: 'https://www.googleapis.com/books/v1/volumes?q=',
    headers: {
        key:'AIzaSyBD5hyWWlHF9DrF7CMlPqEiD1pYmpIuoPg'
    }
});