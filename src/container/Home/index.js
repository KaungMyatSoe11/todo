/* eslint-disable array-callback-return */
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { todoactions } from "../../actions";
import ToDoForm from "../../components/ToDoForm";
import ToDoList from "../../components/ToDoList";
import gettodos from "../../utils/api/gettodos";

const Home = () => {
  const state = useSelector((state) => state);
  console.log(state.todo);
  const dispatch = useDispatch();
  const {  loadTask } = bindActionCreators(todoactions, dispatch);

  useEffect(() => {
    loadTask();
  }, []);

  return (
    <div className="container">
      <ToDoForm />
      {state.todo.length > 0 ? (
        <>
          {state.todo.map((item) => (
            <ToDoList todo={item} key={item._id} />
          ))}
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default Home;
