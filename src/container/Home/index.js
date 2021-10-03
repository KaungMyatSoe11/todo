/* eslint-disable array-callback-return */
import { useSelector } from "react-redux";
import ToDoForm from "../../components/ToDoForm";
import ToDoList from "../../components/ToDoList";

const Home = () => {
  const state = useSelector((state) => state);
  console.log(state.todo);

  return (
    <div className="container">
      <ToDoForm />
      {state.todo.length > 0 ? (
        <>
          {state.todo.map((item) => (
            <ToDoList todo={item} key={item.text} />
          ))}
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default Home;
