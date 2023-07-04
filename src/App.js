import './App.css';
import {User} from './User'


function App() {
  const users = [
    {'name' : 'Sukhman' , 'age' : 20},
    {'name' : 'Aseem' , 'age' : 27},
    {'name' : 'Kartikey', 'age' : 24}
  ];
  return (
    <div className="App">
      {users.map((user,key) => {
        return <User name = {user.name} age = {user.age}/>
      })}
    </div>
  )
}

export default App;
