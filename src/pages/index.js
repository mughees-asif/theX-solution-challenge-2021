import React from "react";
import Layout from "../components/Layout";
import Topbar from "../components/Topbar";
import NavOne from "../components/NavOne";
import SliderOne from "../components/SliderOne";
import Footer from "../components/Footer";
import AboutTwo from "../components/AboutTwo";
import CourseOne from "../components/CourseOne";
import VideoTwo from "../components/VideoTwo";
import CountdownKipso from "../components/CountdownKipso";
import CourseCatOne from "../components/CourseCatOne";
import CallToActionThree from "../components/CallToActionThree";
import BrandsTwo from "../components/BrandsTwo";
import BlogTwo from "../components/BlogTwo";
import CallToActionFour from "../components/CallToActionFour";
import SubscribeOne from "../components/SubscribeOne";
import SignIn from "../components/SignIn";
import DefaultLayout from "../layouts/Default";
import BlogOverview from "../views/BlogOverview";
import BlogPosts from "../views/BlogPosts";
import routes from "../routes.js";
import withTracker from "../withTracker";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";



const HomePage = () => (
  <Router>
    <Switch>
      <Layout pageTitle="theX | Serving Real Justice">
        {/* {routes.map((route, index) => {
          return (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              component={withTracker(props => {
                return (
                  <route.layout {...props}>
                    <route.component {...props} />
                  </route.layout>
                );
              })}
            />
          );
        })} */}
        <Route path="/blog-posts">
          <DefaultLayout>
            <BlogPosts />
          </DefaultLayout>
        </Route>
        <Route path="/blog-overview">
          <DefaultLayout>
            <BlogOverview />
          </DefaultLayout>
        </Route>
        <Route path="/signin">
          <Topbar />
          <NavOne />
          <SignIn />
          <Footer />
        </Route>
        <Route exact path="/">
          <Topbar />
          <NavOne />
          <SliderOne />
          <AboutTwo />
          <CourseOne />
          {/* <VideoTwo />
          <CountdownKipso /> */}
          {/* <CourseCatOne /> */}
          <CallToActionThree />
          <BrandsTwo />
          <BlogTwo />
          <CallToActionFour />
          <SubscribeOne />
          <Footer />
        </Route>
      </Layout>
    </Switch>
  </Router>
);

export default HomePage;
