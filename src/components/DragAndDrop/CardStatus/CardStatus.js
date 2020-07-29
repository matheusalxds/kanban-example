import React from 'react';
import PropTypes from 'prop-types';

const CardStatus = ({ status }) => (status ? <span>{status === 5 ? 'Ganho' : 'Arquivado'}</span> : <span />);

CardStatus.propTypes = {
  status: PropTypes.number,
};
CardStatus.defaultProps = {
  status: null,
};
CardStatus.displayName = 'CardStatus';

export default CardStatus;
