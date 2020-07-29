import React from 'react';

import css from './HeaderContent.module.scss';

const HeaderContent = ({ title, step, amount, count, label = 'Oportunidade' }) => (
  <div className={css['header-content']}>
    <h3>{title}</h3>
    <span>{step}</span>
    <div>
      <span>R$ {amount}</span> • <span>{count} {label}{`${count > 1 ? 's' : ''}`}</span>
    </div>
  </div>
);

HeaderContent.displayName = 'HeaderContent';

export default HeaderContent;
