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

const Kanban = () => {
  const [lists, setLists] = useState(parseData(data));

  const moveCard = (fromList, toList, from, to) => {
    const resp = produce(lists, (draft) => {
      const dragged = draft[fromList][from];
      draft[fromList].splice(from, 1);
      draft[toList].splice(to, 0, dragged);
    });
    setLists((prevState) => ({ ...prevState, ...resp }));
  };

  return (
    <BoardContext data={{ lists, moveCard }}>
      <DnDProvider>
        <DnDHeader />
        <DnDContent>
          {Object.entries(lists)
            .map(([key, value], listIndex) => (
              <Col key={`${key}-${listIndex + 1}`} listIndex={key} listLength={value.length || 0}>
                {value && value.length ? value.map((item, index) => (
                  <Card
                    key={item.id}
                    index={index}
                    listIndex={key}
                    data={item}
                  />
                )) : null}
              </Col>
            ))}
        </DnDContent>
      </DnDProvider>
    </BoardContext>
  );
};

Kanban.propTypes = {};
Kanban.defaultProps = {};
Kanban.displayName = 'Kanban';

export default Kanban;
