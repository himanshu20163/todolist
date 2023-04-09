import React from "react";
import TaskForm from "./Components/Taskform";
import TaskList from "./Components/Tasklist";

const App = () => {


  return (
    <>
      <div className="container">
        <h1 className="title">To Do list</h1>
        <TaskForm />
        <TaskList/>
      </div>
    </>
  );
};

export default App;