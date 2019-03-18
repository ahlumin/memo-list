import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames/bind";
import style from "./style.scss";
const cx = classnames.bind(style);

function SignIn({ user, onSignIn }) {
  const { isShowSignInButton } = user;

  return (
    <div className={cx("sign-in")}>
      <h1>Please sign in first</h1>
      <span>
        If you see no any pop-up window, please allow the pop-up on the right of
        the URL bar.
      </span>

      {isShowSignInButton && <button onClick={onSignIn}>sign in</button>}
    </div>
  );
}

SignIn.propTypes = {
  user: PropTypes.shape({
    isShowSignInButton: PropTypes.bool.isRequired
  }),
  onSignIn: PropTypes.func.isRequired
};

export default SignIn;
