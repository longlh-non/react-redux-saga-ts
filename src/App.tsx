import React from 'react';
import Form from './components/Form'
import Counter from './components/Counter';
import DisplayGrid from './components/DisplayGrid';
import Timer from './components/Timer';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* <Form />
       */}
       <Counter />
       <DisplayGrid />
       <Timer />
    </div>
  );
}

export default App;
