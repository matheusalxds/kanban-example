import React from 'react';
import PropTypes from 'prop-types';
import css from './HeaderContent.module.scss';

const HeaderContent = ({
  title, step, amount, count, label,
}) => (
  <div className={css['header-content']}>
    <h3>{title}</h3>
    <span>{step}</span>
    <div>
      <span>
        R$
        {' '}
        {amount}
      </span>
      {' '}
      •
      {' '}
      <span>
        {count}
        {' '}
        {label}
        {`${count > 1 ? 's' : ''}`}
      </span>
    </div>
  </div>
);

HeaderContent.propTypes = {
  amount: PropTypes.number,
  count: PropTypes.number,
  label: PropTypes.string,
  step: PropTypes.string,
  title: PropTypes.string,
};
HeaderContent.defaultProps = {
  amount: 0,
  count: 0,
  label: 'Oportunidade',
  step: '',
  title: '',
};
HeaderContent.displayName = 'HeaderContent';

export default HeaderContent;
