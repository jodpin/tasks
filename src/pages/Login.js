import React from "react";
import { useState, useEffect } from "react";
import { supabase } from "../api-supabase/Supabase";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await supabase.auth.signIn({ email });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (supabase.auth.user()) navigate("/");
  }, [navigate]);

  return (
    <div className="row pt-4">
      <div className="col-md-4 offset-md-4">
        <form onSubmit={handleSubmit} className="card car-body p-2">
          <input
            type="email"
            name="enail"
            placeholder="youremail@site.com"
            onChange={(e) => setEmail(e.target.value)}
            className="form-control mb-2"
          />
          <button className="btn btn-primary">Send</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
