import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames/bind";
import style from "./style.scss";

const cx = classnames.bind(style);

function Home({ uid, email }) {
  return (
    <div className={cx("main")}>
      From App Yo!
      <p>uid: {uid}</p>
      <p>email: {email}</p>
    </div>
  );
}

Home.propTypes = {
  uid: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired
};

export default Home;
