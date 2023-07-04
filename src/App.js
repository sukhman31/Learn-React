import './App.css';



function App() {
  const age = 15;
  const isGreen = true;

  return(
    <div>
      {age >= 18 ? <h1>OVERAGE</h1> : <h1>UNDERAGE</h1>}
      <h1 style={{color : isGreen ? "green" : "red"}}>This has color</h1>
      {isGreen && <button> this is a button</button>}
    </div>
  );
}

export default App;
