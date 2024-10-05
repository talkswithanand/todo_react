import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import "./App.css";
import ToDoItems from "./components/ToDoItems";
import { useState } from "react";
import WelcomeMessage from "./components/WelcomeMessage";

function App() {
  const [toDoItems, setToDoItems] = useState([]);

  const handleNewItem = (itemName, itemDate) => {
    const newTodoItems = [
      ...toDoItems,
      {
        name: itemName,
        dueDate: itemDate,
      },
    ];
    setToDoItems(newTodoItems);
  };

  const handleDeleteItem = (todoItemName) => {
    const newTodoItems = toDoItems.filter((item) => item.name !== todoItemName);
    setToDoItems(newTodoItems);
  };

  return (
    <center className="todo-container">
      <AppName />
      <AddTodo onNewItem={handleNewItem} />
      {toDoItems.length === 0 && <WelcomeMessage></WelcomeMessage>}
      <ToDoItems toDoItems={toDoItems} onDeleteClick={handleDeleteItem} />
    </center>
  );
}

export default App;
