import React from 'react';

const Tile = ({ value, isFlipped, onClick }) => (
  <div className="tile" onClick={onClick}>
    {isFlipped ? value : '?'}
  </div>
);

export default Tile;
