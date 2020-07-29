import React from 'react';
import PropTypes from 'prop-types';

import css from './DnDContent.module.scss';

const DnDContent = ({ children }) => (
  <div className={css.content}>
    {children}
  </div>
);

DnDContent.propTypes = {
  children: PropTypes.instanceOf(Object),
};
DnDContent.defaultProps = {
  children: null,
};
DnDContent.displayName = 'Wrapper';

export default DnDContent;
