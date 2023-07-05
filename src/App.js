import './App.css';
import { useState } from 'react'


function App() {
  const [age, setAge] = useState(0);
  const [inputValue, setInputValue] = useState('');
  const [showText, setShowText] = useState(true);

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
    <button onClick={()=>{
      setShowText(!showText);
      console.log(showText);
    }}>Show/Hide</button>
    {showText===true && <h1>Lorem Ipsum</h1>}
  </div>
  )
}

export default App;
