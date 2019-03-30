import React from 'react';

class News extends React.Component {
  state = {
    news: [],
    isLoading: false,
  }

  buscarNoticias = (event) => {
    const valor = event.target.value;
    console.log(valor);
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