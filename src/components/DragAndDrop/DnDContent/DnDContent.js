import React from 'react';

import css from './DnDContent.module.scss';

const DnDContent = ({ children }) => (
  <div className={css.content}>
    {children}
  </div>
);

DnDContent.displayName = 'Wrapper';

export default DnDContent;
