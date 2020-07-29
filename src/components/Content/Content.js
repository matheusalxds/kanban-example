import React from 'react';

import css from './Content.module.scss'


const Content = ({ children }) => (
  <div className={css.content}>
    {children}
  </div>
);

Content.displayName = 'Content';

export default Content;
