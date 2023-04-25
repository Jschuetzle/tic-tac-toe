import React, { useState } from 'react';
import Square from './square';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isX, setIsX] = useState(true);
  const [winSquares, setWinSquares] = useState(Array(9).fill(false));
  const [draws, setDraws] = useState(0);

  const handleClick = (i) => {
    if (determineWinner() || determineTie() || squares[i]) {
      return;
    }

    setDraws(draws + 1);

    squares[i] = isX ? 'X' : 'O';
    setSquares(squares);
    setIsX(!isX);
  };

  const handleRestart = () => {
    setIsX(true);
    setSquares(Array(9).fill(null));
    setWinSquares(Array(9).fill(false));
    setDraws(0);
  };

  const renderSquare = (i) => {
    return (
      <Square
        value={squares[i]}
        highlight={winSquares[i]}
        onClick={() => handleClick(i)}
      />
    );
  };

  const winner = determineWinner();
  let status;

  if (winner) {
    status = `Winner: ${winner}`;
  } else if (determineTie()) {
    status = 'Tie';
  } else {
    status = `Next Player: ${isX ? 'X' : 'O'}`;
  }

  function determineWinner() {
    const winningPatterns = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < winningPatterns.length; i++) {
      const [a, b, c] = winningPatterns[i];

      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        highlightWinners([a, b, c]);
        return squares[a];
      }
    }
  }

  function determineTie() {
    if (draws === 9) {
      return true;
    }
    return false;
  }

  function highlightWinners(pattern) {
    winSquares[pattern[0]] = true;
    winSquares[pattern[1]] = true;
    winSquares[pattern[2]] = true;
  }

  return (
    <div className="board">
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>

      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>

      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>

      
      <div className="status">{status}</div>

      <button class="button-64" role="button" onClick={() => handleRestart()}>
        <span class="text">Restart</span>
      </button>
    </div>
  );
}
