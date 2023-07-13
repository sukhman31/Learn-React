import Axios from 'axios';
import './App.css';
import { useState, useEffect, createContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Home } from './pages/home';
import { Contact } from './pages/contact';
import { Profile } from './pages/profile';
import { Navbar } from './pages/navbar';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

export const AppContext = createContext();

function App(){
  const [user, setUser] = useState('Sukhman');
  const client = new QueryClient();
  return (
    <div className='App'>
      <QueryClientProvider client={client}>
        <Router>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/contact' element={<Contact />}/>
            <Route path='/profile' element={<Profile />}/>
            <Route path='*' element={<h1>page not found</h1>}/>
          </Routes>
        </Router>
      </QueryClientProvider>
    </div>
  );
}

export default App;
