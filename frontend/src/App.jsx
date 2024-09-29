import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Avaliable from './components/Avaliable'
import Books from './components/Books'
import Home from './components/Home';
import Bookdetail from './components/Bookdetail';
import AllBooks from './components/AllBooks';
import Signup from './components/Signup';

const App = () => {

  return (
    <>
      <Router>
      <div className="fixed inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/available" element={<Avaliable />} />
          <Route path="/book/:id" element={<Bookdetail />} />
          <Route path="/books" element={<AllBooks/>}/>
          <Route path="/signup" element={<Signup/>}/>
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App