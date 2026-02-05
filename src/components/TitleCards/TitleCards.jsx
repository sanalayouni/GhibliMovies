import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './TitleCards.css'

const API_KEY = import.meta.env.VITE_TMDB_API_KEY
const IMG_BASE = 'https://image.tmdb.org/t/p/w500'

const GHIBLI_MOVIES = [
  { id: 129, title: 'Spirited Away' },
  { id: 128, title: 'Princess Mononoke' },
  { id: 4935, title: "Howl's Moving Castle" },
  { id: 10515, title: 'My Neighbor Totoro' },
  { id: 8392, title: 'Castle in the Sky' },
  { id: 11621, title: "Kiki's Delivery Service" },
  { id: 16859, title: 'Ponyo' }
]

const TitleCards = () => {
  const [movies, setMovies] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    const fetchMovies = async () => {
      const results = await Promise.all(
        GHIBLI_MOVIES.map(async movie => {
          const res = await fetch(
            `https://api.themoviedb.org/3/movie/${movie.id}?api_key=${API_KEY}`
          )
          return res.json()
        })
      )

      setMovies(results)
    }

    fetchMovies()
  }, [])

  return (
    <div className="title-cards">
      <h1>Popular on Ghibli Mori</h1>

      <div className="card-list">
        {movies.map(movie => (
          <div
            className="movie-card"
            key={movie.id}
            onClick={() => navigate(`/movie/${movie.id}`)}
          >
            <img
              src={`${IMG_BASE}${movie.poster_path}`}
              alt={movie.title}
            />
            <h2>{movie.title}</h2>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TitleCards
