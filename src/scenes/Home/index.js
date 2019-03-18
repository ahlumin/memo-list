import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames/bind";
import style from "./style.scss";
import { Header, Loading, Record, Field } from "components";
import { useDate, useRecords } from "hooks";
import { DAO } from "services";
const cx = classnames.bind(style);

function Home({ user }) {
  const [date, onPrevious, onNext, onCurrent] = useDate();
  const { year, month } = date;
  const { email } = user;
  const [records, onToggleField, onAddRecord] = useRecords(
    DAO,
    email,
    year,
    month
  );

  return (
    <>
      <Header
        date={date}
        onPrevious={onPrevious}
        onNext={onNext}
        onCurrent={onCurrent}
      />
      <div className={cx("main")}>
        <Field
          email={email}
          year={year}
          month={month}
          date={date}
          isShowField={records.isShowField}
          onAddRecord={onAddRecord}
        />

        <>
          {records.isUpdating ? (
            <Loading />
          ) : (
            records.ids.map(id => <Record key={id} record={records[id]} />)
          )}
        </>

        <a className={cx("add")} onClick={onToggleField}>
          +
        </a>
      </div>
    </>
  );
}

Home.propTypes = {
  user: PropTypes.shape({
    email: PropTypes.string.isRequired
  })
};

export default Home;
