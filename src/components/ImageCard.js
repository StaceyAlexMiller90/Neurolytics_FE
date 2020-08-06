import React from 'react';

const ImageCard = ({ image, title, date, copyright }) => {
  return (
    <article className="card">
      <img className="card__image" src={image} alt={title}></img>
      <p className="card__date">{date}</p>
      <header className="card__header">
        <h5 className="card__title">{title}</h5>
        {copyright && <p className="card__copyright">{copyright}</p>}
      </header>
    </article>
  );
};

export default ImageCard;
