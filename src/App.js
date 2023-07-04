import './App.css';

function App() {
  // const name = <h1>Sukhman</h1>;
  // const age = <h2>21</h2>
  // const email = <h2>sample@email.com</h2>
  // const user = (
  //   <div>
  //     {name}
  //     {age}
  //     {email}
  //   </div>
  // );
  return (
    <div className="App">
      {/* {name} */}
      {/* {name} */}
      < User name='Sukhman' age = {20} email="sample@email.com" />
      < User name='Singh' age = {20} email="sample@email.com" />
    </div>
  );
}


const User = (props) => {
  return (
  <div>
    <h1>{props.name}</h1>
    <h2>{props.age}</h2>
    <h2>{props.email}</h2>
  </div>)
}


// const User = () => {
//   return (
//   <div>
//     <h1>Sukhman</h1>
//     <h2>21</h2>
//     <h2>sample@email.com</h2>
//   </div>)
// }

// const GetName = () => {
//   return 'Sukhman';
// }

// const GetNameComponent = () => {
//   return <h1>Sukhman</h1>;
// }

export default App;
