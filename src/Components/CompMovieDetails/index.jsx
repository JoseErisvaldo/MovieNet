import BtnReturn from '../Btns/Return';
import './style.css';

function MovieCard({ list, dateNow }) {
  
  return (
    <>
      <BtnReturn/>
      
      <div className="movie-card" key={list.id}>
        <img
          src={`https://image.tmdb.org/t/p/original/${list.backdrop_path}`}
          alt={list.titleAlt}
          className="movie-poster"
        />
        <div className="movie-details">
          <div className="header-details">
            <div >
              <h2>{list.title}</h2>
              <div className="additional-info">
                <span className="popularity">Popularity: {list.popularity}</span>
                <span className="adult">Adulto: {list.adult === false ? 'Não' : 'Sim'}</span>
                <span className="language">Language: {list.original_language.toUpperCase()}</span>
                <span className="vote_average">Média de votos: {list.vote_average}</span>
                <span className="vote_count">Total de votos: {list.vote_count}</span>
              </div>
            </div>
            <div className='card-details'>
              <div className='card-genres'>
                <h4>Generos:</h4>
                <ul>
                  {list.genres.map((item) => (
                    <li key={item.name}>
                      {item.name}
                    </li>
                  ))}
                </ul>
              </div>
              <div className='card-production-companies'>
                <h4>Empresa de produção</h4>
                {list.production_companies.map((item) => (
                  <div className='production' key={item.id}>
                    <img src={`https://image.tmdb.org/t/p/original/${item.logo_path}`}  alt={item.id}/>
                    <div>{item.name}</div>
                    <div>{item.origin_country}</div>
                </div>
                ))}
              </div>
              <div className='card-production'>
                <h4>País de produção</h4>
                {list.production_countries.map((item) => (
                  <div className='production' key={item.name}>
                    <div>{item.iso_3166_1}</div>
                    <div>{item.name}</div>
                </div>
                ))}
              </div>
              <div className='card-production'>
                <h4>Data de lançamento</h4>
                {list.release_date}
              </div>
              <div className='card-languages'>
                <h4>Idioma</h4>
                {list.spoken_languages.map((item) => (
                  <div>
                    <div>{item.name}</div>
                  </div>
                ))}
              </div>
              <div>
                <h4>Status</h4>
                {list.status === 'Released' ? 'Lançado' : ''}
              </div>
            </div>
          </div>
          <div>
            <h3>Descrição</h3>
            <p className="overview">{list.overview}</p>
          </div>
          <div className='trailer'> <a target='__blanck' href={`https://www.youtube.com/results?search_query=${list.title}`}>Trailer</a></div>
        </div>
      </div>
    </>
  );
}

export default MovieCard;
