import React, { useEffect } from "react";
import PropTypes from "prop-types";
import classnames from "classnames/bind";
import style from "./style.scss";
import { Authentication, DAO } from "services";
import useSignInCb from "./hooks/useSignInCb.js";
const cx = classnames.bind(style);

function SignIn({ isCloseLogInPop, setApp, setUser }) {
  const onClick = useSignInCb(Authentication, DAO, setApp, setUser);

  useEffect(() => {
    onClick();
  }, []);

  return (
    <div className={cx("sign-in")}>
      <h1>Please sign in first</h1>
      <span>
        If you see no any pop-up window, please allow the pop-up on the right of
        the URL bar.
      </span>

      {isCloseLogInPop && <button onClick={onClick}>sign in</button>}
    </div>
  );
}

SignIn.propTypes = {
  isCloseLogInPop: PropTypes.bool.isRequired,
  setApp: PropTypes.func.isRequired,
  setUser: PropTypes.func.isRequired
};

export default SignIn;
