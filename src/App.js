import React, { useState } from 'react';
import Duck from './assets/rubber_duck.png';
import Button from 'react-bootstrap/Button';
import DUCK_ADVICE from './advice.data';

import './App.css';

const App = () => {
  const [currentAdvice, setCurrentAdvice] = useState('');

  const getRandomEntry = () => {
    let randomEntry = Math.floor(Math.random() * (DUCK_ADVICE.length - 1) + 1)

    setCurrentAdvice(DUCK_ADVICE[randomEntry].advice)
  }

  return (
    <div className="App">
      <header className="App-header">
        <p className='text'>
          tell the duck what's got you stuck...
        </p>
        <img className='image' src={Duck} alt="duck" />
      </header>
      <div className='body'>
        <Button 
          // variant="dark"
          variant="outline-dark"
          onClick={() => getRandomEntry()}
         >
          hear what the duck says
        </Button>
        <p className='advice-text'>{currentAdvice}</p>
      </div>
    </div>
  );
}

export default App;