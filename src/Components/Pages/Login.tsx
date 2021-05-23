import { useAuth } from "../../Context/authContext";
import { useNavigate } from "react-router-dom";
import "./login.css";

type AUTH = {
  authState: any;
  authDispatch: any;
};

export default function Login() {
  const { authState, authDispatch } = useAuth();

  let navigate = useNavigate();
  authState.isUserLoggedIn && navigate("/categories");

  return (
    <div className="loginContainer">
      <h1 className="loginHeading">Login to Continue</h1>
      <p className="loginPara">Login as Guest</p>

      <button
        className="loginBtn"
        onClick={() => authDispatch({ type: "LOGIN" })}
      >
        Login
      </button>
    </div>
  );
}
