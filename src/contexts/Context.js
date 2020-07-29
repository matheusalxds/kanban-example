import React, { createContext, useContext } from 'react';
import PropTypes from 'prop-types';

const ContextObject = createContext({});

const Context = ({ data, children }) => (
  <ContextObject.Provider value={data}>{children}</ContextObject.Provider>
);

Context.propTypes = {
  data: PropTypes.instanceOf(Object),
  children: PropTypes.oneOfType(
    [PropTypes.instanceOf(Object), PropTypes.instanceOf(Array)],
  ).isRequired,
};
Context.defaultProps = {
  data: null,
};

const useContextHook = () => {
  const context = useContext(ContextObject);
  if (context === undefined) {
    throw new Error(
      'useContextHook can only be used inside a Context',
    );
  }
  return context;
};

export {
  Context,
  useContextHook,
};
