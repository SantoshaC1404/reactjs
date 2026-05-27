import { createContext, useReducer } from "react";

export const TodoItemsContext = createContext({
  todoItems: [],
  addNewItem: () => {},
  deleteItem: () => {},
});

const todoItemReducer = (currentTodoItemState, action) => {
  let newItems = currentTodoItemState;
  if (action.type === "NEW_ITEM") {
    newItems = [
      ...currentTodoItemState,
      { name: action.payload.itemName, date: action.payload.itemDate },
    ];
  } else if (action.type === "DELETE_ITEM") {
    newItems = currentTodoItemState.filter(
      (item) => item.name !== action.payload.itemName,
    );
  }
  return newItems;
};

const TodoItemsContexProvider = ({ children }) => {
  const [todoItems, dispatchTodoItems] = useReducer(todoItemReducer, []);

  const addNewItem = (itemName, itemDate) => {
    const addNewItem = {
      type: "NEW_ITEM",
      payload: {
        itemName: itemName,
        itemDate: itemDate,
      },
    };
    dispatchTodoItems(addNewItem);
  };

  const deleteItem = (itemName) => {
    const deleteItem = {
      type: "DELETE_ITEM",
      payload: { itemName: itemName },
    };
    dispatchTodoItems(deleteItem);
  };

  return (
    <TodoItemsContext.Provider
      value={{
        todoItems: todoItems,
        addNewItem: addNewItem,
        deleteItem: deleteItem,
      }}
    >
      {children}
    </TodoItemsContext.Provider>
  );
};

export default TodoItemsContexProvider;
