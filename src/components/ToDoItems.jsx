import ToDoItem from "./ToDoItem";
import styles from "./ToDoItem.module.css";

export default function ToDoItems({ toDoItems, onDeleteClick }) {
  return (
    <div className={styles.itemsContainer}>
      {toDoItems.map((item) => (
        <ToDoItem key={item.name} desc={item.name} date={item.dueDate} onDeleteClick={onDeleteClick}/>
      ))}
    </div>
  );
}
