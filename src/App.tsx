import React, { useState } from 'react';
import './App.css';
import Board from './Components/Board/Board';
import Heading from './Components/Heading/Heading';

function App() {
  const [board, setBoard] = useState<string[]>(
    [
      '','','','','',
      '','','','','',
      '','','','','',
      '','','','','',
      '','','','','',
      '','','','','',
    ]
  )
  return (
    <div className="App">
      <Heading type="h1" text="Words Game"/>
      <div className="board-container">
        <Board board={board} />
      </div>
    </div>
  );
}

export default App;