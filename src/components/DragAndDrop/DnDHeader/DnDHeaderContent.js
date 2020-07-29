import React from 'react';
import PropTypes from 'prop-types';
import css from './DnDHeaderContent.module.scss';

const DnDHeaderContent = ({
  title, step, amount, count, label,
}) => (
  <div className={css['header-content']}>
    <h3>{title}</h3>
    <span>{step}</span>
    <div>
      <span>
        R$
        {amount}
      </span>
      {' '}
      •
      <span>
        {count}
        {' '}
        {label}
        {`${count > 1 ? 's' : ''}`}
      </span>
    </div>
  </div>
);

DnDHeaderContent.propTypes = {
  amount: PropTypes.number,
  count: PropTypes.number,
  label: PropTypes.string,
  step: PropTypes.string,
  title: PropTypes.string,
};
DnDHeaderContent.defaultProps = {
  amount: 0,
  count: 0,
  label: 'Oportunidade',
  step: '',
  title: '',
};
DnDHeaderContent.displayName = 'HeaderContent';

export default DnDHeaderContent;
