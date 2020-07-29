import React from 'react';
import classNames from 'classnames';

import css from './Col.module.scss';
import { useDrop } from 'react-dnd';
import { useContextHook } from '../../../contexts/Context';

const Col = ({ line = true, arrow = false, listIndex, listLength, children }) => {
  const { moveToList } = useContextHook();
  const classes = classNames({
    [css.col]: true,
    [css['col--line']]: !!line,
    [css['col--arrow']]: !!arrow
  });

  const [, dropRef] = useDrop({
    accept: 'CARD',
    hover(item, monitor) {
      const draggedListIndex = item.listIndex;
      const targetListIndex = listIndex;

      const draggedIndex = item.index;
      const targetIndex = listLength;

      if (draggedListIndex === targetListIndex) return;

      moveToList(draggedListIndex, targetListIndex, draggedIndex, targetIndex);

      item.index = listLength;
      item.listIndex = targetListIndex;
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
