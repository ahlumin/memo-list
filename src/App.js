import React from "react";
import { Home, SignIn } from "scenes";
import { Authentication } from "services";
import { useUser, useAppState } from "hooks";

export default function App() {
  const [app, setApp] = useAppState();
  const [user, setUser] = useUser(Authentication, setApp);

  function renderPage(app, user) {
    if (user.hasAuth) {
      return <Home app={app} user={user} setApp={setApp} setUser={setUser} />;
    }
    return (
      <SignIn
        isCloseLogInPop={app.isCloseLogInPop}
        setApp={setApp}
        setUser={setUser}
      />
    );
  }

  return app.isLoading ? <div>Loading la</div> : renderPage(app, user);
}
