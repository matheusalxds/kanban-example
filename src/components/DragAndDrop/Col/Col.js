import React from 'react';
import classNames from 'classnames';

import css from './DnDCol.module.scss';

const Col = ({ line = true, arrow = false, children }) => {
  const classes = classNames({
    [css.col]: true,
    [css['col--line']]: !!line,
    [css['col--arrow']]: !!arrow,
  });

  return (
    <div className={classes}>
      {children}
    </div>
  );
};

Col.displayName = 'DnDCol';

export default Col;
