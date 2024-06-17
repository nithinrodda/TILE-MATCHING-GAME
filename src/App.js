import React, { useState } from 'react';
import WelcomeScreen from './components/WelcomeScreen';
import GameBoard from './components/GameBoard';
import SuccessScreen from './components/SuccessScreen';
import './App.css';

const App = () => {
  const [name, setName] = useState(localStorage.getItem('userName') || '');
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [isGameFinished, setIsGameFinished] = useState(false);
  const [score, setScore] = useState(0);
  const [time, setTime] = useState(0);

  const handleNameSubmit = (userName) => {
    setName(userName);
    setIsGameStarted(true);
  };

  const handleGameEnd = (finalScore, timeTaken) => {
    setScore(finalScore);
    setTime(timeTaken);
    setIsGameFinished(true);
  };

  return (
    <div className="App">
      {!isGameStarted && !isGameFinished && <WelcomeScreen onNameSubmit={handleNameSubmit} />}
      {isGameStarted && !isGameFinished && <GameBoard onGameEnd={handleGameEnd} />}
      {isGameFinished && <SuccessScreen score={score} time={time} />}
    </div>
  );
};

export default App;
 

// import React, { useState } from 'react';
// import WelcomeScreen from './components/WelcomeScreen';
// import GameBoard from './components/GameBoard';
// import SuccessScreen from './components/SuccessScreen';
// import './App.css';

// const App = () => {
//   const [name, setName] = useState(localStorage.getItem('userName') || '');
//   const [isGameStarted, setIsGameStarted] = useState(false);
//   const [isGameFinished, setIsGameFinished] = useState(false);
//   const [score, setScore] = useState(0);
//   const [time, setTime] = useState(0);

//   const handleNameSubmit = (userName) => {
//     setName(userName);
//     setIsGameStarted(true);
//   };

//   const handleGameEnd = (finalScore, timeTaken) => {
//     setScore(finalScore);
//     setTime(timeTaken);
//     setIsGameFinished(true);
//   };

//   return (
//     <div className="App">
//       {!isGameStarted && !isGameFinished && <WelcomeScreen onNameSubmit={handleNameSubmit} />}
//       {isGameStarted && !isGameFinished && <GameBoard onGameEnd={handleGameEnd} />}
//       {isGameFinished && <SuccessScreen score={score} time={time} />}
//     </div>
//   );
// };

// export default App;
