import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../Components/NavBar";

const Main = () => {
  return (
    <>
      <NavBar />
      <div className="container text-center">
        <h2>This is the main page</h2>
        <div className="row">
          <div className="col-sm-6">
            <h3>Lesson #</h3>
            <Link to="/activities">
              <button>Start</button>
            </Link>
          </div>
          <div className="col-sm-6">
            <h3>Progress area</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
