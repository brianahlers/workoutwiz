import { React, useState } from 'react'
import './App.css'
import Home from './Components/Home'

function App() {
  const [currentPage, setCurrentPage] = useState('Home')

  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />
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
