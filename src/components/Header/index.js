import React, { useCallback } from "react";
import PropTypes from "prop-types";
import classnames from "classnames/bind";
import style from "./style.scss";
const cx = classnames.bind(style);

function Header({ date, setDate }) {
  const { year, month } = date;
  const onPrevious = useCallback(
    e => {
      e.preventDefault();
      if (month === 1) {
        setDate(state => ({ ...state, year: year - 1, month: 12 }));
        return;
      }
      setDate(state => ({ ...state, month: month - 1 }));
    },
    [year, month]
  );

  const onNext = useCallback(
    e => {
      e.preventDefault();
      if (month === 12) {
        setDate(state => ({ ...state, year: year + 1, month: 1 }));
        return;
      }
      setDate(state => ({ ...state, month: month + 1 }));
    },
    [year, month]
  );

  const onCurrent = useCallback(() => {
    setDate(state => ({
      ...state,
      year: state.currentYear,
      month: state.currentMonth
    }));
  });

  return (
    <div className={cx("header")}>
      <a className={cx("previous")} onClick={onPrevious} />
      <span className={cx("text")} onClick={onCurrent}>
        {date.year}-{date.month}
      </span>
      <a className={cx("next")} onClick={onNext} />
    </div>
  );
}

Header.propTypes = {
  date: PropTypes.object.isRequired,
  setDate: PropTypes.func.isRequired
};

export default Header;
