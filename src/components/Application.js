import React from "react";
import { Router } from "@reach/router";
import SignIn from "./SignIn";
import Dashboard from "./Dashboard";
import PasswordReset from "./PasswordReset";
function Application() {
  const user = null;
  return (
        user ?
        <Dashboard />
      :
        <Router>
          <SignIn path="/" />
          <PasswordReset path = "passwordReset" />
        </Router>

  );
}
export default Application;