import './App.css';
import { useState, useEffect } from 'react';

function App(){
  const [text, setText] = useState('');

  useEffect(()=>{
    console.log('Component mounted');
    return () =>{
      console.log('Component unmounted');
    }
  },[]);

  return (
  <div className='App'>
    <h1>Hello</h1>
  </div>
  );
}

export default App;
