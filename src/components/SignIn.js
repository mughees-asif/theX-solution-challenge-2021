import React, { useState } from "react";
// import { Link } from "@reach/router";
import ui from "../pages/firebase";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [error, setError] = useState(null);
  const createUserWithEmailAndPasswordHandler = (event, email, password) => {
    event.preventDefault();
    setEmail("");
    setPassword("");
    setDisplayName("");
  };
  const onChangeHandler = event => {
    const { name, value } = event.currentTarget;
    if (name === "userEmail") {
      setEmail(value);
    } else if (name === "userPassword") {
      setPassword(value);
    } else if (name === "displayName") {
      setDisplayName(value);
    }
  };

  // var uiConfig = {
  //   callbacks: {
  //     signInSuccessWithAuthResult: function(authResult, redirectUrl) {
  //       // User successfully signed in.
  //       // Return type determines whether we continue the redirect automatically
  //       // or whether we leave that to developer to handle.
  //       return true;
  //     },
  //     uiShown: function() {
  //       // The widget is rendered.
  //       // Hide the loader.
  //       document.getElementById('loader').style.display = 'none';
  //     }
  //   },
  //   // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
  //   signInFlow: 'popup',
  //   signInSuccessUrl: '<url-to-redirect-to-on-success>',
  //   signInOptions: [
  //     firebase.auth.EmailAuthProvider.PROVIDER_ID
  //   ],
  //   // Terms of service url.
  //   tosUrl: '<your-tos-url>',
  //   // Privacy policy url.
  //   privacyPolicyUrl: '<your-privacy-policy-url>'
  // };

  // // The start method will wait until the DOM is loaded.
  // ui.start('#firebaseui-auth-container', uiConfig);

  return (
      /*
      <div>
        <h1>Welcome to My Awesome App</h1>
        <div id="firebaseui-auth-container"></div>
        <div id="loader">Loading...</div>
      </div>*/
    <div className="mt-8" style={{width: '50%',
    margin: '0 auto'}}>
      <h1 className="text-3xl mb-2 text-center font-bold">Sign Up</h1>
      <div className="border border-blue-400 mx-auto w-11/12 md:w-2/4 rounded py-8 px-4 md:px-8">
        {error !== null && (
          <div className="py-4 bg-red-600 w-full text-white text-center mb-3">
            {error}
          </div>
        )}
        <form className="">
          {/* <label style={{width: '100%', border: '0', margin: '0'}} htmlFor="displayName" className="block">
            Display Name:
          </label>
          <input style={{width: '100%', border: '1'}} 
            type="text"
            className="my-1 p-1 w-full "
            name="displayName"
            value={displayName}
            placeholder="Your Name"
            id="displayName"
            onChange={event => onChangeHandler(event)}
          /> */}
          <label style={{width: '100%',  margin: '0'}} htmlFor="userEmail" className="block">
            Email:
          </label>
          <input style={{width: '100%', border: '1'}} 
            type="email"
            className="my-1 p-1 w-full"
            name="userEmail"
            value={email}
            placeholder="address@gmail.com"
            id="userEmail"
            onChange={event => onChangeHandler(event)}
          />
          <label style={{width: '100%',  margin: '0'}} htmlFor="userPassword" className="block">
            Password:
          </label><br />
          <input style={{width: '100%', border: '1'}} 
            type="password"
            className="mt-1 mb-3 p-1 w-full"
            name="userPassword"
            value={password}
            placeholder="Your Password"
            id="userPassword"
            onChange={event => onChangeHandler(event)}
          /><br />
          </form>
          <div>
            <Link to="/blog-overview" style={{width: '100%', background: '#60c8bf', border: '0', padding: '12px 329px', color: 'white'}}>{/*<button style={{width: '100%', background: '#60c8bf', border: '0'}}
            className="bg-green-400 hover:bg-green-500 w-full py-2 text-white"
            onClick={event => {
              createUserWithEmailAndPasswordHandler(event, email, password);
            }}
          >*/}
            Sign in
          {/* </button> */}</Link>
          </div>
        <p className="text-center my-3">or</p>
        <button  style={{width: '100%', background: '#FC6C24', border: '0'}}
          className="bg-red-500 hover:bg-red-600 w-full py-2 text-white"
        >
          Sign In with Google
        </button>
        <p className="text-center my-3">
          Want in?{" "}
          <Link to="/" className="text-blue-500 hover:text-blue-600">
            Sign up here
          </Link>
        </p>
      </div>
    </div>/**/
  );
};
export default SignIn;