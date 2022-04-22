import { useMachine } from '@xstate/react';
import React from 'react';
import './App.css';
import { myMachine } from './machines/myFirstMachine';

function App() {
  const [state, send] = useMachine(myMachine)
  return (
    <div className="App">
      {JSON.stringify(state.value)}
      <button onClick={() => {
        send("MOUSEOVER")
      }}>Mouse over</button>
      <button onClick={() => {
        send("MOUSEOUT")
      }}>Mouse out</button>
    </div>
  );
}

export default App;
