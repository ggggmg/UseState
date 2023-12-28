import React from "react";

const Item = ({ todo, index, doneTodo }) => {
  return (
    <div>
        <h2>
            <span>{`${index + 1}`}</span>
            {todo.name}
        </h2>

        <p>{todo.status === 'new'
            ? 'Todo is not done'
            : todo.status === 'processing'
                ? 'Todo is Processing'
                : 'Completed!!!'
        }</p>

        <button onClick={() => doneTodo(todo.id)} >Done</button>
        <button>Edit</button>
        <button>Delete</button>
    </div>
  );
};

export default Item;
