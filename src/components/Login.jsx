import { useState, useContext } from "react";
import UserContext from "../context/UserContext";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { setUser } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ username, password });
  };

  const clearFields = () => {
    setPassword("");
    setUsername("");
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
        autoFocus
        className="bg-blue-600 text-white font-bold p-1"
      />{" "}
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        className="bg-blue-600 text-white font-bold mr-5 p-1"
      />
      <button
        onClick={handleSubmit}
        className="bg-red-600 text-white mr-5 pr-5 pl-5 pt-1 pb-1"
      >
        Submit
      </button>
      <button
        onClick={clearFields}
        className="bg-green-600 text-white pr-5 pl-5 pt-1 pb-1"
      >
        clear
      </button>
    </div>
  );
}

export default Login;
