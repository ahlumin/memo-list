import React from "react";
import classnames from "classnames/bind";
import style from "./style.scss";
import SignIn from "./components/SignIn";
const cx = classnames.bind(style);

export default class Home extends React.Component {
  render() {
    return 1 === 1 ? (
      <div className={cx("main")}>From App Yo.!</div>
    ) : (
      <SignIn />
    );
  }
}
