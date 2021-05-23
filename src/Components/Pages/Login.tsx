import { useAuth } from "../../Context/authContext";

type AUTH = {
  authState: any;
  authDispatch: any;
};

export default function Login() {
  const { authState, authDispatch } = useAuth();

  console.log("SSSSSSSSSSSS", authState);
  return (
    <div className="loginContainer">
      <h1>I am Login</h1>
      <p>{authState ? "asdfsf" : "asfaf"}</p>
      {authState.isUserLoggedIn ? (
        <button onClick={() => authDispatch({ type: "LOGOUT" })}>LogOut</button>
      ) : (
        <button onClick={() => authDispatch({ type: "LOGIN" })}>LogIN</button>
      )}
    </div>
  );
}
