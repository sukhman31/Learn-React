import Axios from 'axios';
import './App.css';
import { useState, useEffect } from 'react';


function App(){
  const [catFact,setCatFact] = useState('')

  useEffect(()=>{
    fetchCatFact();
  },[]);
  
  const fetchCatFact = () => { 
    Axios.get('https://catfact.ninja/fact').then((res)=>{
    setCatFact(res.data.fact);
    })
  }

  return (
  <div className='App'>
    <button onClick={fetchCatFact}>Generate Cat Fact</button>
    <p>{catFact}</p>
  </div>
  );
}

export default App;
