import React from "react";
import { useEffect } from "react";
import { supabase } from "../api-supabase/Supabase";
import { useNavigate } from "react-router-dom";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";
import { useState } from "react";

const Home = () => {
  const [showTasksDone, setShowTasksDone] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!supabase.auth.user()) navigate("/login");
  }, [navigate]);

  return (
    <div className="row pt-4">
      <TaskForm />

      <div className="col-md-4 offset-md-4">
        <header className="d-flex justify-content-between my-3">
          <span className="h4">{`Tareas ${!showTasksDone ? "pedientes" : "hechas"}`}</span>
          <button
            onClick={() => setShowTasksDone(!showTasksDone)}
            className = "btn btn-dark btn-sm"
          >{`Mostrar tareas ${showTasksDone ? "pedientes" : "hechas"}`}</button>
        </header>
        <TaskList done={showTasksDone} />
      </div>
    </div>
  );
};

export default Home;
