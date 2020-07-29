import React, { useState } from 'react';
import produce from 'immer';

// context
import { Context as BoardContext } from '../../contexts/Context';

// components
import Col from './Col/Col';
import Card from './Card/Card';
import DnDHeader from './DnDHeader/DnDHeader';
import DnDContent from './DnDContent/DnDContent';
import DnDProvider from './DnDProvider/DnDProvider';

// utils
import parseData from './utils/parse-data';
import loadData from './__mock__/__fixture';

// fixtures
const data = loadData();

const DnD = () => {
  const [lists, setLists] = useState(parseData(data));

  const move = (fromList, toList, from, to) => {
    const resp = produce(lists, draft => {
      const dragged = draft[fromList][from];
      draft[fromList].splice(from, 1);
      draft[toList].splice(to, 0, dragged);
    });
    setLists(prevState => {
      return { ...prevState, ...resp };
    });
  };

  return (
    <BoardContext data={{ lists, move }}>
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
    </BoardContext>
  );
};

DnD.propTypes = {};
DnD.defaultProps = {};
DnD.displayName = 'DnD';

export default DnD;
