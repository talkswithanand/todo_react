import { MdDeleteForever } from "react-icons/md";

function ToDoItem({ desc, date, onDeleteClick }) {
  return (
    <div className="container">
      <div className="row custom-row">
        <div className="col-6">{desc}</div>
        <div className="col-4">{date}</div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-danger custom-button"
            onClick={() => onDeleteClick(desc)}
          >
            <MdDeleteForever />
          </button>
        </div>
      </div>
    </div>
  );
}
export default ToDoItem;
