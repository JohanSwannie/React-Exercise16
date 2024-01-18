import { useContext } from "react";
import UserContext from "../context/UserContext";

function Profile() {
  const { user } = useContext(UserContext);

  if (!user) return <h1>Not logged in</h1>;

  if (user.username.length < 5)
    return <h1>User Name must be at least 5 characters</h1>;

  if (user.password.length < 8)
    return <h1>Password must be at least 8 characters</h1>;

  return (
    <div>
      <h1>Profile : {user.username}</h1>
    </div>
  );
}

export default Profile;
