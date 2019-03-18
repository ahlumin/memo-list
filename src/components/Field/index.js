import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames/bind";
import style from "./style.scss";
import { useInput } from "hooks";
const cx = classnames.bind(style);

function Field({ date, isShowField, onAddRecord }) {
  const [day, onDayChange] = useInput(date.today.getDate());
  const [consume, onConsumeChange] = useInput(0);
  const [isCredit, onCreditChange] = useInput(false);
  const onSubmit = onAddRecord(parseInt(day), parseInt(consume), isCredit);

  return (
    <div className={cx("field", { show: isShowField })}>
      <input type="number" value={day} onChange={onDayChange} />
      <input type="number" value={consume} onChange={onConsumeChange} />
      <input type="checkbox" value={isCredit} onChange={onCreditChange} />

      <a onClick={onSubmit}>Add</a>
    </div>
  );
}

Field.propTypes = {
  date: PropTypes.shape({
    year: PropTypes.number.isRequired,
    month: PropTypes.number.isRequired
  }),
  isShowField: PropTypes.bool.isRequired,
  onAddRecord: PropTypes.func.isRequired
};

export default Field;
