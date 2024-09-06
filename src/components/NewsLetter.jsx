import React from "react";
import "./NewsLetter.css";

const NewsLetter = () => {
  return (
    <section class="newsletter">
      <div class="content">
        <h2>Sign Up for Our Newsletter</h2>
        <p>
          Join for event updates and uplifting
          <span> spiritual reflections.</span>
        </p>
      </div>

      <div class="email">
        <input type="text" placeholder="email: jondoe@email.com" />
        <button className="button">Sign Up</button>
      </div>
    </section>
  );
};

export default NewsLetter;
