import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames/bind";
import style from "./style.scss";
const cx = classnames.bind(style);

function Field({
  day,
  consume,
  isCredit,
  isShowInput,
  setDay,
  setConsume,
  setIsCredit,
  onSubmit
}) {
  return (
    <div className={cx("field", { show: isShowInput })}>
      <input type="number" value={day} onChange={e => setDay(e.target.value)} />
      <input
        type="number"
        value={consume}
        onChange={e => setConsume(e.target.value)}
      />
      <input
        type="checkbox"
        value={isCredit}
        onChange={e => setIsCredit(e.target.checked)}
      />

      <a
        onClick={e => {
          e.preventDefault();
          onSubmit();
        }}
      >
        Add
      </a>
    </div>
  );
}

Field.propTypes = {
  day: PropTypes.number.isRequired,
  consume: PropTypes.number.isRequired,
  isCredit: PropTypes.bool.isRequired,
  isShowInput: PropTypes.bool.isRequired,
  setDay: PropTypes.func.isRequired,
  setConsume: PropTypes.func.isRequired,
  setIsCredit: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default Field;
