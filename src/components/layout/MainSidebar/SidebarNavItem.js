import React from "react";
import PropTypes from "prop-types";
import { BrowserRouter as Router, NavLink as RouteNavLink, Link } from "react-router-dom";
import { NavItem, NavLink } from "shards-react";

const SidebarNavItem = ({ item }) => (
  <Link to="/blog-posts">
  {/* <Router> */}
    <NavItem>
      <NavLink tag={RouteNavLink} to={item.to}>
        {item.htmlBefore && (
          <div
            className="d-inline-block item-icon-wrapper"
            dangerouslySetInnerHTML={{ __html: item.htmlBefore }}
          />
        )}
        {item.title && <span>{item.title}</span>}
        {item.htmlAfter && (
          <div
            className="d-inline-block item-icon-wrapper"
            dangerouslySetInnerHTML={{ __html: item.htmlAfter }}
          />
        )}
      </NavLink>
    </NavItem>
  {/* </Router> */}
  </Link>
);

SidebarNavItem.propTypes = {
  /**
   * The item object.
   */
  item: PropTypes.object
};

export default SidebarNavItem;
