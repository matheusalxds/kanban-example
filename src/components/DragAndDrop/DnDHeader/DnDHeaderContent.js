import React from 'react';

import css from './DnDHeaderContent.module.scss';

const DnDHeaderContent = ({ title, step, amount, count, label = 'Oportunidade' }) => (
  <div className={css['header-content']}>
    <h3>{title}</h3>
    <span>{step}</span>
    <div>
      <span>R$ {amount}</span> • <span>{count} {label}{`${count > 1 ? 's' : ''}`}</span>
    </div>
  </div>
);

DnDHeaderContent.displayName = 'HeaderContent';

export default DnDHeaderContent;
