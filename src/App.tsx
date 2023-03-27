import React from 'react';
import Form from './components/Form'
import Counter from './components/Counter';
import DisplayGrid from './components/DisplayGrid';
import Timer from './components/Timer';
import Todo from './components/Todo';
import './App.css';
import { createTodos } from './utils/todoUtils';

const todos = createTodos(); 

function App() {
  const [tab, setTab] = React.useState('all');
  const [isDark, setIsDark] = React.useState(false);
  return (
    <div className="App">
      <Timer />
      <button onClick={() => setTab('all')}>
        All
      </button>
      <button onClick={() => setTab('active')}>
        Active
      </button>
      <button onClick={() => setTab('completed')}>
        Completed
      </button>
      <br />
      <label>
        <input
          type="checkbox"
          checked={isDark}
          onChange={e => setIsDark(e.target.checked)}
        />
        Dark mode
      </label>
      <hr />
      <Todo tab={tab} theme={isDark ? 'dark' : 'light'}/>
      {/* <Counter />
      <DisplayGrid /> */}
    </div>
  );
}

export default App;
