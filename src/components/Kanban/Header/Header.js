import React from 'react';

import css from './Header.module.scss';

// context
import { useContextHook } from '../../../contexts/Context';

// components
import HeaderContent from './HeaderContent';
import Col from '../Col/Col';

const sum = (arr, field) => arr[field].reduce((a, b) => a + b.amount, 0);

const listMap = [
  { title: 'Step 1', step: 'Nova Oportunidade', field: 'new' },
  { title: 'Step 2', step: 'Contato realizado', field: 'contacted' },
  { title: 'Step 3', step: 'Proposta enviada', field: 'sent' },
];

const Header = () => {
  const { lists } = useContextHook();
  return (
    <header className={css.header}>
      {listMap.map((item) => (
        <Col>
          <HeaderContent
            amount={sum(lists, item.field)}
            count={lists[item.field].length || 0}
            title={item.title}
            step={item.step}
          />
        </Col>
      ))}
    </header>
  );
};

Header.displayName = 'DnDHeader';

export default Header;
