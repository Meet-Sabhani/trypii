import React from "react";
import "./SignUpStyle.css";
import Navbar from "../Components/Navbar";

const SignUp = () => {
  return (
    <>
      <Navbar />
      <div className="sing-flex">
        <div className="SignUp">
          <h1>Sign Up here</h1>
          <form action="">
            <input type="text" placeholder="Your Name" />
            <input type="text" placeholder="Mobile Number" />
            <button>Submit</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
