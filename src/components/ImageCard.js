import React from 'react';
import './ImageCard.css';

const ImageCard = ({ image, title, date, copyright }) => {
  return (
    <article className="card">
      <figure className="card__figure">
        <img className="card__image" src={image} alt={title}></img>
      </figure>
      <p className="card__date">{date}</p>
      <header className="card__header">
        <h5 className="card__title">{title}</h5>
        {copyright && <p className={`card__copyright ${copyright.length > 30 ? 'card__copyright--small' : ''}`}>{copyright}</p>}
      </header>
    </article>
  );
};

export default ImageCard;
