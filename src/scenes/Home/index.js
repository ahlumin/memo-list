import React from "react";
import classnames from "classnames/bind";
import style from "./style.scss";
import SignIn from "./components/SignIn";
import { Authentication } from "services";

const cx = classnames.bind(style);

export default class Home extends React.Component {
  state = {
    isInitializing: true,
    hasAuth: false
  };

  componentDidMount() {
    Authentication.checkAuth().then(hasAuth => {
      this.setState({
        hasAuth,
        isInitializing: false
      });
    });
  }

  render() {
    const { isInitializing, hasAuth } = this.state;

    return isInitializing ? (
      <div className={cx("main")}>LOADING...</div>
    ) : hasAuth ? (
      <div className={cx("main")}>From App Yo!</div>
    ) : (
      <SignIn />
    );
  }
}
