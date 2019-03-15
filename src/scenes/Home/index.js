import React, { useEffect } from "react";
import PropTypes from "prop-types";
import classnames from "classnames/bind";
import style from "./style.scss";
import { Header, Loading, Record, Field } from "components";
import { useDate, useRecords, useInput } from "hooks";
import { DAO } from "services";
const cx = classnames.bind(style);

function Home({ app, user, setApp }) {
  const [records, setRecords] = useRecords();
  const [date, setDate] = useDate();
  const [day, setDay] = useInput(date.today.getDate());
  const [consume, setConsume] = useInput(0);
  const [isCredit, setIsCredit] = useInput(false);
  const { year, month } = date;
  const { email } = user;
  const { isFetching, isShowInput } = app;

  useEffect(() => {
    setApp(state => ({ ...state, isFetching: true }));

    DAO.selectRecords(email, year, month).then(result => {
      setRecords(result);
      setApp(state => ({ ...state, isFetching: false }));
    });
  }, [email, year, month]);

  function onToggleInput() {
    setApp(state => ({ ...state, isShowInput: !state.isShowInput }));
  }

  function onSubmit() {
    setApp(state => ({ ...state, isFetching: true }));

    DAO.addRecord(email, year, month, day, consume, isCredit)
      .then(result => {
        setRecords(state => {
          const ids = state.ids.slice();
          ids.push(result.id);

          return {
            ...state,
            [result.id]: {
              year,
              month,
              day,
              isCredit,
              consume
            },
            ids
          };
        });
        setApp(state => ({ ...state, isFetching: false, isShowInput: false }));
      })
      .catch(error => {
        console.log("error in Field", error);
        alert("oops! record added fail");
      });
  }

  return (
    <>
      <Header date={date} setDate={setDate} />
      <div className={cx("main")}>
        <Field
          day={day}
          consume={consume}
          isCredit={isCredit}
          setDay={setDay}
          setConsume={setConsume}
          setIsCredit={setIsCredit}
          isShowInput={isShowInput}
          onSubmit={onSubmit}
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
