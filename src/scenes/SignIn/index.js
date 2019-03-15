import React, { useEffect, useCallback } from "react";
import PropTypes from "prop-types";
import classnames from "classnames/bind";
import style from "./style.scss";
import { Authentication, DAO } from "services";
const cx = classnames.bind(style);

function SignIn({ isCloseLogInPop, setApp, setUser }) {
  const onSignIn = useCallback(() => {
    (async () => {
      try {
        const signInResult = await Authentication.signIn();
        const { uid, email } = signInResult.user;
        const hasUser = await DAO.checkUserExist(email);

        if (hasUser === false) {
          await DAO.registerUser(uid, email);
        }

        setUser({ hasAuth: true, uid, email });
      } catch (error) {
        // TODO: should be refactored by switch case syntax with every error type;
        setApp(state => ({ ...state, isCloseLogInPop: true }));
      }
    })();
  }, [setApp, setUser]);

  useEffect(() => {
    onSignIn();
  }, []); // eslint-disable-line

  return (
    <div className={cx("sign-in")}>
      <h1>Please sign in first</h1>
      <span>
        If you see no any pop-up window, please allow the pop-up on the right of
        the URL bar.
      </span>

      {isCloseLogInPop && <button onClick={onSignIn}>sign in</button>}
    </div>
  );
}

SignIn.propTypes = {
  isCloseLogInPop: PropTypes.bool.isRequired,
  setApp: PropTypes.func.isRequired,
  setUser: PropTypes.func.isRequired
};

export default SignIn;
