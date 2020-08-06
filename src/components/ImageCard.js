import React from 'react';

const ImageCard = (props) => {
  return (
    <div className="card">
      <div className="card__date">{props.date}</div>
      <div className="card__title">{props.title}</div>
      <img className="card__image" src={props.image} alt={props.title}></img>
    </div>
  );
};

export default ImageCard;
