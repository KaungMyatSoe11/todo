import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { todoactions } from "../../actions";

const ToDoForm = () => {
  const dispatch = useDispatch();
  const { addTask } = bindActionCreators(todoactions, dispatch);
  const [task, setTask] = useState("");
  const txtTask = useRef();

  const add = (e) => {
    e.preventDefault();
    if (task !== "") {
      addTask({ text: task, status: false });
      txtTask.current.focus();
      setTask("");
    }
  };
  return (
    <form>
      <div className="mt-3 row justify-content-center">
        <div className="col-5">
          <input
            type="text"
            className="form-control"
            placeholder="Task"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            ref={txtTask}
          ></input>
        </div>
        <div className="col-3">
          <button className="btn btn-success" onClick={add}>
            Add
          </button>
        </div>
      </div>
    </form>
  );
};

export default ToDoForm;
