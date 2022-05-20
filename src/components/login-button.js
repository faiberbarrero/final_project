import React from "react";
import { withAuth0 } from "@auth0/auth0-react";
import '../index.css';

class LoginButton extends React.Component {
  render() {
    const { loginWithRedirect } = this.props.auth0;

    return (
      <button type="button"
        class="login-button"
        onClick={() => loginWithRedirect()}
      >
        Log In
      </button>
    );
  }
}

export default withAuth0(LoginButton);
