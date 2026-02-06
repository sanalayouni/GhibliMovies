import React from 'react'
import Home from './pages/Home/Home'
import { Routes,Route } from 'react-router-dom'
import Login from './pages/Login/Login'
import MovieDetails from './pages/MovieDetails/MovieDetails'
import Quiz from './pages/GhibliQuiz/GhibliQuiz'
const App = () => {
  return (
    <div className='home'>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/Quiz' element={<Quiz/>}/>
        <Route path="/movie/:id" element={<MovieDetails />} />
      </Routes>
      
    </div>
  )
}

export default App