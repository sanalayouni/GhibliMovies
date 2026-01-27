import React from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import hero from '../../assets/back.jpg'
import poster from '../../assets/Spirited Away Movie Poster.jpg'

const Home = () => {
  return (
    <div className="home">
      <Navbar />

      <div className="hero-section">
        <img src={hero} alt="Hero" className="hero-image" />

        <div className="hero-content">
          <h1 className="hero-title">Spirited Away</h1>

          {/* Poster + Description row */}
          <div className="hero-row">
            <img src={poster} alt="poster" className="poster-image" />
            <p className="hero-description">
              During her family's move to the suburbs, a sullen 10-year-old girl
              wanders into a world ruled by gods, witches and spirits, and where
              humans are changed into beasts.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
