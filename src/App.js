import Axios from 'axios';
import './App.css';
import { useState, useEffect } from 'react';


function App(){
  const [input, setInput] = useState('');
  const [age,setAge] = useState(null);

  const setName = (event) =>{
    setInput(event.target.value);
  }

  const predictAge = () => {
    Axios.get(`https://api.agify.io/?name=${input}`).then((res)=>{
      setAge(res.data.age)
    })
  }

  return (
  <div className='App'>
    <input placeholder='Enter your name' onChange={setName}></input>
    <button onClick={predictAge}>Predict</button>
    <h1>Predicted Age : {age}</h1>
  </div>
  );
}

export default App;
