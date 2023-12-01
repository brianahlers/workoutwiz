import { React, useState } from 'react'
import './App.css'
import Home from './Components/Home'
import MyWorkout from './Components/MyWorkouts'
import NewWorkout from './Components/NewWorkout'

function App() {
  const [currentPage, setCurrentPage] = useState('Home')

  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />
    }
    if (currentPage === 'Calendar') {
      return <MyWorkout />
    }
    if (currentPage === 'NewWorkout') {
      return <NewWorkout />
    }
  };

  const handlePageChange = (page) => setCurrentPage(page)

  return (
    <>
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      <main>
        {renderPage()}
      </main>
    </>
  )
}



export default App;
