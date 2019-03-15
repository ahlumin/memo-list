import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames/bind";
import style from "./style.scss";
const cx = classnames.bind(style);

function Record({ record }) {
  const { day, consume, isCredit } = record;

  return (
    <div className={cx("record")}>
      <span className={cx("day")}>{day}</span>
      <span className={cx("consume")}>{consume}</span>
      <span className={cx("credit")}>{isCredit ? "YES" : "NO"}</span>
    </div>
  );
}

Record.propTypes = {
  record: PropTypes.shape({
    day: PropTypes.number.isRequired,
    consume: PropTypes.number.isRequired,
    isCredit: PropTypes.bool.isRequired
  })
};

export default Record;
