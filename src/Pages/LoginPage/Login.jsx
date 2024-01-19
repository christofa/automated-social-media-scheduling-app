import { useState } from "react";
import "./Login.scss"; // External CSS file for styling
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";


function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [userIcon, setUserIcon] = useState(true);
  const [passIcon, setPassIcon] = useState(true);

  const handleLogin = () => {
    // Logic for logging in the user (e.g., API call)
    console.log("Logged in:", username, password);
  };

  return (
    <div className="login-page">
    <div className="auth-container">
      <h2>Login</h2>
      <div className="input-icon">
        {userIcon ? <FaUser className="icon" /> : ""}
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
            setUserIcon(false);
          }}
        />
      </div>

      <div className="input-icon">
        {passIcon ? <RiLockPasswordFill className="icon" /> : ""}
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            setPassIcon(false);
          }}
        />
        <Link to="/Home">
        <button onClick={handleLogin}>Login</button>
        </Link>

        <p>New User?</p>
        <Link to="/Register">
          <button> Register </button>
        </Link>
      </div>
    </div>
  </div>
  )
}

export default Login
