import React from "react";
import { Link } from "react-router-dom";

const LogIn = () => {
  return (
    <section className="login">
      <div className="container">
        Page Log in 
        <br />
        Go back to <Link to="/signup">Sign up</Link>
      </div>
    </section>
  );
};

export default LogIn;
