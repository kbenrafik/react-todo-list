import React from "react";
import { render, screen } from "@testing-library/react";
import TodoList from "./todoList";

test("renders TodoList", () => {
  const mockProps = {
    items: [
      {
        title: "todo 1",
      },
      {
        title: "todo 2",
      },
    ],
  };

  const onAddItemMock = () => {}
  const component = render(<TodoList items={mockProps.items} onAddItem={onAddItemMock} />);

  expect(component.container).toMatchSnapshot();
});
