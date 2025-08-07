import { MdDeleteForever } from "react-icons/md";
import { ContextTodo } from "../store/myTodostore";
import { useContext } from "react";

const Item = () => {
  const { todos, handleDelete } = useContext(ContextTodo);

  return (
    <>
      {todos.map((todo, index) => (
        <div key={index} className="container">
          <div className="row my-row align-items-center g-2">
            <div className="col-12 col-md-6">
              <p className="todo-name">{todo.name}</p>
            </div>
            <div className="col-12 col-md-4">
              <p className="todo-date">{todo.Date}</p>
            </div>
            <div className="col-12 col-md-2">
              <button
                type="button"
                className="btn btn-danger w-100"
                onClick={() => handleDelete(index)}
              >
                <MdDeleteForever />
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
export default Item;
