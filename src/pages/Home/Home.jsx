import React from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import hero from '../../assets/back.jpg'
import poster from '../../assets/Spirited Away Movie Poster.jpg'
import winner from '../../assets/winner.png'
import TitleCards from '../../components/TitleCards/TitleCards'
import Footer from '../../components/Footer/Footer'

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
      <div className="hero-actions">
      <div className="hero-bnts">
            <button className="btn">Play</button>
            <button className='btn'> Details</button>
      </div>
      <img src={winner} alt="winner" className="winner" />
      </div>
      <TitleCards />
      <div className="More movies">
        <TitleCards />
        <TitleCards />
        <TitleCards />
      </div>
      <div className="Footer">
        <Footer/>
      </div>
    </div>

    
  )
}

export default Home