import React, { Component } from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import about1 from "../assets/images/about-1-2.jpg";
export default class AboutTwo extends Component {
  constructor() {
    super();
    this.state = {
      startCounter: false
    };
  }

  onVisibilityChange = (isVisible) => {
    if (isVisible) {
      this.setState({ startCounter: true });
    }
  };

  render() {
    return (
      <section id ="abouttwo" className="about-two">
        <div className="container">
          <div className="row">
            <div className="col-xl-6">
              <div className="about-two__content">
                <div className="block-title text-left">
                  <h2 className="block-title__title">
                    Fast Tracking Prisoners <br />
                    Careers and Lives
                  </h2>
                </div>
                <p className="about-two__text">
                We are working to solve the mass incarceration crisis by offering
                 life-changing access to freelance tech career opportunities. We aim to help People
                  impacted by the mass incarceration crisis by capitalising on the digital skills gap to
                   teach them google technologies! We're also aiming to delve beyond this by giving participants
                    the necessary soft skills to take on a technical career, as well as the personal 
                    advice and support of a Google employee.
               
                </p>
                <div className="about-two__single-wrap">
                  <div className="about-two__single">
                    <div className="about-two__single-icon">
                      <i className="kipso-icon-web-programming"></i>
                    </div>
                    <div className="about-two__single-content">
                      <p className="about-two__single-text">
                        Engage with Googlers as Mentors
                      </p>
                    </div>
                  </div>
                  <div className="about-two__single">
                    <div className="about-two__single-icon">
                      <i className=" kipso-icon-training"></i>
                    </div>
                    <div className="about-two__single-content">
                      <p className="about-two__single-text">
                        Track Progress Holistically
                      </p>
                    </div>
                    
                  </div>
                  <div className="about-two__single">
                    <div className="about-two__single-icon">
                      <i className="kipso-icon-knowledge"></i>
                    </div>
                    <div className="about-two__single-content">
                      <p className="about-two__single-text">
                        Enhance Digital Career Skills
                      </p>
                    </div>
                    
                  </div>
                </div>
                <a href="#calltoactionthree" className="thm-btn">
                  Still Curious?
                </a>
              </div>
            </div>
            <div className="col-xl-6 d-flex justify-content-xl-end justify-content-sm-center">
              <div className="about-two__image">
                <span className="about-two__image-dots"></span>
                <img src={about1} alt="" />
                <div className="about-two__count">
                  <div className="about-two__count-text">
                    Reduce the
                    <span className="counter">
                      <VisibilitySensor
                        onChange={this.onVisibilityChange}
                        offset={{ top: 10 }}
                        delayedCall
                      >
                        <CountUp suffix = {"%"}end={this.state.startCounter ? 77 : 0} />
                      </VisibilitySensor>
                      
                    </span>
                    Rearrest rate
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
