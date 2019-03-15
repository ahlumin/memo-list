import React, { useEffect, useCallback } from "react";
import PropTypes from "prop-types";
import classnames from "classnames/bind";
import style from "./style.scss";
import { Header, Loading, Record, Field } from "components";
import { useDate, useRecords } from "hooks";
import { DAO } from "services";
const cx = classnames.bind(style);

function Home({ app, user, setApp }) {
  const [records, setRecords] = useRecords();
  const [date, setDate] = useDate();
  const { year, month } = date;
  const { email } = user;
  const { isFetching, isShowInput } = app;

  useEffect(() => {
    setApp(state => ({ ...state, isFetching: true }));

    DAO.selectRecords(email, year, month).then(result => {
      setRecords(result);
      setApp(state => ({ ...state, isFetching: false }));
    });
  }, [email, year, month, setApp, setRecords]);

  const onToggleInput = useCallback(() => {
    setApp(state => ({ ...state, isShowInput: !state.isShowInput }));
  }, [setApp]);

  return (
    <>
      <Header date={date} setDate={setDate} />
      <div className={cx("main")}>
        <Field
          email={email}
          year={year}
          month={month}
          date={date}
          isShowInput={isShowInput}
          setApp={setApp}
          setRecords={setRecords}
        />

        {isFetching ? (
          <Loading />
        ) : (
          <div>
            {records.ids.map(id => (
              <Record key={id} record={records[id]} />
            ))}
          </div>
        )}

        <a className={cx("add")} onClick={onToggleInput}>
          +
        </a>
      </div>
    </>
  );
}

Home.propTypes = {
  app: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  setApp: PropTypes.func.isRequired
};

export default Home;
