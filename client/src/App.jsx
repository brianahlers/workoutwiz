import { React, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './Components/Home'
import MyWorkouts from './Components/MyWorkouts'
import NewWorkout from './Components/NewWorkout'
import Header from './Components/Header'

function App() {
return (
  <Router>
    <Header />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/myworkouts' element={<MyWorkouts/>} />
      <Route path='/newworkout' element={<NewWorkout />} />
    </Routes>
  </Router>
)

}
export default App;