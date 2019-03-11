import React from "react";
import { Home, SignIn } from "scenes";
import { Authentication } from "services";

export default class App extends React.Component {
  state = {
    uid: "",
    email: "",
    isLoading: true,
    hasAuth: false
  };

  componentDidMount() {
    (async function(self) {
      const hasAuth = await Authentication.checkAuth();
      const { uid, email } = Authentication.getUserInfo();

      self.setState({
        isLoading: false,
        hasAuth,
        uid,
        email
      });
    })(this);
  }

  handleSignIn = (uid, email) => {
    this.setState({
      uid,
      email
    });
  };

  switchPage = (hasAuth, uid, email) => {
    switch (hasAuth) {
      case true:
        return <Home uid={uid} email={email} />;
      case false:
        return <SignIn onSignIn={this.handleSignIn} />;
    }
  };

  render() {
    const { isLoading, hasAuth, uid, email } = this.state;
    return isLoading ? (
      <div>Loading la</div>
    ) : (
      this.switchPage(hasAuth, uid, email)
    );
  }
}
