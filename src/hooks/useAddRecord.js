import { useCallback } from "react";

/**
 * used for an add record event
 * @param {string} email
 * @param {number} year
 * @param {number} month
 * @param {number} day
 * @param {number} consume
 * @param {bool} isCredit
 * @param {function} setApp
 * @param {function} setRecords
 * @param {object} DAO
 */
export default function useAddRecord(
  email,
  year,
  month,
  day,
  consume,
  isCredit,
  setApp,
  setRecords,
  DAO
) {
  return useCallback(() => {
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
        console.error("error in Field", error);
        alert("oops! record added fail");
      });
  }, [DAO, consume, day, email, isCredit, month, setApp, setRecords, year]);
}
