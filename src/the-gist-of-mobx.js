import * as React from 'react';
import {observer} from 'mobx-react-lite';
import {makeObservable, observable, computed, action} from 'mobx';

class Todo {
  id = Math.random();
  title = '';
  finished = false;

  constructor(title) {
    makeObservable(this, {
      title: observable,
      finished: observable,
      toggle: action,
    });
    this.title = title;
  }

  toggle() {
    this.finished = !this.finished;
  }
}

class TodoList {
  todos = [];

  get unfinishedTodoCount() {
    return this.todos.filter(todo => !todo.finished).length;
  }

  constructor(todos) {
    makeObservable(this, {
      todos: observable,
      unfinishedTodoCount: computed,
    });
    this.todos = todos;
  }
}

export const TodoListView = observer(({todoList}) => (
    <div>
      <ul>
        {todoList.todos.map(todo => (
            <TodoView todo={todo} key={todo.id}/>
        ))}
      </ul>
      Tasks left: {todoList.unfinishedTodoCount}
    </div>
));

const TodoView = observer(({todo}) => (
    <li>
      <input
          type="checkbox"
          checked={todo.finished}
          onChange={() => todo.toggle()}
      />
      {todo.title}
    </li>
));

export const store = new TodoList([
  new Todo('Get Coffee'),
  new Todo('Write simpler code'),
]);
