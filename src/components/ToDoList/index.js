import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { todoactions } from "../../actions";

const ToDoList = ({ todo }) => {
  const dispatch = useDispatch();
  const { updateTask } = bindActionCreators(todoactions, dispatch);

  return (
    <div className=" mt-5 row ">
      <div className=" col-5">
        <div className="input-group">
          {todo.status && (
            <label
              htmlFor=""
              className="form-control"
              style={{ textDecorationLine: "line-through" }}
            >
              {todo.task}
            </label>
          )}

          {!todo.status && (
            <label htmlFor="" className="form-control">
              {todo.task}
            </label>
          )}

          <input type="checkbox" onClick={() => updateTask(todo)} />
        </div>
      </div>
    </div>
  );
};

export default ToDoList;
