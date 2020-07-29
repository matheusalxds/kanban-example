import React from 'react';

import css from './Wrapper.module.scss';

const Wrapper = ({ children }) => (
  <div className={css.wrapper}>
    {children}
  </div>
);

Wrapper.displayName = 'Wrapper';

export default Wrapper;
