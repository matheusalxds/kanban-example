import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { useDrop } from 'react-dnd';
import css from './Col.module.scss';
import { useContextHook } from '../../../contexts/Context';

const Col = ({
  line, arrow, listIndex, listLength, children,
}) => {
  const { moveCard } = useContextHook();
  const classes = classNames({
    [css.col]: true,
    [css['col--line']]: !!line,
    [css['col--arrow']]: !!arrow,
  });

  const [, dropRef] = useDrop({
    accept: 'CARD',
    hover(item) {
      const draggedListIndex = item.listIndex;
      const targetListIndex = listIndex;

      const draggedIndex = item.index;
      const targetIndex = listLength;

      if (draggedListIndex === targetListIndex) return;

      moveCard(draggedListIndex, targetListIndex, draggedIndex, targetIndex);

      Object.assign(item, { index: listLength, listIndex: targetListIndex });
    },
  });

  return (
    <div className={classes} ref={dropRef}>
      {children}
    </div>
  );
};

Col.propTypes = {
  line: PropTypes.bool,
  arrow: PropTypes.bool,
  listIndex: PropTypes.string,
  listLength: PropTypes.number,
  children: PropTypes.oneOfType([PropTypes.instanceOf(Object), PropTypes.instanceOf(Array)]),
};
Col.defaultProps = {
  line: true,
  arrow: false,
  listIndex: '',
  listLength: 0,
  children: null,
};
Col.displayName = 'DnDCol';

export default Col;
