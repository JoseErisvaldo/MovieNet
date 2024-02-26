import React from 'react';
import './style.css'; 
import { Link } from 'react-router-dom';
const MovieList = ({ list }) => {

  return (
    <div className="movie-list">

      {list.length > 0 ? (
        list.map((item) => (
          <Link className='link-btn' to={`/details/${item.id}`} key={item.id}>
            <div  className="movie-item"> 
                <img src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}.jpg`} alt={item.title} className="movie-image" />
                <h3>{item.title}</h3>
                <p>{item.description}</p>
            
            </div>
            </Link>
        ))
      ) : (
        <div>
          Erro nos dados !!
        </div>
      )}
    </div>
  )
}

export default MovieList;
