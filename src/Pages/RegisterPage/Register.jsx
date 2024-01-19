import { useState } from "react";
import { MdEmail } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { RiLockPasswordFill } from "react-icons/ri";
import "./Register.scss";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [userIcon, setUserIcon] = useState(true);
  const [emailIcon, setEmailIcon] = useState(true);
  const [passIcon, setPassIcon] = useState(true);
  const [confPass, setConfPass] = useState(true);

  const handleRegister = () => {
    console.log("Registered:", username, password);
  };

  return (
    <div className="Register-page">
      <div className="auth-container">
        <h2>Register</h2>
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
          {emailIcon ? <MdEmail className="icon" /> : ""}
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setEmailIcon(false);
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
        </div>
        <div className="input-icon">
          {confPass ? <RiLockPasswordFill className="icon" /> : ""}
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPass}
            onChange={(e) => {
              setConfirmPass(e.target.value);
              setConfPass(false);
            }}
          />
        </div>
        <Link to="/">
        <button onClick={handleRegister}>Register</button>
        </Link>
        
      </div>
    </div>
  );
};

export default Register;
