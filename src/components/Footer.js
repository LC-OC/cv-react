import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <ul>
        <Link
          to={{
            pathname: `/error`,
          }}
          className="link-footer"
        >
          <li>Page Error 404</li>
        </Link>
        <Link
          to={`https://github.com/LC-OC?tab=repositories`}
          className="link-footer"
        >
          <li>GitHub</li>
        </Link>
        <li>© LC CV 2023</li>
      </ul>
    </footer>
  );
};

export default Footer;
