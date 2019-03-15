import { useState, useEffect } from "react";

export default function useUser(Authentication, setApp) {
  const [user, setUser] = useState({ uid: "", email: "", hasAuth: false });

  useEffect(() => {
    async function fetchUserInfo() {
      const hasAuth = await Authentication.checkAuth();

      if (hasAuth) {
        const { uid, email } = Authentication.getUserInfo();
        setUser({ hasAuth, uid, email });
      }

      setApp(state => ({ ...state, isLoading: false }));
    }

    fetchUserInfo();
  }, []); // eslint-disable-line

  return [user, setUser];
}
