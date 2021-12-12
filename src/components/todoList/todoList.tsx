import React, { VFC } from "react";
import { TodoItemModel } from "../todoApp/todoApp";
import TodoItem from "../todoItem/todoItem";
import "./todoList.css"

// TODO please remove todo
interface TodoListProps {
  items: TodoItemModel[];
  onAddItem: (item: TodoItemModel, index: number) => void;
}

export const TodoList: VFC<TodoListProps> = ({ items, onAddItem }) => {
  return (
    <div className="todo-list">
      {items.map((item, index) => (
        <TodoItem
          key={index + 1}
          item={item}
          index={index + 1}
          onAddItem={onAddItem}
        />
      ))}
    </div>
  );
};

export default TodoList;
