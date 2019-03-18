import { useState, useEffect, useCallback } from "react";

export default function useUser(Authentication, DAO, setIsInitializing) {
  const [user, setUser] = useState({
    uid: "",
    email: "",
    hasAuth: false,
    isShowSignInButton: false
  });

  const onSignIn = useCallback(() => {
    (async () => {
      try {
        const signInResult = await Authentication.signIn();
        const { uid, email } = signInResult.user;
        const hasUser = await DAO.checkUserExist(email);

        if (hasUser === false) {
          await DAO.registerUser(uid, email);
        }
        setUser(state => ({ ...state, hasAuth: true, uid, email }));
      } catch (error) {
        // TODO: should be refactored by switch case syntax with every error type;
        setUser(state => ({ ...state, isShowSignInButton: true }));
      }
    })();
  }, [Authentication, DAO]);

  useEffect(() => {
    async function fetchUserInfo() {
      const hasAuth = await Authentication.checkAuth();

      if (hasAuth) {
        const { uid, email } = Authentication.getUserInfo();
        setUser(state => ({ ...state, hasAuth, uid, email }));
      } else {
        onSignIn();
      }

      setIsInitializing(false);
    }

    fetchUserInfo();
  }, []); // eslint-disable-line

  return [user, onSignIn, setUser];
}
