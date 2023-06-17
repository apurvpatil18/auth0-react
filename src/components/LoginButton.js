import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    !isAuthenticated && (
      <div className="auth-log">
        <h1> Use the Auth0</h1>
        <button onClick={() => loginWithRedirect()}>Log In</button>
      </div>
    )
  );
};

export default LoginButton;
