import { React, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Login from './Components/Login'
import Home from './Components/Home'
import MyWorkouts from './Components/MyWorkouts'
import NewWorkout from './Components/NewWorkout'
import Header from './Components/Header'
import CalendarWorkouts from './Components/CalendarWorkouts'

function App() {
return (
  <Router>
    <Header />
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/Home' element={<Home />} />
      <Route path='/myworkouts' element={<MyWorkouts/>} />
      <Route path='/newworkout' element={<NewWorkout />} />
      <Route path='/calendarworkouts/:date' element={<CalendarWorkouts />} />
    </Routes>
  </Router>
)

}

export default App;