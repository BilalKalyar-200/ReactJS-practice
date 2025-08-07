import { useContext, useState } from "react";
import { MdAddCircleOutline } from "react-icons/md";
import { ContextTodo } from "../store/myTodostore";

const Input = () => {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const { handleNewTodo } = useContext(ContextTodo);
  const handleAdd = () => {
    if (!name || !date) return;
    handleNewTodo({ name, Date: date });
    setName("");
    setDate("");
  };
  return (
    <>
      <h1 className="App-name">Todo App</h1>
      <div className="container">
        <div className="row my-row align-items-center g-2">
          <div className="col-12 col-md-6">
            <input
              type="text"
              className="todoInput"
              placeholder="Add Todo Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="col-12 col-md-4">
            <input
              type="date"
              className="dateInput"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
          <div className="col-12 col-md-2">
            <button
              type="button"
              className="btn btn-success w-100"
              onClick={handleAdd}
            >
              <MdAddCircleOutline />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Input;
