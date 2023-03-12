import React from "react";
import "./qualities.css";

const Qualities = () => {
  return (
    <div className="div-values values-quality">
      <h1> Join Our waiting list </h1>
      <p>   We've got the best and witty convos; our newsletters are the dopest</p>
      <br />

      <br />
      <form className="form-subscribe">
        <div>
            {/* <label>Subscribe to our newsletter</label> */}
        <br/>
        </div>
        <div className="input-n-btn">
            <input
            className="input-subscribe"
            placeholder="Enter your Email Address" 
            />
            <button className="btn-subscribe">Subscribe</button>
        </div>
      </form>
    </div>
  );
};

export default Qualities;
