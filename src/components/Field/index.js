import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames/bind";
import style from "./style.scss";
import { useInput, useAddRecord } from "hooks";
import { DAO } from "services";
const cx = classnames.bind(style);

function Field({ email, year, month, date, isShowInput, setApp, setRecords }) {
  const [day, setDay] = useInput(date.today.getDate());
  const [consume, setConsume] = useInput(0);
  const [isCredit, setIsCredit] = useInput(false);
  const onSubmit = useAddRecord(
    email,
    year,
    month,
    day,
    consume,
    isCredit,
    setApp,
    setRecords,
    DAO
  );

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

      <a onClick={onSubmit}>Add</a>
    </div>
  );
}

Field.propTypes = {
  email: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  month: PropTypes.number.isRequired,
  date: PropTypes.object.isRequired,
  isShowInput: PropTypes.bool.isRequired,
  setApp: PropTypes.func.isRequired,
  setRecords: PropTypes.func.isRequired
};

export default Field;
