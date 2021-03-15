import React from "react";
import { Helmet } from "react-helmet";
import appleTouch from "../assets/images/favicons/apple-touch-icon.png";
import fav32 from "../assets/images/favicons/favicon-32x32.png";
import fav16 from "../assets/images/favicons/favicon-16x16.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-modal-video/css/modal-video.min.css";
import "../assets/plugins/fontawesome-free-5.11.2-web/css/all.min.css";
import "../assets/plugins/kipso-icons/style.css";
import "../assets/css/animate.min.css";
import "../assets/css/style.css";
import "../assets/css/responsive.css";

const Layout = (props) => {
  return (
    <div>
      <Helmet>
        <title>{props.pageTitle}</title>

        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <link rel="apple-touch-icon" sizes="180x180" href={appleTouch} />
        <link rel="icon" type="image/png" sizes="32x32" href={fav32} />
        <link rel="icon" type="image/png" sizes="16x16" href={fav16} />

        <link
          href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,500i,600,700,800%7CSatisfy&display=swap"
          rel="stylesheet"
        />
        {/* <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous"></link> */}
        {/* <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.bundle.min.js" integrity="sha384-b5kHyXgcpbZJO/tY9Ul7kGkf1S0CWuKcCD38l8YkeH8z8QjE0GmW1gYU5S9FOnJ0" crossorigin="anonymous"></script> */}
      </Helmet>

      <div className="page-wrapper">{props.children}</div>
    </div>
  );
};

export default Layout;
