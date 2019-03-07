import React from "react";
import classnames from "classnames/bind";
import style from "./style.scss";
const cx = classnames.bind(style);

export default class SignIn extends React.Component {
  render() {
    return (
      <div className={cx("sign-in")}>
        <h1>Please sign in first</h1>
        <span>
          If you see no any pop-up window, please allow the pop-up on the right
          of the URL bar.
        </span>
      </div>
    );
  }
}
