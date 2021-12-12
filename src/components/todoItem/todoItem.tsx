import React, { ChangeEvent, memo, useCallback, useEffect, useState, VFC } from "react";
import { TodoItemModel } from "../todoApp/todoApp";
import "./todoItem.css"

interface TodoItemProps {
  item: TodoItemModel;
  index: number;
  onAddItem: (item: TodoItemModel, index: number) => void;
}

// using memo to prevent unnecessary rendring
export const TodoItem: VFC<TodoItemProps> = memo(({ item, index, onAddItem }) => {
  const [title, setTitle] = useState<string>(item.title || "");

  // We can also use onAddItem directly as another solution
  const handleChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.currentTarget.value);
  }, []);

  useEffect(() => {
    onAddItem({ title }, index);
  }, [index, onAddItem, title]);

  return (
    <div className="todo-item">
      <span>{index}. </span>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={handleChange}
      />
    </div>
  );
});

export default TodoItem;
