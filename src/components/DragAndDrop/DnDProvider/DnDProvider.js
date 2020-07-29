import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

const DnDProvider = ({ children }) => {
  return (
    <DndProvider backend={HTML5Backend}>
      {children}
    </DndProvider>
  );
};

DnDProvider.propTypes = {};
DnDProvider.defaultProps = {};
DnDProvider.displayName = 'DnDProvider';

export default DnDProvider;
