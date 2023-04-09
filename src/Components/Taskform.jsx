import React, { useContext, useState } from "react";
import { useTasks } from "./Myprovider";

const TaskForm = () => {
  const [task, setTask] = useState("");
  const { addTasks } = useTasks();

  const submit = (e) => {
    e.preventDefault();
    addTasks(task);
    setTask("");
  };

  return (
    <>
      <form onSubmit={submit}>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button>Add</button>
      </form>
    </>
  );
};

export default TaskForm;