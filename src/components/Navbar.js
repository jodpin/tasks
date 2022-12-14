import React from "react";
import { Link } from "react-router-dom";
import {supabase} from "../api-supabase/Supabase"

export const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
        <div className="container">
          <Link className="navbar-brand" to="/">
            Supabase React
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/login"
                  onClick={async() => await supabase.auth.signOut()}
                >
                  Logout
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
