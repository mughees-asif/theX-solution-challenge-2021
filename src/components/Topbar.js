import React, { Component } from "react";

class Topbar extends Component {
  render() {
    return (
      <div className="topbar-one">
        <div className="container">
          {/* <div className="topbar-one__left">
            <a href="#none">needhelp@kipso.com</a>
            <a href="#none">444 888 0000</a>
          </div> */}
          <div className="topbar-one__right">
            <a href="#none">Login</a>
            <a href="#none">Register</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Topbar;
