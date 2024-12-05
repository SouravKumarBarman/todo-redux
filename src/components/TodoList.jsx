import { useSelector } from "react-redux";
import Todos from "./Todos";

export default function TodoList() {
    const tasks = useSelector((state) => state.todos);

    return (
      <div>
        {tasks.length > 0 ? (
          tasks.map((task) => <Todos key={task.id} task={task} />)
        ) : (
          <p>No tasks available</p>
        )}
      </div>
    );
}