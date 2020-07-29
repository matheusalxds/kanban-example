import React, { useState } from 'react';
import produce from 'immer';

import loadData from './components/DragAndDrop/__mock__/__fixture';

// context
import { Context as BoardContext } from './contexts/Context';

// components
import Main from './components/Main/Main';
import Content from './components/Content/Content';
import DnD from './components/DragAndDrop/DnD';

// utils
import parseData from './components/DragAndDrop/utils/parse-data';

const data = loadData();

function App() {
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
    <div className="App">
      <Main>
        <Content>
          <BoardContext data={{ lists, move }}>
            <DnD />
          </BoardContext>
        </Content>
      </Main>
    </div>
  );
}

export default App;
