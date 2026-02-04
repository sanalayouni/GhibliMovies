import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './TitleCards.css'

const TitleCards = () => {
  const [movies, setMovies] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    fetch('https://ghibliapi.vercel.app/films')
      .then(res => res.json())
      .then(data => setMovies(data))
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
            <img src={movie.image} alt={movie.title} />
            <h2>{movie.title}</h2>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TitleCards
