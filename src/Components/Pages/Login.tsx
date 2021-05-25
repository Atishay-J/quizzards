import { useAuth } from "../../Context/authContext";
import { useNavigate } from "react-router-dom";
import "./login.css";
import { useState } from "react";

type AUTH = {
  authState: any;
  authDispatch: any;
};

export default function Login() {
  const { authState, authDispatch } = useAuth();
  const [userName, setUserName] = useState("");
  const [showUsernameRequired, setShowUsernameRequired] = useState(false);

  let navigate = useNavigate();
  authState.isUserLoggedIn && navigate("/categories");

  const handleUserLogin = () => {
    if (userName) {
      authDispatch({ type: "LOGIN", payload: { userName } });
    }
    setShowUsernameRequired(true);
  };

  return (
    <div className="loginContainer">
      <h1 className="loginHeading">Login to Continue</h1>
      {showUsernameRequired && (
        <p className="loginPara">Username is Required</p>
      )}

      <input
        className="usernameInput"
        type="text"
        required
        value={userName}
        placeholder="Username"
        onChange={(e) => setUserName(e.target.value)}
      />

      <button className="loginBtn" onClick={handleUserLogin}>
        Login As Guest
      </button>
    </div>
  );
}
