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
      const { uid, email } = Authentication.getUserInfo();
      setUser({ hasAuth, uid, email });
      setApp({ isLoading: false });
    }

    fetchUserInfo();
  }, []);

  function switchPage(hasAuth, uid, email) {
    switch (hasAuth) {
      case true:
        return <Home uid={uid} email={email} />;
      case false:
        return (
          <SignIn
            onSignIn={(uid, email) => {
              setUser({ hasAuth: true, uid, email });
            }}
          />
        );
    }
  }

  return app.isLoading ? (
    <div>Loading la</div>
  ) : (
    switchPage(user.hasAuth, user.uid, user.email)
  );
}
