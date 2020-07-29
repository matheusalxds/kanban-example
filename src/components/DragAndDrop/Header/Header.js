import React from 'react';

import css from './Header.module.scss';

// context
import { useContextHook } from '../../../contexts/Context';

// components
import HeaderContent from './HeaderContent';
import Col from '../Col/Col';

const sum = (arr, field) => arr[field].reduce((a, b) => a + b.amount, 0);

const DnDHeader = () => {
  const { lists } = useContextHook();
  return (
    <header className={css.header}>
      <Col>
        <HeaderContent
          amount={sum(lists, 'new')}
          count={lists.new.length || 0}
          title="Step 1"
          step="Nova Oportunidade"
        />
      </Col>
      <Col arrow>
        <HeaderContent
          amount={sum(lists, 'contacted')}
          count={lists.contacted.length || 0}
          title="Step 2"
          step="Contato realizado"
        />
      </Col>
      <Col arrow>
        <HeaderContent
          amount={sum(lists, 'sent')}
          count={lists.sent.length || 0}
          title="Step 3"
          step="Proposta enviada"
        />
      </Col>
    </header>
  );
};

DnDHeader.displayName = 'DnDHeader';

export default DnDHeader;
