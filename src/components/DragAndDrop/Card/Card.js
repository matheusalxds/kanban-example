import React, { useRef } from 'react';
import PropTypes from 'prop-types';
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
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
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

      Object.assign(item, { index: targetIndex, listIndex: targetListIndex });
    },
  });
  dragRef(dropRef(ref));

  const classes = classNames({
    [css.card]: true,
    [css['card--dragging']]: isDragging,
  });

  const {
    amount, createdAt, customer, status, name,
  } = data;

  return (
    <div className={classes} ref={ref}>
      <h3>{name}</h3>
      <div>
        <span>
          {moment(createdAt).fromNow()}
        </span>
        <span>
          {customer}
        </span>
        <span>
          {amount}
        </span>
        {status ? <CardStatus status={status} /> : <div />}
      </div>
    </div>
  );
};

Card.propTypes = {
  data: PropTypes.instanceOf(Object),
  index: PropTypes.number,
  listIndex: PropTypes.string,
};
Card.defaultProps = {
  data: null,
  index: 0,
  listIndex: '',
};
Card.displayName = 'Card';

export default Card;
