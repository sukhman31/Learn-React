import './App.css';
import { useState } from 'react'


function App() {
  const [age, setAge] = useState(0);
  const [inputValue, setInputValue] = useState('');

  const increaseAge = () => {
    setAge(age+1);
  }

  //every onChange function has a default property event
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  }

  return (
  <div className='App'>
    {age}
    <button onClick={increaseAge}>Increase Age</button>
    <input type='text' onChange={handleInputChange}/>
    {inputValue}
  </div>
  )
}

export default App;
