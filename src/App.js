import React from 'react';

import Main from './components/Main/Main';
import Content from './components/Content/Content';
import Kanban from './components/Kanban/Kanban';

const App = () => (
  <div className="App">
    <Main>
      <Content>
        <Kanban />
      </Content>
    </Main>
  </div>
);

export default App;
