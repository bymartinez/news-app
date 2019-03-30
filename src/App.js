import React, { Component } from 'react';
import Header from './components/Header';
import News from './components/News';

const App = () => {
  return (
    <div className='container'>
      <Header />
      <News />
    </div>
  );
}

export default App;
