import Axios from 'axios';
import './App.css';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Home } from './pages/home';
import { Login } from './pages/login';


function App(){
  
  return (
    <div className='App'>
      <Router>
        <div>
          <Link to='/'> Home </Link>
          <Link to='/login'> Login </Link>
        </div>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/login' element={<Login />}/>
          <Route path='*' element={<h1>page not found</h1>}/>
        </Routes>
      </Router>

    </div>
  );
}

export default App;
