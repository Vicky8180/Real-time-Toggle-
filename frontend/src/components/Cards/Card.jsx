

import React from 'react';
import './Card.css';

const Card = ({ dish, togglePublished }) => {
  return (
    <div className="card">
      <img src={dish.imageUrl} alt={dish.dishName} className="card-image" />
      <h2 className="card-name">{dish.dishName}</h2>
      <p className="card-status">Published: {dish.isPublished ? 'Yes' : 'No'}</p>
      <button onClick={() => togglePublished(dish.dishId)} className={dish.isPublished ? 'card-button' : 'card-button_not'}>
      {
        dish.isPublished ? <>Published</>: <>Not Published</>
      }
        
      </button>
    </div>
  );
};

export default Card;
