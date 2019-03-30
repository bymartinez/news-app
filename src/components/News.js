import React from 'react';
import axios from 'axios';
import NewsItem from './NewsItem';

class News extends React.Component {
  state = {
    news: [],
    isLoading: false,
    texto: null,
  }

  componentDidMount() {
    this.setState({
      texto: 'science',
    });
    this.buscarNoticias();
  }

  buscarNoticias = () => {
    const valor = this.state.texto;
    axios
      .get(`https://newsapi.org/v2/everything?q=${valor}&apiKey=5219928e2e004879bdb867aa5b80aa07`)
      .then((response) => {
        this.setState({
          news: response.data.articles,
        });
      }); 
  }

  cambiarValor = (event) => {
    const valor = event.target.value;
    this.setState({
      texto: valor,
    });
  }

  render() {
    return (
      <div>
        <input 
          onChange={this.cambiarValor}
          type="text"
          className='form-control' 
          placeholder='Buscar noticias...' />
        <button onClick={this.buscarNoticias} className='btn btn-success'>Buscar</button>

        
        {this.state.news.map((noticia) => <NewsItem image={noticia.urlToImage} title={noticia.title} content={noticia.content} />)}
      </div>
    );
  }
}

export default News;