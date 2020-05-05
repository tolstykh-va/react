import React, { Fragment } from 'react';

import { Board } from '../Board/Board';
import { Title } from '../Title/Title';

const Game = () => {
  return (
    <Fragment>
      <Title title="Text" />
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    </Fragment>
  );
}

export { Game };