import React from 'react';
import PropTypes from 'prop-types';

import css from './Board.module.scss';

const Board = ({ children }) => (
  <div className={css.board}>
    {children}
  </div>
);

Board.propTypes = {
  children: PropTypes.instanceOf(Object),
};
Board.defaultProps = {
  children: null,
};
Board.displayName = 'Wrapper';

export default Board;
