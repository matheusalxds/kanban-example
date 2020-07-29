import React from 'react';

import PropTypes from 'prop-types';
import css from './Main.module.scss';

const Main = ({ children }) => (
  <div className={css.main}>
    {children}
  </div>
);
Main.propTypes = {
  children: PropTypes.oneOfType(
    [PropTypes.instanceOf(Object), PropTypes.instanceOf(Array)],
  ).isRequired,
};
Main.defaultProps = {};
Main.displayName = 'Main';

export default Main;
