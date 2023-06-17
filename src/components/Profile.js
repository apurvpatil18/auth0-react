import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import JSONPretty from "react-json-pretty";

const Profile = () => {
  const { user, isAuthenticated } = useAuth0();
  return (
    isAuthenticated && (
      <div className="auth-profile">
        <img src={user.picture} alt={user.name} />
        <h1>{user.name}</h1>
        <h2>{user.email}</h2>
        <JSONPretty data={user} />
        {/* {JSON.stringify(user, null, 2)} */}
      </div>
    )
  );
};

export default Profile;
