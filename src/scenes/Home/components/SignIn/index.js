import React from "react";
import classnames from "classnames/bind";
import style from "./style.scss";
import { Authentication } from "services";
const cx = classnames.bind(style);

export default class SignIn extends React.Component {
  state = {
    hadClosedPopUp: false
  };

  componentDidMount() {
    this.handleClick();
  }

  handleClick = () => {
    Authentication.signIn()
      .then(result => {
        const { uid, email } = result.user;
      })
      .catch(error => {
        this.setState({
          hadClosedPopUp: true
        });
      });
  };

  render() {
    const { hadClosedPopUp } = this.state;

    return (
      <div className={cx("sign-in")}>
        <h1>Please sign in first</h1>
        <span>
          If you see no any pop-up window, please allow the pop-up on the right
          of the URL bar.
        </span>

        {hadClosedPopUp && <button onClick={this.handleClick}>sign in</button>}
      </div>
    );
  }
}
