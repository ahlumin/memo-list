import React, { useEffect } from "react";
import { Home, SignIn } from "scenes";
import { Authentication } from "services";
import { useUser, useAppState } from "hooks";

export default function App() {
  const [user, setUser] = useUser();
  const [app, setApp] = useAppState();

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
  }, [setApp, setUser]);

  function switchPage(app, user) {
    switch (user.hasAuth) {
      case true:
        return <Home app={app} user={user} setApp={setApp} setUser={setUser} />;
      case false:
        return (
          <SignIn
            isCloseLogInPop={app.isCloseLogInPop}
            setApp={setApp}
            setUser={setUser}
          />
        );
    }
  }

  return app.isLoading ? <div>Loading la</div> : switchPage(app, user);
}
