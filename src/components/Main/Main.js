import React from 'react';

import css from './Main.module.scss';

const Main = ({ children }) => {
  return (
    <div className={css.main}>
      {children}
    </div>
  );
};

Main.displayName = 'Main';

export default Main;
