import React from 'react';
import moment from 'moment';
import './ImageCard.css';

const ImageCard = ({ image, title, date, copyright }) => {
  return (
    <article className="card" tabindex={0}>
      <figure className="card__figure">
        <img className="card__image" src={image} alt={`${title} by ${copyright}`} tabIndex={0}></img>
      </figure>
      <p aria-label={moment(date).format('dddd, MMMM Do YYYY')} className="card__date" tabIndex={0}>
        {date}
      </p>
      <header className="card__header">
        <h5 className="card__title">{title}</h5>
        {copyright && <p className={`card__copyright ${copyright.length > 30 ? 'card__copyright--small' : ''}`}>{copyright}</p>}
      </header>
    </article>
  );
};

export default ImageCard;
