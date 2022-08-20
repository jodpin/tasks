import "./App.css";
import Login from "./pages/Login";
import Home from "./pages/Home";
import { Routes, Route, useNavigate } from "react-router-dom";
import NotFound from "./pages/NotFound";
import { useEffect } from "react";
import { supabase } from "../src/api-supabase/Supabase";
import { TaskContextProvider } from "./context/TaskContext";
import { Navbar } from "./components/Navbar";

function App() {
  const navigate = useNavigate();
  useEffect(() => {
    supabase.auth.onAuthStateChange((event, session) => {
      console.log(event, session);
      if (!session) {
        navigate("/login");
      } else {
        navigate("/");
      }
    });
  }, [navigate]);
  return (
    <div className="App">
      <TaskContextProvider>
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/Login" element={<Login />} />
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </TaskContextProvider>
    </div>
  );
}

export default App;
