import React, { useCallback, useState, VFC } from "react";
import TodoList from "../todoList/todoList";
import "./todoApp.css";

export interface TodoItemModel {
  title: string;
}
export const TodoApp: VFC = () => {
  const [items, setItems] = useState<TodoItemModel[]>([]);

  const handleChange = useCallback((item: TodoItemModel, index: number) => {
    setItems((prevItems) =>
      prevItems.map((currentItem, indexItem: number) => {
        if (index === indexItem + 1) {
          return item;
        }

        return currentItem;
      })
    );
  }, []);

  const handleSend = useCallback(() => {
    console.log("Your todo is: ", items);
    // sync with server
  }, [items]);

  const handleAdd = useCallback(() => {
    const defaultItem = {
      title: "",
    };
    setItems((prevItems) => [...prevItems, defaultItem]);
  }, []);

  return (
    <div className="todo-app">
      <div className="header">
        <h1 className="h1">Todo list</h1>
        <div className="header__right">
          <button onClick={handleSend}>Send</button>
          <button onClick={handleAdd}>Add</button>
        </div>
      </div>
      <TodoList items={items} onAddItem={handleChange} />
    </div>
  );
};

export default TodoApp;
