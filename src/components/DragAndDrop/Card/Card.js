import React, { useRef } from 'react';
import moment from 'moment';
import classNames from 'classnames';
import { useDrag, useDrop } from 'react-dnd';

// context
import { useContextHook } from '../../../contexts/Context';

// components
import CardStatus from '../CardStatus/CardStatus';

import css from './Card.module.scss';

const Card = ({ data, index, listIndex }) => {
  const ref = useRef();
  const { moveCard } = useContextHook();

  const [{ isDragging }, dragRef] = useDrag({
    item: { type: 'CARD', index, listIndex },
    collect: monitor => ({
      isDragging: monitor.isDragging()
    })
  });

  const [, dropRef] = useDrop({
    accept: 'CARD',
    hover(item, monitor) {
      const draggedListIndex = item.listIndex;
      const targetListIndex = listIndex;

      const draggedIndex = item.index;
      const targetIndex = index;

      if (draggedIndex === targetIndex && draggedListIndex === targetListIndex) return;

      const targetSize = ref.current.getBoundingClientRect();
      const targetCenter = (targetSize.bottom - targetSize.top) / 2;

      const draggedOffset = monitor.getClientOffset();
      const draggedTop = draggedOffset.y - targetSize.top;

      if (draggedIndex < targetIndex && draggedTop < targetCenter) return;
      if (draggedIndex > targetIndex && draggedTop > targetCenter) return;

      moveCard(draggedListIndex, targetListIndex, draggedIndex, targetIndex);

      item.index = targetIndex;
      item.listIndex = targetListIndex;
    }
  });

  const classes = classNames({
    [css.card]: true,
    [css['card--dragging']]: isDragging
  });

  dragRef(dropRef(ref));

  const { amount, days, person, status, title } = data;

  return (
    <div className={classes} ref={ref}>
      <h3>{title}</h3>
      <div>
        <span>
          {moment(days).fromNow()}
        </span>
        <span>
          {person}
        </span>
        <span>
          {amount}
        </span>
        {status ? <CardStatus status={true} /> : <div />}
      </div>
    </div>
  );
};

Card.displayName = 'Card';

export default Card;
