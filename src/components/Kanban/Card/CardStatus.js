import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import css from './CardStatus.module.scss';

const CardStatus = ({ status }) => {
  console.log('status', status);
  const classes = classNames({
    [css[`status--${status}`]]: !!status,
  });
  console.log('classes', classes);
  return (status ? <span className={classes}>{status === 5 ? 'Ganho' : 'Arquivado'}</span> : <span />);
};

CardStatus.propTypes = {
  status: PropTypes.number,
};
CardStatus.defaultProps = {
  status: null,
};
CardStatus.displayName = 'CardStatus';

export default CardStatus;
