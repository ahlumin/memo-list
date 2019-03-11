import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames/bind";
import style from "./style.scss";
const TODAY = new Date();

const cx = classnames.bind(style);

export default class Home extends React.Component {
  static propTypes = {
    uid: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired
  };

  state = {
    year: TODAY.getFullYear(),
    month: TODAY.getMonth + 1,
    records: []
  };

  render() {
    const { email, uid } = this.props;

    return (
      <div className={cx("main")}>
        From App Yo!
        <p>uid: {uid}</p>
        <p>email: {email}</p>
      </div>
    );
  }
}
