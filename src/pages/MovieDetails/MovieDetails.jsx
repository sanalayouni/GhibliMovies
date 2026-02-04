import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './MovieDetails.css'

const MovieDetails = () => {
  const { id } = useParams()
  const [movie, setMovie] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(`https://ghibliapi.vercel.app/films/${id}`)
      .then(res => res.json())
      .then(data => {
        setMovie(data)
        setLoading(false)
      })
  }, [id])

  if (loading) return <p>Loading...</p>

  return (
    <div className="movie-details">
      <div
        className="movie-banner"
        style={{ backgroundImage: `url(${movie.movie_banner})` }}
      />

      <div className="movie-content">
        <h1>{movie.title}</h1>

        <div className="movie-meta">
          <span>🎬 {movie.director}</span>
          <span>📅 {movie.release_date}</span>
          <span>⭐ {movie.rt_score}</span>
        </div>

        <p className="movie-description">
          {movie.description}
        </p>
      </div>
    </div>
  )
}

export default MovieDetails
