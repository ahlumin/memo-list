import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames/bind";
import style from "./style.scss";
const cx = classnames.bind(style);

function Header({ date, onPrevious, onNext, onCurrent }) {
  const { year, month } = date;

  return (
    <div className={cx("header")}>
      <a className={cx("previous")} onClick={onPrevious} />
      <span className={cx("text")} onClick={onCurrent}>
        {year}-{month}
      </span>
      <a className={cx("next")} onClick={onNext} />
    </div>
  );
}

Header.propTypes = {
  date: PropTypes.shape({
    year: PropTypes.number.isRequired,
    month: PropTypes.number.isRequired
  }),
  onPrevious: PropTypes.func.isRequired,
  onNext: PropTypes.func.isRequired,
  onCurrent: PropTypes.func.isRequired
};

export default Header;
