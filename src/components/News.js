import React from 'react';

class News extends React.Component {
  state = {
    news: [],
    isLoading: false,
  }

  render() {
    return (
      <div>
        <input 
          type="text"
          className='form-control' 
          placeholder='Buscar noticias...' />
      </div>
    );
  }
}

export default News;