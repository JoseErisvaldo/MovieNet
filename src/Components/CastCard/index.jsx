// CastCard.js

import React from 'react';
import './style.css';

function CastCard({list}) {
  return (
    <>
      <h2 className='title-cast'>Elenco</h2>
      <div className='container-cast'>
        {list.map((list) => (
          <div className="cast-card" key={list.id}>
            <img
              src={`https://image.tmdb.org/t/p/original/${list.profile_path}`}
              alt={list.name}
              className="cast-profile-image"
            />
            <div className="cast-details">
              <h3>Name: {list.name}</h3>
              <p>Personagem: {list.character}</p>
              <p>Pupularidade: {list.popularity}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default CastCard;
