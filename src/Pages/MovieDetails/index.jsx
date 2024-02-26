import React, {useEffect, useState} from "react";import CompMovieDetails from "../../Components/CompMovieDetails"
import CastCard from "../../Components/CastCard";
import api from "../../Services/Api";
import { useParams } from "react-router-dom";

export default function MovieDetails () {
  const {id} = useParams()
  const [movieDetails, setMovieDetails] = useState([])
  const [elenco, setElenco] = useState([])
  const [loading, setLoading] = useState(true)

   async function loadingMovieDetails () {
    const response = await api.get(`/movie/${id}`, {
      params: {
        api_key:'b8eb4ace57a9776e464725237d540b49',
        language:'pt-BR'
      }
    })
    setMovieDetails(response.data)
    setLoading(false)
  }
  async function loadingElenco () {
    const response = await api.get(`/movie/${id}/credits?`, {
      params: {
        api_key:'b8eb4ace57a9776e464725237d540b49',
        language:'pt-BR'
      }
    })
    setElenco(response.data.cast)
  }

  useEffect(() => {
    loadingMovieDetails()
    loadingElenco()
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
      <CompMovieDetails list={movieDetails}/>
      <CastCard list={elenco}/>
    </div>
  )
}