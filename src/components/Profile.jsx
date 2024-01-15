import React, { useContext } from "react";
import UserContext from "../context/UserContext";

function Profile() {
  const { user } = useContext(UserContext);

  if (!user) return <h1>Not logged in </h1>;
  if (user.username.length === 0) return <h1>User Name Not Provided</h1>;
  if (user.password.length === 0) return <h1>Password Not Provided</h1>;
  return (
    <div>
      <h1>Profile : {user.username}</h1>
    </div>
  );
}

export default Profile;
