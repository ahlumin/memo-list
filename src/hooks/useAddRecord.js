import { useCallback } from "react";

/**
 * used for an add record event
 * @param {string} email
 * @param {number} year
 * @param {number} month
 * @param {number} day
 * @param {number} consume
 * @param {bool} isCredit
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
  setRecords,
  DAO
) {
  return useCallback(() => {
    setRecords(state => ({ ...state, isUpdating: true, isShowField: false }));

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
            ids,
            isUpdating: false,
            isShowField: false
          };
        });
      })
      .catch(error => {
        console.error("error in Field", error);
        alert("oops! record added fail");
      });
  }, [DAO, consume, day, email, isCredit, month, setRecords, year]);
}
