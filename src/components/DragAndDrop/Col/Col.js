import React from 'react';
import classNames from 'classnames';

import css from './Col.module.scss';
import { useDrop } from 'react-dnd';

const Col = ({ line = true, arrow = false, listIndex, children }) => {
  const classes = classNames({
    [css.col]: true,
    [css['col--line']]: !!line,
    [css['col--arrow']]: !!arrow
  });

  const [, dropRef] = useDrop({
    accept: 'CARD',
    hover(item, monitor) {
      console.log('item', item);
      console.log('monitor', monitor);
      console.log('listIndex', listIndex);
      // dndHelper(item, monitor, listIndex, ref, move);
    }
  });

  return (
    <div className={classes} ref={dropRef}>
      {children}
    </div>
  );
};

Col.displayName = 'DnDCol';

export default Col;
