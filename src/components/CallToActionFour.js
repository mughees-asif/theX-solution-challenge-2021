import React from "react";
import circleStripe from "../assets/images/circle-stripe-1.png";
import lineStripe from "../assets/images/line-stripe-1.png";
const CallToActionFour = () => {
  return (
    <section className="cta-four">
      <img src={circleStripe} className="cta-four__stripe" alt="" />
      <img src={lineStripe} className="cta-four__line" alt="" />
      <div className="container text-center">
        <div className="block-title">
          <h2 className="block-title__title" >
            Discussions about inclusion and diversity should not be limited to cosmetic 
            variations or binary gender differentiation.
            <br />
            <br />
            - theX Team
          </h2>
        </div>
      </div>
    </section>
  );
};

export default CallToActionFour;