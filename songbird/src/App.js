import React from 'react';
import Header from './components/Header/Header';
import CurrentQuestion from './components/CurrentQuestion/CurrentQuestion';
import BlockOfAnswers from './components/BlockOfAnswers/BlockOfAnswers';
import NextLevelButton from './components/NextLevelButton/NextLevelButton';

function App() {
  return (
    <div className = "container">
       <Header/>
       <CurrentQuestion/>
       <BlockOfAnswers/>
       <NextLevelButton/>
    </div>
  );
}

export default App;
