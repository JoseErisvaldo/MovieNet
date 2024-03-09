import React, { useEffect, useState } from "react";
import './style.css'
import MovieList from "../../Components/MovieList";
import api from "../../Services/Api";

export default function Home () {
  const [listTop, setListTop] = useState([])
  const [nowPlaying, setNowPlaying] = useState([])
  const [timeNow,setTimeNow] = useState([])
  const [popular, setPopular] = useState([])

  const [loading, setLoading] = useState(true)

  
  async function loadingApi () {
    const response = await api.get('/movie/top_rated?',{
      params:{
        api_key:"b8eb4ace57a9776e464725237d540b49",
        language:"pt-BR"
      }
    })
    setListTop(response.data.results)
    setLoading(false)
  }

  async function loadingAtTheMovies () {
    try {
      const response = await api.get('/movie/now_playing', {
        params: {
          api_key:'b8eb4ace57a9776e464725237d540b49',
          language:'pt-BR'
        }
      })
      setTimeNow(response.data.dates)
      setNowPlaying(response.data.results)
    } catch (error) {
      
    }
  }

  async function loadingPopular () {
    const response = await api.get('/movie/popular', {
      params: {
        api_key:'b8eb4ace57a9776e464725237d540b49',
        language:'pt-BR'
      }
    })
    setPopular(response.data.results)
  }
  
  useEffect(() => {
    loadingApi()
    loadingAtTheMovies()
    loadingPopular()
  },[])

  if(loading) {
    return(
      <div className="carregando-home">
        <h2>Carregando filmes...</h2>
      </div>
    )
  }
  return(
    <div>
      <div>
        <div>
          <h2 className="title-home">Filmes Bem Avaliados</h2>
          <MovieList list={listTop} />
        </div>
        <div>
          <div className="card-tilte-home">
            <h2 className="title-home">Filmes em Cartaz</h2>
            <h4>Período: {new Date(timeNow.minimum).toLocaleDateString()} a {new Date(timeNow.maximum).toLocaleString()}</h4>
          </div>
          <MovieList list={nowPlaying} />
        </div>
        <div>
          <h2 className="title-home">Filmes Popular</h2>
          <MovieList list={popular} />
        </div>
    </div>
     
    </div>
  )
}