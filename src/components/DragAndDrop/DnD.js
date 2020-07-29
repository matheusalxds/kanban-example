import React from 'react';

// context
import { useContextHook } from '../../contexts/Context';

// components
import DnDHeader from './DnDHeader/DnDHeader';
import DnDContent from './DnDContent/DnDContent';
import Col from './Col/Col';
import Card from './Card/Card';
import DnDProvider from './DnDProvider/DnDProvider';

const DnD = () => {
  const { lists } = useContextHook();
  return (
    <DnDProvider>
      <DnDHeader />
      <DnDContent>
        {Object.entries(lists).map(([key, value], index) => {
          return (
            <Col key={`${key}-${index+1}`} listIndex={key}>
              {value && value.length ? value.map((item, index) => (
                <Card
                  key={item.id}
                  index={index}
                  listIndex={key}
                  data={item}
                />
              )): null}
            </Col>
          );
        })}
      </DnDContent>
    </DnDProvider>
  );
};

DnD.propTypes = {};
DnD.defaultProps = {};
DnD.displayName = 'DnD';

export default DnD;
