import React from "react";
import classnames from "classnames/bind";
import style from "./style.scss";
import SignIn from "./components/SignIn";
import { Authentication, DAO } from "services";

const cx = classnames.bind(style);

export default class Home extends React.Component {
  state = {
    uid: "",
    email: "",
    records: [],
    isInitializing: true,
    hasAuth: false
  };

  componentDidMount() {
    Authentication.checkAuth().then(hasAuth => {
      this.handleDoneAuth(hasAuth, false);

      if (hasAuth) {
        const user = Authentication.getUserInfo();
        this.setState({
          uid: user.uid,
          email: user.email
        });
      }
    });
  }

  handleDoneAuth = (hasAuth, isInitializing) => {
    this.setState({
      hasAuth,
      isInitializing
    });
  };

  render() {
    const { email, uid, isInitializing, hasAuth } = this.state;

    return isInitializing ? (
      <div className={cx("main")}>LOADING...</div>
    ) : hasAuth ? (
      <div className={cx("main")}>
        From App Yo!
        <span>uid: {uid}</span>
        <span>email: {email}</span>
      </div>
    ) : (
      <SignIn onDone={this.handleDoneAuth} />
    );
  }
}
