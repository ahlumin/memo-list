import React, { useState } from "react";
import { Home, SignIn } from "scenes";
import { Authentication, DAO } from "services";
import { useUser } from "hooks";

export default function App() {
  const [isInitializing, setIsInitializing] = useState(true);
  const [user, onSignIn] = useUser(Authentication, DAO, setIsInitializing);

  function renderPage(user) {
    if (user.hasAuth) {
      return <Home user={user} />;
    }
    return <SignIn user={user} onSignIn={onSignIn} />;
  }

  return isInitializing ? <div>Loading la</div> : renderPage(user);
}
