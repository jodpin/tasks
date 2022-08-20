import React from "react";
import { useState } from "react";
import { useTasks } from "../context/TaskContext";

const TaskForm = () => {
  const [task, setTaskName] = useState("");
  const { createTask, adding } = useTasks();

  const handleSubmit = async (e) => {
    e.preventDefault();
    createTask(task);
    console.log(adding);
    setTaskName("");
  };
  return (
    
      <form onSubmit={handleSubmit} className="card card-body w-50">
        <input
          type="text"
          name="taskName"
          placeholder="write a taskName"
          onChange={(e) => setTaskName(e.target.value)}
          value={task}
          className="form-control mb-2"
        />
        <div className="ms-auto">
          <button
            className="btn btn-primary btn-sm"
            disabled={adding}
            type="submit"
          >
            {adding ? "Adding" : "Add"}
          </button>
        </div>
      </form>
   
  );
};

export default TaskForm;
