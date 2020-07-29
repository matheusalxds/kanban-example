import React from 'react';

import Main from './components/Main/Main';
import Content from './components/Content/Content';
import DnD from './components/DragAndDrop/DnD';

const App = () => (
  <div className="App">
    <Main>
      <Content>
        <DnD />
      </Content>
    </Main>
  </div>
)

export default App;
