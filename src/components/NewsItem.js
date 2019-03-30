import React from 'react';

const NewsItem = (props) => {
  return (
    <div className="card" style={{ margin: 10 }}>
      <img src={props.image} class="card-img-top" alt="..." />
      <div className="card-body">
        <h2>{props.title}</h2>
        <p className="card-text">{props.content}</p>
      </div>
    </div>
  );
};

export default NewsItem;