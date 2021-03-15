import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

class Topbar extends Component {
  render() {
    return (
      <div className="topbar-one">
        <div className="container">
          {/* <div className="topbar-one__left">
            <a href="#none">needhelp@kipso.com</a>
            <a href="#none">444 888 0000</a>
          </div> */}
          <div className="topbar-one__right" style={{zIndex: '1'}}>
            <Link to="/signin">Enter</Link>{/* <button onClick={() => SignUp()}>Login</button><a href="#none" onClick='() => SignUp()'>Login</a> Link to Application.js */}
            {/*<a href="#none">Register</a> Link to Application.js*/}
          </div>
        </div>
      </div>
    );
  }
}

export default Topbar;
