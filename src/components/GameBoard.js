import React, { useState, useEffect } from 'react';
import Tile from './Tile';

const generateTiles = () => {
  const tileValues = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
  const tiles = [...tileValues, ...tileValues];
  return tiles.sort(() => Math.random() - 0.5);
};

const GameBoard = ({ onGameEnd }) => {
  const [tiles, setTiles] = useState(generateTiles());
  const [flippedTiles, setFlippedTiles] = useState([]);
  const [matchedTiles, setMatchedTiles] = useState([]);
  const [score, setScore] = useState(0);
  const [startTime, setStartTime] = useState(Date.now());

  useEffect(() => {
    if (matchedTiles.length === tiles.length) {
      const timeTaken = Math.floor((Date.now() - startTime) / 1000);
      onGameEnd(score, timeTaken);
    }
  }, [matchedTiles, tiles.length, onGameEnd, score, startTime]);

  const handleTileClick = (index) => {
    if (flippedTiles.length === 2 || flippedTiles.includes(index) || matchedTiles.includes(index)) return;

    const newFlippedTiles = [...flippedTiles, index];
    setFlippedTiles(newFlippedTiles);

    if (newFlippedTiles.length === 2) {
      const [first, second] = newFlippedTiles;
      if (tiles[first] === tiles[second]) {
        setMatchedTiles([...matchedTiles, first, second]);
        setScore(score + 1);
        setFlippedTiles([]);
      } else {
        setScore(score - 1);
        setTimeout(() => setFlippedTiles([]), 1000);
      }
    }
  };

  return (
    <div className="game-board">
      <div className="score">Score: {score}</div>
      <div className="tiles">
        {tiles.map((tile, index) => (
          <Tile
            key={index}
            value={tile}
            isFlipped={flippedTiles.includes(index) || matchedTiles.includes(index)}
            onClick={() => handleTileClick(index)}
          />
        ))}
      </div>
      <div className="timer">Time: {Math.floor((Date.now() - startTime) / 1000)}s</div>
    </div>
  );
};

export default GameBoard;

// import React, { useState, useEffect } from 'react';
// import Tile from './Tile';

// const generateTiles = () => {
//   const tileValues = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
//   const tiles = [...tileValues, ...tileValues];
//   return tiles.sort(() => Math.random() - 0.5);
// };

// const GameBoard = ({ onGameEnd }) => {
//   const [tiles, setTiles] = useState(generateTiles());
//   const [flippedTiles, setFlippedTiles] = useState([]);
//   const [matchedTiles, setMatchedTiles] = useState([]);
//   const [score, setScore] = useState(0);
//   const [startTime, setStartTime] = useState(Date.now());

//   useEffect(() => {
//     if (matchedTiles.length === tiles.length) {
//       const timeTaken = Math.floor((Date.now() - startTime) / 1000);
//       onGameEnd(score, timeTaken);
//     }
//   }, [matchedTiles]);

//   const handleTileClick = (index) => {
//     if (flippedTiles.length === 2 || flippedTiles.includes(index)) return;

//     const newFlippedTiles = [...flippedTiles, index];
//     setFlippedTiles(newFlippedTiles);

//     if (newFlippedTiles.length === 2) {
//       const [first, second] = newFlippedTiles;
//       if (tiles[first] === tiles[second]) {
//         setMatchedTiles([...matchedTiles, first, second]);
//         setScore(score + 1);
//       } else {
//         setScore(score - 1);
//         setTimeout(() => setFlippedTiles([]), 1000);
//       }
//     }
//   };

//   return (
//     <div className="game-board">
//       <div className="score">Score: {score}</div>
//       <div className="tiles">
//         {tiles.map((tile, index) => (
//           <Tile
//             key={index}
//             value={tile}
//             isFlipped={flippedTiles.includes(index) || matchedTiles.includes(index)}
//             onClick={() => handleTileClick(index)}
//           />
//         ))}
//       </div>
//       <div className="timer">Time: {Math.floor((Date.now() - startTime) / 1000)}s</div>
//     </div>
//   );
// };

// export default GameBoard;
