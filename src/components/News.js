import React from 'react';
import axios from 'axios';

class News extends React.Component {
  state = {
    news: [],
    isLoading: false,
  } 

  buscarNoticias = (event) => {
    const valor = event.target.value;
    axios
      .get(`https://newsapi.org/v2/everything?q=${valor}&apiKey=5219928e2e004879bdb867aa5b80aa07`)
      .then((response) => {
        console.log(response.data);
      });
  }

  render() {
    return (
      <div>
        <input 
          onChange={this.buscarNoticias}
          type="text"
          className='form-control' 
          placeholder='Buscar noticias...' />
      </div>
    );
  }
}

export default News;