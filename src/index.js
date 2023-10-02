import React, {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import './styles.css';
import './autorun-and-stop';

import App from './App';
import {store, TodoListView} from './the-gist-of-mobx';

const root = createRoot(document.getElementById('root'));
root.render(
    <StrictMode>
      {/*<App/>*/}
      <hr/>
      <TodoListView todoList={store}/>
    </StrictMode>,
);
