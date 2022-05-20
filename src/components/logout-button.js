import React from "react";
import { withAuth0 } from "@auth0/auth0-react";

class LogoutButton extends React.Component {
  render() {
    const { logout } = this.props.auth0;

    return (
      <button type="button"
        class="logout-button"
        onClick={() =>
          logout({
            returnTo: window.location.origin,
          })
        }
      >
        Log Out
      </button>
    );
  }
}

export default withAuth0(LogoutButton);