import { useCallback } from "react";

export default function useSignInCb(Authentication, DAO, setApp, setUser) {
  return useCallback(() => {
    (async () => {
      try {
        const signInResult = await Authentication.signIn();
        const { uid, email } = signInResult.user;
        const hasUser = await DAO.checkUserExist(email);

        if (hasUser === false) {
          await DAO.registerUser(uid, email);
        }

        setUser({ hasAuth: true, uid, email });
      } catch (error) {
        // TODO: should be refactored by switch case syntax with every error type;
        setApp(state => ({ ...state, isCloseLogInPop: true }));
      }
    })();
  });
}
