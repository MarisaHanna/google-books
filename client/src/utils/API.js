
import axios from 'axios';

export default {
  
  searchBook: (query) => {
    return axios.get('https://www.googleapis.com/books/v1/volumes?q='+ query);
  },

  getBooks: () => {
    return axios.get('/api/books');
  },
  getBook: (id) => {
    return axios.put('/api/books/' + id);
  },

  saveBook: (bookData) => {
    return axios.post('/api/books', bookData);
  },

  deleteBook: (id) => {
    return axios.delete('/api/books/' + id);
  },

};