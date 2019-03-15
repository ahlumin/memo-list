import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames/bind";
import style from "./style.scss";
import { useInput, useAddRecord } from "hooks";
import { DAO } from "services";
const cx = classnames.bind(style);

function Field({ email, year, month, date, isShowField, setRecords }) {
  const [day, onDayChange] = useInput(date.today.getDate());
  const [consume, onConsumeChange] = useInput(0);
  const [isCredit, onCreditChange] = useInput(false);
  const onSubmit = useAddRecord(
    email,
    year,
    month,
    parseInt(day),
    parseInt(consume),
    isCredit,
    setRecords,
    DAO
  );

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
  email: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  month: PropTypes.number.isRequired,
  date: PropTypes.shape({
    year: PropTypes.number.isRequired,
    month: PropTypes.number.isRequired
  }),
  isShowField: PropTypes.bool.isRequired,
  setRecords: PropTypes.func.isRequired
};

export default Field;
