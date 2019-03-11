import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames/bind";
import style from "./style.scss";
import { Authentication, DAO } from "services";
const cx = classnames.bind(style);

export default class SignIn extends React.Component {
  static propTypes = {
    onSignIn: PropTypes.func.isRequired
  };

  state = {
    hadClosedPopUp: false
  };

  componentDidMount() {
    this.handleClick();
  }

  handleClick = async () => {
    const { onSignIn } = this.props;

    try {
      const signInResult = await Authentication.signIn();
      const { uid, email } = signInResult.user;
      const hasUser = await DAO.checkUserExist(email);

      if (hasUser === false) {
        await DAO.registerUser(uid, email);
      }

      onSignIn(uid, email);
    } catch (error) {
      this.setState({
        hadClosedPopUp: true
      });
    }
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
