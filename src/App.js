import React, {useState} from 'react';
import './App.css';

function App() {

  const [people, setPeople] = useState(0)
  return (
    <div className="App">
      <h1> Hello Guys</h1>
      people here tonight: {people} <br/>
      <button onClick={() => setPeople(people+1)}>Hey !!</button>
    </div>
  );
}

export default App;
