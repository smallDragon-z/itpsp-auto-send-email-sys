import { Button } from 'antd';
import { produce } from 'immer';
import React, { useState } from 'react';

interface ITodoProps {
  id: string;
  title: string;
  done: boolean;
}
const Login = () => {
  const [todos, setTodos] = useState<ITodoProps[]>([
    {
      id: 'React',
      title: 'Learn React',
      done: true,
    },
    {
      id: 'Immer',
      title: 'Try Immer',
      done: false,
    },
  ]);
  const handleUpdate = () => {
    setTodos(
      produce((draft) => {
        console.log(draft);
        draft[0].title = 'Not Learn React';
      }),
    );
  };
  const handleAdd = (item: ITodoProps) => {
    setTodos(
      produce((draft) => {
        draft.push(item);
        console.log(draft);
      }),
    );
  };
  return (
    <div>
      <Button
        type="primary"
        onClick={() =>
          handleAdd({
            id: 'Vue',
            title: 'Learn Vue',
            done: true,
          })
        }
      >
        handleAdd
      </Button>
      <Button type="primary" onClick={handleUpdate}>
        handleUpdate
      </Button>
      {todos.map((todo, index) => (
        <div key={index}>{todo.title}</div>
      ))}
    </div>
  );
};

export default Login;
