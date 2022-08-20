import React from "react";
import { useEffect } from "react";
import { useTasks } from "../context/TaskContext";
import TaskCard from "./TaskCard";

const TaskList = ({done =false}) => {
  const { tasks, getTasks, loading } = useTasks();

  useEffect(() => {
    getTasks(done);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [done]);

  const renderTask = () =>{
    if (loading) {
      return <h1>..cargando</h1>;
    } else if (tasks.length === 0) {
      return <h3>no tasks found</h3>;
    } else {
      return (
        <div>
          {tasks.map((task) => (
            <TaskCard task={task} key={task.id}/>
          ))}
        </div>
      );
    }
  }

  return <div>{renderTask()}</div>
};

export default TaskList;
