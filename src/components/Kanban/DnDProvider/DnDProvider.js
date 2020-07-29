import React from 'react';
import PropTypes from 'prop-types';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

const DnDProvider = ({ children }) => (
  <DndProvider backend={HTML5Backend}>
    {children}
  </DndProvider>
);

DnDProvider.propTypes = {
  children: PropTypes.oneOfType(
    [PropTypes.instanceOf(Object), PropTypes.instanceOf(Array)],
  ).isRequired,
};
DnDProvider.defaultProps = {};
DnDProvider.displayName = 'DnDProvider';

export default DnDProvider;
