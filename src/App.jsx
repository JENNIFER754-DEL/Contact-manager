import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SearchBar from './SearchBar';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
function App() {
  

  return (
    <>
    <BrowserRouter>
    <Router>
      <Route path="/"element={<Home/>} />
      <Route path="Contacts"element={<Contacts/>} />
      <Route path="Details"element={<Details/>} />
      <Navbar/>
      <SearchBar />
      </Router>
      </BrowserRouter>
    </>
  )
}

export default App
