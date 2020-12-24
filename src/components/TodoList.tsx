import React from 'react';

import './TodoList.css';

interface TodoListProops {
  items: { id: string; text: string }[];
  onDeleteTodo: (id: string) => void;
}

const TodoList: React.FC<TodoListProops> = (props) => {
  return (
    <ul>
      {props.items.map((todo) => (
        <li key={todo.id}>
          <span>{todo.text}</span>
          <button onClick={props.onDeleteTodo.bind(null, todo.id)}>削除</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
