import React from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import hero from '../../assets/back.jpg'

const Home = () => {
  return (
    <div className='home'>
      <Navbar />
      <div className="hero-section relative">
        <img src={hero} alt="Hero" className="w-full h-screen object-cover brightness-100" />
        <div className="hero-content">

        <h1 className="hero-title">
            Spirited Away
          </h1>
        
          <br />
          <p>
            During her family's move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches and spirits, and where humans are changed into beasts.
          </p>
          
        </div>
      </div>
    </div>
  )
}

export default Home