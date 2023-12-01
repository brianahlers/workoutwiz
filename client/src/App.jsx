import { React, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './Components/Home'
import MyWorkout from './Components/MyWorkouts'
import NewWorkout from './Components/NewWorkout'
import Header from './Components/Header'

function App() {
  // const [currentPage, setCurrentPage] = useState('Home')

  // const renderPage = () => {
  //   if (currentPage === 'Home') {
  //     return <Home />
  //   }
  //   if (currentPage === 'Calendar') {
  //     return <MyWorkout />
  //   }
  //   if (currentPage === 'NewWorkout') {
  //     return <NewWorkout />
  //   }
  // };

  // const handlePageChange = (page) => setCurrentPage(page)

  // return (
  //   <>
  //     <Header currentPage={currentPage} handlePageChange={handlePageChange} />
  //     <main>
  //       {renderPage()}
  //     </main>
  //   </>
  // )
return (
  <Router>
    <Header />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/myworkout' element={<MyWorkout />} />
      <Route path='/newworkout' element={<NewWorkout />} />
    </Routes>
  </Router>
)

}
export default App;